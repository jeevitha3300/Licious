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
const ManageCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();
  const fetchCategories = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/categories');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setCategoryData(data);
      setFetchError(null);
    } catch (err) {
      console.error('Fetch failed:', err);
      setFetchError(err.message);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const safeCategoryData = Array.isArray(categoryData) ? categoryData : [];
  const filteredData = safeCategoryData
    .slice()
    .sort((a, b) => (a._id < b._id ? 1 : -1))
    .filter(category =>
      Object.values(category)
        .flatMap(val => (Array.isArray(val) ? val.map(sub => Object.values(sub).join(' ')) : val))
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  const indexOfLastItem = currentPage * entriesPerPage;
  const indexOfFirstItem = indexOfLastItem - entriesPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const toggleCheckbox = (categoryId) =>
    setSelectedCategoryIds(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  const toggleAllCheckboxes = () => {
    const currentIds = currentItems.map(c => c._id);
    const allSelected = currentIds.every(id => selectedCategoryIds.includes(id));
    setSelectedCategoryIds(prev =>
      allSelected
        ? prev.filter(id => !currentIds.includes(id))
        : [...new Set([...prev, ...currentIds])]
    );
  };
  const handleDelete = async (categoryId) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/categories/${categoryId}`, { method: 'DELETE' });
      const data = await res.json();
      if (res.ok) {
        alert('Category deleted');
        fetchCategories();
        setSelectedCategoryIds(prev => prev.filter(id => id !== categoryId));
      } else {
        alert('Delete failed: ' + data.message);
      }
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Delete failed: ' + err.message);
    }
  };
  const handleEdit = (category) => navigate('/newcategory', { state: { category } });
  const handleToggleEnable = async (categoryId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/categories/${categoryId}/toggle`, { method: 'PUT' });
      if (res.ok) {
        fetchCategories();
      } else {
        const error = await res.json();
        alert('Toggle failed: ' + error.message);
      }
    } catch (err) {
      console.error('Toggle failed:', err);
      alert('Toggle failed: ' + err.message);
    }
  };
  const handleDeleteSelected = async () => {
    if (!selectedCategoryIds.length) return alert('No category selected.');
    if (!window.confirm('Are you sure you want to delete all selected categories?')) return;
    try {
      const deletePromises = selectedCategoryIds.map(id =>
        fetch(`http://localhost:5000/api/categories/${id}`, { method: 'DELETE' })
      );
      const responses = await Promise.all(deletePromises);
      const hasError = responses.some(res => !res.ok);
      if (hasError) {
        alert('Some deletions failed. Please try again.');
      } else {
        alert('Selected categories deleted successfully.');
      }
      setSelectedCategoryIds([]);
      fetchCategories();
    } catch (err) {
      console.error('Bulk delete failed:', err);
      alert('Bulk delete failed: ' + err.message);
    }
  };
  const selectedCategories = categoryData.filter(c => selectedCategoryIds.includes(c._id));
  const exportToCSV = () => {
    if (!selectedCategories.length) return alert('Select at least one category to export.');
    const headers = ['Category Name', 'Subcategory Name', 'Status'];
    const rows = selectedCategories.flatMap(c =>
      c.subcategories.map(sub => [
        c.category,
        sub.name,
        c.enabled ? 'Enabled' : 'Disabled'
      ])
    );
    const csvContent = [headers, ...rows].map(e => e.join(',')).join('\n');
    saveAs(new Blob([csvContent], { type: 'text/csv;charset=utf-8;' }), 'categories.csv');
  };
  const exportToExcel = () => {
    if (!selectedCategories.length) return alert('Select at least one category to export.');
    const ws = XLSXUtils.json_to_sheet(
      selectedCategories.flatMap(c =>
        c.subcategories.map(sub => ({
          'Category Name': c.category,
          'Subcategory Name': sub.name,
          Status: c.enabled ? 'Enabled' : 'Disabled',
        }))
      )
    );
    const wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, 'Categories');
    writeFile(wb, 'categories.xlsx');
  };
  const exportToPDF = () => {
    if (!selectedCategories.length) return alert('Select at least one category to export.');
    const doc = new jsPDF();
    autoTable(doc, {
      head: [['Category Name', 'Subcategory Name', 'Status']],
      body: selectedCategories.flatMap(c =>
        c.subcategories.map(sub => [
          c.category,
          sub.name,
          c.enabled ? 'Enabled' : 'Disabled'
        ])
      ),
    });
    doc.save('categories.pdf');
  };
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className="customertable-container mb-2">
        <div className="customerheader">
          <h3 className="cush3">Category</h3>
        </div>
        <div className="d-flex customer-table1 justify-content-between mt-4 align-items-center">
          <div>
            Show
            <select
              className="form-select d-inline mx-2 w-auto"
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              {[10, 25, 50, 100].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div>
            Search:
            <input
              type="text"
              className="form-control d-inline mx-2 w-auto"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search categories..."
            />
          </div>
          <div>
            <button className="btn btn-outline-secondary me-2" onClick={exportToCSV}><FaFileCsv /></button>
            <button className="btn btn-outline-success me-2" onClick={exportToExcel}><FaFileExcel /></button>
            <button className="btn btn-outline-danger me-2" onClick={exportToPDF}><FaFilePdf /></button>
            <button className="btn btn-outline-danger" onClick={handleDeleteSelected}><FaTrash className="me-1" /></button>
          </div>
        </div>
        {fetchError && <div className="alert alert-danger mt-3">Error fetching categories: {fetchError}</div>}
        <div className="customer-table2 mb-3">
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr style={{ textAlign: "center" }}>
                <th>
                  <input
                    type="checkbox"
                    checked={currentItems.length > 0 && currentItems.every(c => selectedCategoryIds.includes(c._id))}
                    onChange={toggleAllCheckboxes}
                  />
                </th>
                <th>Category Name</th>
                <th>Category Image</th>
                <th>Subcategory Name</th>
                <th>Subcategory Image</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {!currentItems.length ? (
                <tr >
                  <td colSpan="2" className="text-center">No categories found</td>
                </tr>
              ) : (
                currentItems.map(c => (
                  <tr className='p-0' key={c._id} style={{ textAlign: "center", verticalAlign: "middle" }} >
                    <td><input type="checkbox" checked={selectedCategoryIds.includes(c._id)} onChange={() => toggleCheckbox(c._id)} /></td>
                    <td>{c.category}</td>
                    <td className="py-0">
                      <img
                        src={c.image}
                        alt={c.category}
                        style={{
                          width: '50px',
                          height: 'auto',
                          objectFit: 'cover',
                          borderRadius: '5px',
                          display: 'block',
                          margin: 'auto'
                        }}
                      />
                    </td>
                    <td style={{ padding: "0px 0px", }}>
                      {c.subcategories.map((sub, idx) => (
                        <span key={idx}>
                          {sub.name}{idx < c.subcategories.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </td>
                    <td className="py-0">
                      <img
                        src={c.subcategories[0].image}
                        alt={c.subcategories[0].name}
                        style={{
                          width: '50px',
                          height: 'auto',
                          objectFit: 'cover',
                          borderRadius: '5px',
                          display: 'block',
                          margin: 'auto'
                        }}
                      />
                    </td>
                    <td>
                      <div
                        className={`toggle-switch ${c.enabled ? "enabled" : "disabled"}`}
                        onClick={() => handleToggleEnable(c._id)}
                      >
                        <div className="toggle-circle"></div>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <button className="btn btn-sm btn-success" onClick={() => handleEdit(c)}><FaEdit /></button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(c._id)}><FaTrash /></button>
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

export default ManageCategory;



