

import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaFileCsv, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { utils as XLSXUtils, writeFile } from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './customertable.css';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const ManageBanner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingBanner, setEditingBanner] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedBannerIds, setSelectedBannerIds] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const fetchBanners = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/banner');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setBannerData(data);
      setFetchError(null);
    } catch (err) {
      console.error('Fetch failed:', err);
      setFetchError(err.message);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const safeBannerData = Array.isArray(bannerData) ? bannerData : [];
  const filteredData = safeBannerData
    .slice()
    .sort((a, b) => (a._id < b._id ? 1 : -1))
    .filter((banner) =>
      Object.values(banner).join(' ').toLowerCase().includes(searchTerm.toLowerCase())
    );

  const indexOfLastItem = currentPage * entriesPerPage;
  const indexOfFirstItem = indexOfLastItem - entriesPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const handleDelete = async (bannerId) => {
    if (window.confirm('Are you sure you want to delete this banner?')) {
      try {
        const res = await fetch(`http://localhost:5000/api/banner/${bannerId}`, { method: 'DELETE' });
        const data = await res.json();
        res.ok ? alert('Banner deleted') : alert('Delete failed: ' + data.message);
        fetchBanners();
        setSelectedBannerIds((prev) => prev.filter((id) => id !== bannerId));
      } catch (err) {
        console.error('Delete failed:', err);
        alert('Delete failed: ' + err.message);
      }
    }
  };

  const handleEdit = (banner) => {
    setEditingBanner(banner);
    setShowModal(true);
  };

  const handleToggleEnable = async (bannerId, currentStatus) => {
    try {
      const res = await fetch(`http://localhost:5000/api/banner/${bannerId}/toggle`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) fetchBanners();
      else {
        const error = await res.json();
        alert('Toggle failed: ' + error.message);
      }
    } catch (err) {
      console.error('Toggle failed:', err);
      alert('Toggle failed: ' + err.message);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/banner/${editingBanner._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingBanner),
      });
      if (res.ok) {
        alert('Banner updated successfully');
        fetchBanners();
        setShowModal(false);
      } else {
        const error = await res.json();
        alert('Update failed: ' + error.message);
      }
    } catch (err) {
      console.error('Update failed:', err);
      alert('Update failed: ' + err.message);
    }
  };

  const toggleCheckbox = (bannerId) =>
    setSelectedBannerIds((prev) =>
      prev.includes(bannerId) ? prev.filter((id) => id !== bannerId) : [...prev, bannerId]
    );

  const toggleAllCheckboxes = () => {
    const currentIds = currentItems.map((b) => b._id);
    const allSelected = currentIds.every((id) => selectedBannerIds.includes(id));
    setSelectedBannerIds((prev) =>
      allSelected ? prev.filter((id) => !currentIds.includes(id)) : [...new Set([...prev, ...currentIds])]
    );
  };

  const exportToCSV = () => {
    const headers = ['Banner Name', 'Status'];
    const data = filteredData.map((b) => [b.name, b.enabled ? 'Enabled' : 'Disabled']);
    const csv = [headers.join(','), ...data.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'banners.csv');
  };

  const exportToExcel = () => {
    const ws = XLSXUtils.json_to_sheet(
      filteredData.map((b) => ({ 'Banner Name': b.name, Status: b.enabled ? 'Enabled' : 'Disabled' }))
    );
    const wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, 'Banners');
    writeFile(wb, 'banners.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const columns = ['Banner Name', 'Status'];
    const rows = filteredData.map((b) => [b.name, b.enabled ? 'Enabled' : 'Disabled']);
    doc.text('Banner List', 14, 10);
    autoTable(doc, { head: [columns], body: rows, startY: 20 });
    doc.save('banners.pdf');
  };

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className="customertable-container mb-2">
        <div className="customerheader">
          <h3 className="cush3">Banner Details</h3>
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
              {[10, 25, 50, 100].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
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
              placeholder="Search banners..."
            />
          </div>
          <div>
            <button className="btn btn-outline-secondary me-2" onClick={exportToCSV}>
              <FaFileCsv />
            </button>
            <button className="btn btn-outline-success me-2" onClick={exportToExcel}>
              <FaFileExcel />
            </button>
            <button className="btn btn-outline-danger" onClick={exportToPDF}>
              <FaFilePdf />
            </button>
          </div>
        </div>

        {fetchError && <div className="alert alert-danger mt-3">Error fetching banners: {fetchError}</div>}

        <div className="customer-table2 mb-3">
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={
                      currentItems.length > 0 && currentItems.every((b) => selectedBannerIds.includes(b._id))
                    }
                    onChange={toggleAllCheckboxes}
                  />
                </th>
                <th>Sr No.</th>
                <th>Banner Name</th>
                <th>Banner Image</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {!currentItems.length ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No banners found
                  </td>
                </tr>
              ) : (
                currentItems.map((b, idx) => (
                  <tr key={b._id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedBannerIds.includes(b._id)}
                        onChange={() => toggleCheckbox(b._id)}
                      />
                    </td>
                    {/* <td>{indexOfFirstItem + idx + 1}</td> */}
                    <td>{filteredData.length - (indexOfFirstItem + idx)}</td>
                     <td>{b.name}</td>
                    <td>
                      <img src={b.image} alt={b.name} style={{ maxWidth: '150px', height: 'auto' }} />
                    </td>
                    <td>
                      <span style={{padding:"10px 30px"}} className={`badge ${b.enabled ? 'bg-success' : 'bg-secondary'}`}>
                        {b.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                      <button style={{marginLeft:"15%",padding:'5px 30px'}} 
                        className="btn btn-sm text-light btn-outline-primary bg-primary"
                        onClick={() => handleToggleEnable(b._id, b.enabled)}
                      >
                        {b.enabled ? 'Disable' : 'Enable'}
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-success me-2" onClick={() => handleEdit(b)}>
                        <FaEdit />
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDelete(b._id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <ul className="pagination justify-content-end">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} >
            <button className="page-link" onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))} style={{backgroundColor:"#ff2e56",border:"1px solid #fff",color:"#fff",borderRadius:"10px",border:"none"}}>
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`mx-1 page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(i + 1)} style={{backgroundColor:"#198754",border:"1px solid #198754",color:"#fff"}}>
                {i + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}style={{backgroundColor:"#ff2e56",border:"1px solid #fff",color:"#fff",borderRadius:"10px",padding:"6px 25px",border:"none"}}>
              Next
            </button>
          </li>
        </ul>

        {showModal && editingBanner && (
          <div className="modal d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
              <form onSubmit={handleUpdateSubmit}>
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Banner</h5>
                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                  </div>
                  <div className="modal-body">
                    <input
                      className="form-control mb-2"
                      placeholder="Banner Name"
                      value={editingBanner.name || ''}
                      onChange={(e) => setEditingBanner({ ...editingBanner, name: e.target.value })}
                      required
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="Banner Image URL"
                      value={editingBanner.image || ''}
                      onChange={(e) => setEditingBanner({ ...editingBanner, image: e.target.value })}
                      required
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageBanner;
