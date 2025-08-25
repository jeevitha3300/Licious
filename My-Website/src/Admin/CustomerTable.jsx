import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaFileCsv, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { utils as XLSXUtils, writeFile } from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './customertable.css';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const fetchCustomers = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/customers');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setCustomerData(data);
      setFetchError(null);
    } catch (err) {
      console.error("Fetch failed:", err);
      setFetchError(err.message);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Defensive copy
  const safeCustomerData = Array.isArray(customerData) ? customerData : [];

  // Filter and sort customers
  const filteredData = safeCustomerData
    .slice()
    .sort((a, b) => (a._id < b._id ? 1 : -1))
    .filter(customer =>
      Object.values(customer)
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

  // Pagination calculations
  const indexOfLastItem = currentPage * entriesPerPage;
  const indexOfFirstItem = indexOfLastItem - entriesPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  // Delete handler
  const handleDelete = async (customerId) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        const res = await fetch(`http://localhost:5000/api/customers/${customerId}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (res.ok) {
          alert('Customer deleted');
          fetchCustomers();
          setSelectedCustomerIds(prev => prev.filter(id => id !== customerId));
        } else {
          alert('Delete failed: ' + data.message);
        }
      } catch (err) {
        console.error("Delete failed:", err);
        alert('Delete failed: ' + err.message);
      }
    }
  };

  // Edit handler
  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setShowModal(true);
  };

  // Update submit handler
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/customers/${editingCustomer._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingCustomer),
      });

      if (res.ok) {
        alert("Customer updated successfully");
        fetchCustomers();
        setShowModal(false);
      } else {
        const error = await res.json();
        alert("Update failed: " + error.message);
      }
    } catch (err) {
      console.error("Update failed:", err);
      alert('Update failed: ' + err.message);
    }
  };

  // Checkbox toggle
  const toggleCheckbox = (customerId) => {
    setSelectedCustomerIds(prev => {
      if (prev.includes(customerId)) {
        return prev.filter(id => id !== customerId);
      } else {
        return [...prev, customerId];
      }
    });
  };

  // Toggle select all on current page
  const toggleAllCheckboxes = () => {
    const currentPageCustomerIds = currentItems.map(customer => customer._id);
    const allSelected = currentPageCustomerIds.every(id => selectedCustomerIds.includes(id));

    if (allSelected) {
      setSelectedCustomerIds(prev => prev.filter(id => !currentPageCustomerIds.includes(id)));
    } else {
      setSelectedCustomerIds(prev => [...new Set([...prev, ...currentPageCustomerIds])]);
    }
  };

  // Export CSV
  const exportToCSV = () => {
    const headers = ["First Name", "Last Name", "Phone", "Email", "City", "Password"];
    const data = filteredData.map(customer => [
      customer.firstName, customer.lastName, customer.mobile, customer.email, customer.city, customer.password
    ]);

    const csvContent = [
      headers.join(","),
      ...data.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "customers.csv");
  };

  // Export Excel
  const exportToExcel = () => {
    const ws = XLSXUtils.json_to_sheet(filteredData.map(customer => ({
      "First Name": customer.firstName,
      "Last Name": customer.lastName,
      "Phone": customer.mobile,
      "Email": customer.email,
      "City": customer.city,
      "Password": customer.password,
    })));
    const wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, "Customers");
    writeFile(wb, "customers.xlsx");
  };

  // Export PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["First Name", "Last Name", "Phone", "Email", "City", "Password"];
    const tableRows = filteredData.map(customer => [
      customer.firstName,
      customer.lastName,
      customer.mobile,
      customer.email,
      customer.city,
      customer.password
    ]);

    doc.text("Customer List", 14, 10);
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("customers.pdf");
  };

  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>
    <div className="customertable-container mb-2">
      <div className="customerheader"><h3 className='cush3'>Customer Details</h3></div>{/* userh */}

      {/* Controls */}
      <div className="d-flex customer-table1  justify-content-between mt-4 align-items-center">
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
            {[10, 25, 50, 100].map(n => <option key={n} value={n}>{n}</option>)}
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
            placeholder="Search customers..."
          />
        </div>
        <div>
          <button className="btn btn-outline-secondary me-2" onClick={exportToCSV}><FaFileCsv className="me-1" /></button>
          <button className="btn btn-outline-success me-2" onClick={exportToExcel}><FaFileExcel className="me-1" /></button>
          <button className="btn btn-outline-danger" onClick={exportToPDF}><FaFilePdf className="me-1" /></button>
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
                  checked={currentItems.length > 0 && currentItems.every(user => selectedCustomerIds.includes(user._id))}
                  onChange={toggleAllCheckboxes}
                />
              </th>
              <th>Sr No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>City</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length === 0 ? (
              <tr><td colSpan="9" className="text-center">No users found</td></tr>
            ) : (
              currentItems.map((customer, idx) => (
                <tr key={customer._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedCustomerIds.includes(customer._id)}
                      onChange={() => toggleCheckbox(customer._id)}
                    />
                  </td>
                 <td>{filteredData.length - (indexOfFirstItem + idx)}</td>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.mobile}</td>
                  <td>{customer.email}</td>
                  <td>{customer.city}</td>
                  {/* <td>{user.password}</td> */}
                  <td>{'*'.repeat(customer.password.length)}</td>
                  <td>
                    <button className="btn btn-sm btn-success me-2" onClick={() => handleEdit(user)}><FaEdit /></button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user._id)}><FaTrash /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <ul className="pagination justify-content-end ">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link " onClick={() => setCurrentPage(currentPage - 1)} style={{backgroundColor:"#ff2e56",border:"1px solid #fff",color:"#fff",borderRadius:"10px",border:"none"}}>Previous</button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i} className={` mx-1 page-item ${currentPage === i + 1 ? 'active' : ''}`}>
            <button className="page-link " onClick={() => setCurrentPage(i + 1)} style={{backgroundColor:"#198754",border:"1px solid #198754",color:"#fff"}}>{i + 1}</button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}style={{backgroundColor:"#ff2e56",border:"1px solid #fff",color:"#fff",borderRadius:"10px",padding:"6px 25px",border:"none"}}>Next</button>
        </li>
      </ul>

      {/* Edit Modal */}
      {showModal && editingCustomer && (
        <div className="modal d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <form onSubmit={handleUpdateSubmit}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Customer</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  {['firstName', 'lastName', 'mobile', 'email', 'city', 'password'].map((field, idx) => (
                    <input
                      key={idx}
                      className="form-control mb-2"
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={editingCustomer[field] || ''}
                      onChange={e => setEditingCustomer({ ...editingCustomer, [field]: e.target.value })}
                      required
                    />
                  ))}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                  <button type="submit" className="btn btn-primary">Save</button>
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

export default CustomerTable;


