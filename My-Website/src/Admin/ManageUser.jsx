

import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaFileCsv, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { utils as XLSXUtils, writeFile } from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './customertable.css';
import AdminHeader from '../Admin/AdminHeader';
import AdminSidebar from '../Admin/AdminSidebar';

const ManageUser = () => {
  const [userData, setUserData] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingUser, setEditingUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
    const [fetchError, setFetchError] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/manageuser');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setUserData(data);
      setFetchError(null);
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setFetchError(err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
const safeUserData = Array.isArray(userData) ? userData : [];
  const filteredData = safeUserData
    .slice()
    .sort((a, b) => (a._id < b._id ? 1 : -1))
    // .sort((a, b) => (a._id < b._id ? 1 : -1))

    .filter(user =>
      Object.values(user)
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );


  const indexOfLastItem = currentPage * entriesPerPage;
  const indexOfFirstItem = indexOfLastItem - entriesPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const handleDelete = async (userid) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await fetch(`http://localhost:5000/api/manageuser/${userid}`, { method: 'DELETE' });
        const data = await res.json();
        if (res.ok) {
      alert("User deleted");
      fetchUsers();
      setSelectedUserIds(prev => prev.filter(uid => uid !== id));
    } else {
          alert('Delete failed: ' + data.message);
        }
      }catch (err) {
        console.error("Delete failed:", err);
      alert("Delete failed: " + err.message);
    }
  };
// Edit
  const handleEdit = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };
// Update
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/manageuser/${editingUser._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingUser)
      });
  
      if (!res.ok) {
      alert("User updated successfully");
      setShowModal(false);
      fetchUsers();
    } else {
        const error = await res.json();
        alert("Update failed: " + error.message);
      }
    }catch (err) {
      alert("Update failed: " + err.message);
    }
  };

  // Checkbox toggle
  const toggleCheckbox = (userId) => {
    setSelectedUserIds(prev => {
      if (prev.includes(userId)) {
        return prev.filter(id => id !== userId);
      } else {
        return [...prev, userId];
      }
    });
  };

  // Toggle select all on current page
  const toggleAllCheckboxes = () => {
    const currentPageUserIds = currentItems.map(user => user._id);
    const allSelected = currentPageUserIds.every(id => selectedUserIds.includes(id));

    if (allSelected) {
      setSelectedUserIds(prev => prev.filter(id => !currentPageUserIds.includes(id)));
    } else {
      setSelectedUserIds(prev => [...new Set([...prev, ...currentPageUserIds])]);
    }
  };

  const exportToCSV = () => {
    const headers = ["Name", "Contact", "Email", "Designation", "Permissions", "Password"];
    const rows = filteredData.map(user => [
      user.name,
      user.contact,
      user.email,
      user.designation,
      Object.entries(user.permissions || {}).filter(([_, v]) => v).map(([k]) => k).join(", "),
      user.password,
    ]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "users.csv");
  };

  const exportToExcel = () => {
    const ws = XLSXUtils.json_to_sheet(filteredData.map(user => ({
      Name: user.name,
      Contact: user.contact,
      Email: user.email,
      Designation: user.designation,
      Permissions: Object.entries(user.permissions || {}).filter(([_, v]) => v).map(([k]) => k).join(", "),
      Password: user.password,
    })));
    const wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, "Users");
    writeFile(wb, "users.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [["Name", "Contact", "Email", "Designation", "Permissions", "Password"]],
      body: filteredData.map(user => [
        user.name,
        user.contact,
        user.email,
        user.designation,
        Object.entries(user.permissions || {}).filter(([_, v]) => v).map(([k]) => k).join(", "),
        user.password,
      ]),
    });
    doc.save("users.pdf");
  };

  return (
    <>
    <AdminHeader/>
 <AdminSidebar/>
   <div className="customertable-container mb-2">
      <div className="customerheader"><h3 className='cush3'>User Details</h3></div>

      <div className=" d-flex customer-table1 justify-content-between align-items-center mt-4 ">
        <div>
          Show
          <select className="form-select d-inline mx-2 w-auto" value={entriesPerPage} onChange={e => {
            setEntriesPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}>
            {[10, 25, 50, 100].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>

        <div>
          Search:
          <input
            type="text"
            className="form-control d-inline mx-2 w-auto"
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div>
          <button className="btn btn-outline-secondary me-2" onClick={exportToCSV}><FaFileCsv /></button>
          <button className="btn btn-outline-success me-2" onClick={exportToExcel}><FaFileExcel /></button>
          <button className="btn btn-outline-danger" onClick={exportToPDF}><FaFilePdf /></button>
        </div>
      </div>
        {fetchError && (
        <div className="alert alert-danger mt-3" role="alert">
          Error fetching users: {fetchError}
        </div>
      )}
        <div className="customer-table2  mb-3">
<table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th><input type="checkbox" onChange={toggleAllCheckboxes} checked={currentItems.every(u => selectedUserIds.includes(u._id))} /></th>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Permissions</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length === 0 ? (
            <tr><td colSpan="9" className="text-center">No users found</td></tr>
          ) : currentItems.map((user, idx) => (
            <tr key={user._id}>
              <td><input type="checkbox" checked={selectedUserIds.includes(user._id)} onChange={() => toggleCheckbox(user._id)} /></td>
              {/* <td>{currentItems.length-index }</td> */}
               <td>{filteredData.length - (indexOfFirstItem + idx)}</td>
              <td>{user.name}</td>
              <td>{user.contact}</td>
              <td>{user.email}</td>
              <td>{user.designation}</td>
              <td>{Object.entries(user.permissions || {}).filter(([_, v]) => v).map(([k]) => (
                <span key={k} className=" bg-danger rounded  me-1 mb-2" style={{padding:'2px'}}>{k}</span>
              ))}</td>
             <td>{'*'.repeat(user.password.length)}</td>
              <td >
                <button className="btn btn-sm btn-success me-2 " onClick={() => handleEdit(user)}><FaEdit /></button>
                <button className="btn btn-sm btn-danger " onClick={() => handleDelete(user._id)}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
      {/* Pagination */}
      <ul className="pagination justify-content-end">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => setCurrentPage(p => p - 1)}  style={{backgroundColor:"#ff2e56",border:"1px solid #fff",color:"#fff",borderRadius:"10px",border:"none"}}>Previous</button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i} className={`mx-1 page-item ${currentPage === i + 1 ? 'active' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(i + 1)} style={{backgroundColor:"#198754",border:"1px solid #198754",color:"#fff"}}>{i + 1}</button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => setCurrentPage(p => p + 1)} style={{backgroundColor:"#ff2e56",border:"1px solid #fff",color:"#fff",borderRadius:"10px",padding:"6px 25px",border:"none"}}>Next</button>
        </li>
      </ul>

       {/* Edit Modal */}
      {showModal && (
        <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <form onSubmit={handleUpdateSubmit}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5>Edit User</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  {['name', 'contact', 'email', 'designation', 'password'].map(field => (
                    <input
                      key={field}
                      className="form-control mb-2"
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={editingUser[field]}
                      onChange={e => setEditingUser({ ...editingUser, [field]: e.target.value })}
                    />
                  ))}
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" type="button" onClick={() => setShowModal(false)}>Close</button>
                  <button className="btn btn-primary" type="submit">Save</button>
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

export default ManageUser;
