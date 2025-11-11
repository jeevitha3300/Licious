import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaFileCsv, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { utils as XLSXUtils, writeFile } from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import './customertable.css';
const ManageProduct = () => {
  const [productData, setProductData] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();
  //  Fetch products (GET request)
  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/products');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setProductData(data);

      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // Filter + search + sort
  const filteredData = productData
    .slice()
    .sort((a, b) => (a._id > b._id ? -1 : 1)) // latest first
    .filter((product) =>
      Object.values(product)
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  // Pagination
  const indexOfLastItem = currentPage * entriesPerPage;
  const indexOfFirstItem = indexOfLastItem - entriesPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  // Checkbox helpers
  const toggleCheckbox = (productId) =>
    setSelectedProductIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  const toggleAllCheckboxes = () => {
    const currentIds = currentItems.map((p) => p._id);
    const allSelected = currentIds.every((id) => selectedProductIds.includes(id));
    setSelectedProductIds((prev) =>
      allSelected ? prev.filter((id) => !currentIds.includes(id)) : [...new Set([...prev, ...currentIds])]
    );
  };
  // Delete single
  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${productId}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (res.ok) {
          alert('Product deleted');
          fetchProducts();
          setSelectedProductIds((prev) => prev.filter((id) => id !== productId));
        } else {
          alert('Delete failed: ' + (data.message || 'Unknown error'));
        }
      } catch (err) {
        console.error('Delete failed:', err);
        alert('Delete failed: ' + err.message);
      }
    }
  };
  // Delete multiple
  const handleDeleteSelected = async () => {
    if (selectedProductIds.length === 0) {
      alert('No product selected.');
      return;
    }
    if (!window.confirm('Are you sure you want to delete all selected products?')) return;

    try {
      const deletePromises = selectedProductIds.map((id) =>
        fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' })
      );
      const responses = await Promise.all(deletePromises);
      const hasError = responses.some((res) => !res.ok);
      if (hasError) {
        alert('Some deletions failed. Please try again.');
      } else {
        alert('Selected products deleted successfully.');
      }
      setSelectedProductIds([]);
      fetchProducts();
    } catch (err) {
      console.error('Bulk delete failed:', err);
      alert('Bulk delete failed: ' + err.message);
    }
  };
  // Edit product
  const handleEdit = (product) => {
    navigate('/newproduct', { state: { product } });
  };
  //  Toggle Enable/Disable
  const handleToggleEnable = async (productId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${productId}/toggle`, {
        method: 'PUT',
      });
      if (res.ok) {
        fetchProducts();
      } else {
        const error = await res.json();
        alert('Toggle failed: ' + error.message);
      }
    } catch (err) {
      console.error('Toggle failed:', err);
      alert('Toggle failed: ' + err.message);
    }
  };
  // Export CSV
  const exportToCSV = () => {
    const selectedProducts = productData.filter((p) => selectedProductIds.includes(p._id));
    if (selectedProducts.length === 0) {
      alert('Please select at least one product to export.');
      return;
    }
    const headers = ['Name', 'Category', 'Subcategory', 'Price', 'OfferPrice'];
    const rows = selectedProducts.map((p) => [
      p.name,
      p.category,
      p.subcategory,
      p.wieght,
      p.price,
      p.offerPrice ?? '',
      p.images,
    ]);
    const csvContent = [headers, ...rows].map((e) => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'products.csv');
  };
  // Export Excel
  const exportToExcel = () => {
    const selectedProducts = productData.filter((p) => selectedProductIds.includes(p._id));
    if (selectedProducts.length === 0) {
      alert('Please select at least one product to export.');
      return;
    }
    const ws = XLSXUtils.json_to_sheet(
      selectedProducts.map((p) => ({
        Name: p.name,
        Category: p.category,
        Subcategory: p.subcategory,
        Weight: p.weight,
        Price: p.price,
        OfferPrice: p.offerPrice ?? '',
        Images: p.images
      }))
    );
    const wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, 'Products');
    writeFile(wb, 'products.xlsx');
  };
  // Export PDF
  const exportToPDF = () => {
    const selectedProducts = productData.filter((p) => selectedProductIds.includes(p._id));
    if (selectedProducts.length === 0) {
      alert('Please select at least one product to export.');
      return;
    }
    const doc = new jsPDF();
    autoTable(doc, {
      head: [['Name', 'Category', 'Subcategory', 'Price', 'OfferPrice']],
      body: selectedProducts.map((p) => [
        p.name,
        p.category,
        p.subcategory,
        p.weight,
        p.price,
        p.offerPrice ?? '',
        p.images
      ]),
    });
    doc.save('products.pdf');
  };
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className="customertable-container mb-2">
        <div className="customerheader">
          <h3 className="cush3">Manage Products</h3>
        </div>
        {/* Controls */}
        <div className="d-flex customer-table1 justify-content-between align-items-center">
          <div>
            Show{' '}
            <select
              className="form-select d-inline mx-2 w-auto"
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              {[10, 25, 50, 100].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>{' '}
            entries
          </div>
          <div>
            Search:{' '}
            <input
              type="text"
              className="form-control d-inline mx-2 w-auto"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search products..."
            />
          </div>
          <div>
            <button className="btn btn-outline-secondary me-2" onClick={exportToCSV}>
              <FaFileCsv />
            </button>
            <button className="btn btn-outline-success me-2" onClick={exportToExcel}>
              <FaFileExcel />
            </button>
            <button className="btn btn-outline-danger me-2" onClick={exportToPDF}>
              <FaFilePdf />
            </button>
            <button className="btn btn-outline-danger" onClick={handleDeleteSelected}>
              <FaTrash className="me-1" />
            </button>
          </div>
        </div>
        {/* Error */}
        {fetchError && <div className="alert alert-danger mt-3">Error fetching products: {fetchError}</div>}
        {/* Table */}
        <div className="customer-table2 mb-3">
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr style={{ textAlign: "center" }} >
                <th>
                  <input
                    type="checkbox"
                    checked={
                      currentItems.length > 0 &&
                      currentItems.every((p) => selectedProductIds.includes(p._id))
                    }
                    onChange={toggleAllCheckboxes}
                  />
                </th>
                <th>Category</th>
                <th>Subcategory</th>
                <th>Name</th>
                <th>Description</th>
                <th>Weight</th>
                <th>Price</th>
                <th style={{ whiteSpace: 'nowrap' }}>Offer Price</th>
                <th>Images</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {!currentItems.length ? (
                <tr>
                  <td colSpan="9" className="text-center">No products found</td>
                </tr>
              ) : (
                currentItems.map((p) => (
                  <tr key={p._id} style={{ textAlign: "center" }} >
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedProductIds.includes(p._id)}
                        onChange={() => toggleCheckbox(p._id)}
                      />
                    </td>
                    <td className="truncate-text">{p.category?.category || '-'}</td>
                    <td className="truncate-text">{p.subcategory || '-'}</td>
                    <td className="truncate-text">{p.name}</td>
                    <td className="truncate-text">{p.desc}</td>
                    <td className="truncate-text1">{p.weight}</td>
                    <td>{p.price}</td>
                    <td>{p.offerPrice ?? '-'}</td>
                    <td>
                      {p.images && p.images.length > 0 ? (
                        <img
                          src={p.images[0].startsWith('http') ? p.images[0] : `http://localhost:5000${p.images[0]}`}
                          alt="product"
                          style={{ width: '50px', height: 'auto', borderRadius: '5px', objectFit: 'cover' }}
                        />
                      ) : (
                        <span style={{ color: 'gray' }}>No image</span>
                      )}
                    </td>
                    <td>
                      <div
                        className={`toggle-switch ${p.enabled ? "enabled" : "disabled"}`}
                        onClick={() => handleToggleEnable(p._id)}
                      >
                        <div className="toggle-circle"></div>
                      </div>
                    </td>
                    <td >
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <button className="btn btn-sm btn-success" onClick={() => handleEdit(p)}><FaEdit /></button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p._id)}><FaTrash /> </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <ul className="pagination justify-content-end" style={{ cursor: 'pointer' }}>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(p => p - 1)}
              style={{ backgroundColor: "#ff2e56", color: "#fff", borderRadius: "10px", border: "none" }}
            >Previous</button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`mx-1 page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(i + 1)}
                style={{ backgroundColor: "#198754", color: "#fff" }}
              >{i + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(p => p + 1)}
              style={{ backgroundColor: "#ff2e56", color: "#fff", borderRadius: "10px", border: "none", padding: "6px 25px" }}
            >Next</button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ManageProduct;




