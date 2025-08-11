import React, { useState, useEffect } from 'react';
import './usertable.css';

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers).map((user, index) => ({
        id: index + 1,
        ...user
      }));
      setUserData(parsedUsers);
    }
  }, []);
  // 🔍 Search filter across all fields
  const filteredData = userData.filter(user => {
    const search = searchTerm.toLowerCase();
    return (
      (user.firstName && user.firstName.toLowerCase().includes(search)) ||
      (user.lastName && user.lastName.toLowerCase().includes(search)) ||
      (user.mobile && user.mobile.toLowerCase().includes(search)) ||
      (user.email && user.email.toLowerCase().includes(search)) ||
      (user.city && user.city.toLowerCase().includes(search)) ||
      (user.password && user.password.toLowerCase().includes(search))
    );
  });
const indexOfLastItem = currentPage * entriesPerPage;
  const indexOfFirstItem = indexOfLastItem - entriesPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
  
    <div className="usertable-container mt-2">
      <div className='userh'>
        User List
      </div>
      {/* Entries and Search */}
      <div className="userentries d-flex justify-content-between align-items-center  mb-2 ">
        <div className=''>
          Show
          <select
            className="form-select d-inline mx-2 w-auto"
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          entries
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
          />
        </div>
      </div>

      {/* User Table */}
      <div className="usertable">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>Sr No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>PhoneNumber</th>
            <th>Email</th>
            <th>City</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center">No data found</td>
            </tr>
          ) : (
            currentItems.map((user, idx) => (
              <tr key={user.id}>
                <td>{indexOfFirstItem + idx + 1}</td>
                <td>{user.firstName || '*********'}</td>
                <td>{user.lastName || '*********'}</td>
                <td>{user.mobile || '*********'}</td>
                <td>{user.email || '*********'}</td>
                <td>{user.city}</td>
                <td>{user.password}</td>
                <td>
                  <button className="btn-useractive btn-danger btn-sm me-2">Active</button>
                  <button className="btn-useractive btn-primary btn-sm">DeActive</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
</div>
      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-end">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default UserTable;
