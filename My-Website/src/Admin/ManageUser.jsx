
import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaFileCsv, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { utils as XLSXUtils, writeFile } from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useNavigate } from 'react-router-dom';
import './customertable.css';
import AdminHeader from '../Admin/AdminHeader';
import AdminSidebar from '../Admin/AdminSidebar';

const ManageUser = () => {
  const [userData, setUserData] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState({});

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

  const selectedUsers = safeUserData.filter(user => selectedUserIds.includes(user._id));

  const handleDelete = async (userid) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/manageuser/${userid}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (res.ok) {
        alert("User deleted");
        fetchUsers();
        setSelectedUserIds(prev => prev.filter(uid => uid !== userid));
      } else {
        alert('Delete failed: ' + data.message);
      }
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Delete failed: " + err.message);
    }
  };

  const handleEdit = (user) => {
    // Navigate to Newuser with user data to edit
    navigate('/newuser', { state: { user } });
  };

  const togglePasswordVisibility = (userId) => {
  setPasswordVisibility(prev => ({
    ...prev,
    [userId]: !prev[userId],
  }));
};

  const toggleCheckbox = (userId) => {
    setSelectedUserIds(prev => {
      if (prev.includes(userId)) {
        return prev.filter(id => id !== userId);
      } else {
        return [...prev, userId];
      }
    });
  };

  const toggleAllCheckboxes = () => {
    const currentPageUserIds = currentItems.map(user => user._id);
    const allSelected = currentPageUserIds.every(id => selectedUserIds.includes(id));
    if (allSelected) {
      setSelectedUserIds(prev => prev.filter(id => !currentPageUserIds.includes(id)));
    } else {
      setSelectedUserIds(prev => [...new Set([...prev, ...currentPageUserIds])]);
    }
  };

  // Export functions ...

  const exportToCSV = () => {
    if (selectedUserIds.length === 0) {
      alert("Please select at least one user to export.");
      return;
    }
    const headers = ["Name", "Contact", "Email", "Designation", "Permissions", "Password"];
    const rows = selectedUsers.map(user => [
      user.name,
      user.contact,
      user.email,
      user.designation,
      Object.entries(user.permissions || {})
        .filter(([_, v]) => v)
        .map(([k]) => k)
        .join(", "),
      user.password,
    ]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "users.csv");
  };

  const exportToExcel = () => {
    if (selectedUserIds.length === 0) {
      alert("Please select at least one user to export.");
      return;
    }
    const ws = XLSXUtils.json_to_sheet(
      selectedUsers.map(user => ({
        Name: user.name,
        Contact: user.contact,
        Email: user.email,
        Designation: user.designation,
        Permissions: Object.entries(user.permissions || {})
          .filter(([_, v]) => v)
          .map(([k]) => k)
          .join(", "),
        Password: user.password,
      }))
    );
    const wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, "Users");
    writeFile(wb, "users.xlsx");
  };

  const exportToPDF = () => {
    if (selectedUserIds.length === 0) {
      alert("Please select at least one user to export.");
      return;
    }
    const doc = new jsPDF();
    autoTable(doc, {
      head: [["Name", "Contact", "Email", "Designation", "Permissions", "Password"]],
      body: selectedUsers.map(user => [
        user.name,
        user.contact,
        user.email,
        user.designation,
        Object.entries(user.permissions || {})
          .filter(([_, v]) => v)
          .map(([k]) => k)
          .join(", "),
        user.password,
      ]),
    });
    doc.save("users.pdf");
  };

  const handleDeleteSelected = async () => {
    if (selectedUserIds.length === 0) {
      alert("Please select at least one user to delete.");
      return;
    }
    if (!window.confirm("Are you sure you want to delete all selected users?")) return;
    try {
      const deletePromises = selectedUserIds.map(id =>
        fetch(`http://localhost:5000/api/manageuser/${id}`, { method: "DELETE" })
      );
      const responses = await Promise.all(deletePromises);
      const hasError = responses.some(res => !res.ok);
      if (hasError) {
        alert("Some deletions failed. Please try again.");
      } else {
        alert("Selected users deleted successfully.");
      }
      setSelectedUserIds([]);
      fetchUsers();
    } catch (err) {
      console.error("Bulk delete failed:", err);
      alert("Bulk delete failed: " + err.message);
    }
  };

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className="customertable-container mb-2">
        <div className="customerheader"><h3 className='cush3'>User </h3></div>
        <div className=" d-flex customer-table1 justify-content-between align-items-center mt-4 ">
          <div>
            Show{' '}
            <select
              className="form-select d-inline mx-2 w-auto"
              value={entriesPerPage}
              onChange={e => {
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
            Search:{' '}
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
            <button className="btn btn-outline-danger me-2" onClick={exportToPDF}><FaFilePdf /></button>
            <button className="btn btn-outline-danger " onClick={handleDeleteSelected} >
              <FaTrash className="me-1" />
            </button>
          </div>
        </div>

        {fetchError && (
          <div className="alert alert-danger mt-3" role="alert">
            Error fetching users: {fetchError}
          </div>
        )}

        <div className="customer-table2 mb-3">
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={toggleAllCheckboxes}
                    checked={currentItems.every(u => selectedUserIds.includes(u._id))}
                  />
                </th>
                {/* <th>Sr No.</th> */}
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
                  {/* <td>{filteredData.length - (indexOfFirstItem + idx)}</td> */}
                  <td>{user.name}</td>
                  <td>{user.contact}</td>
                  <td>{user.email}</td>
                  <td >{user.designation}</td>
                  <td className="truncate-text">
                    {Object.entries(user.permissions || {}).filter(([_, v]) => v).map(([k], index) => (
                      <React.Fragment key={k}>
                        <span className="bg-danger rounded me-1 mb-2 d-inline-block" style={{ padding: '2px' }}>{k} </span>
                        {/* {(index + 1) % 4 === 0 && <br />} */}
                      </React.Fragment>
                    ))}
                  </td>
                  {/* <td>{user.password}</td> */}
                  <td>
                          <input
                            type={passwordVisibility[user._id] ? "text" : "password"}
                            value={user.password}
                            readOnly
                            style={{ border: "none", background: "transparent", width: "100px" }}/>
                            <button
                             onClick={() => togglePasswordVisibility(user._id)}
                             className="btn btn-sm btn-link"
                             type="button">
                             {passwordVisibility[user._id] ? "🙈" : "👁️"}
                            </button>
                            </td>
                             <td>
                    <button className="btn btn-sm btn-success mx-2" onClick={() => handleEdit(user)}><FaEdit /></button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user._id)}><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <ul className="pagination justify-content-end" style={{cursor:'pointer'}}>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(p => p - 1)}
              style={{ backgroundColor: "#ff2e56", border: "1px solid #fff", color: "#fff", borderRadius: "10px", border: "none",cursor:"pointer" }}
            >Previous</button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`mx-1 page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(i + 1)}
                style={{ backgroundColor: "#198754", border: "1px solid #198754", color: "#fff" }}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(p => p + 1)}
              style={{ backgroundColor: "#ff2e56", border: "1px solid #fff", color: "#fff", borderRadius: "10px", padding: "6px 25px", border: "none" }}
            >Next</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ManageUser;
