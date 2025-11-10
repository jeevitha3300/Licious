import React, { useState, useEffect } from "react";
import {
  FaEdit,
  FaTrash,
  FaFileCsv,
  FaFileExcel,
  FaFilePdf,
} from "react-icons/fa";
import { utils as XLSXUtils, writeFile } from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useNavigate } from "react-router-dom";
import "./customertable.css"; // your table styles
// import "./toggleswitch.css"; // optional toggle switch styles
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const ManageBanner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBannerIds, setSelectedBannerIds] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();

  // ✅ Fetch banners from API
  const fetchBanners = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/banner");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setBannerData(data);
      setFetchError(null);
    } catch (err) {
      console.error("Fetch failed:", err);
      setFetchError(err.message);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // ✅ Filter, sort, search
  const safeBannerData = Array.isArray(bannerData) ? bannerData : [];
  const filteredData = safeBannerData
    .slice()
    .sort((a, b) => (a._id < b._id ? 1 : -1))
    .filter((banner) =>
      Object.values(banner).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
    );

  const indexOfLastItem = currentPage * entriesPerPage;
  const indexOfFirstItem = indexOfLastItem - entriesPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  // ✅ Delete banner
  const handleDelete = async (bannerId) => {
    if (window.confirm("Are you sure you want to delete this banner?")) {
      try {
        const res = await fetch(`http://localhost:5000/api/banner/${bannerId}`, {
          method: "DELETE",
        });
        const data = await res.json();
        res.ok ? alert("Banner deleted") : alert("Delete failed: " + data.message);
        fetchBanners();
        setSelectedBannerIds((prev) => prev.filter((id) => id !== bannerId));
      } catch (err) {
        console.error("Delete failed:", err);
        alert("Delete failed: " + err.message);
      }
    }
  };

  //  Edit banner (navigate to NewBanner with state)
  const handleEdit = (banner) => {
    navigate("/newbanner", { state: { banner } });
  };
//  const handleToggleEnable = async (bannerId) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/banner/${bannerId}/toggle`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (res.ok) {
//         fetchBanners(); // refresh data
//       } else {
//         const error = await res.json();
//         alert("Toggle failed: " + error.message);
//       }
//     } catch (err) {
//       console.error("Toggle failed:", err);
//       alert("Toggle failed: " + err.message);
//     }
//   };

const handleToggleEnable = async (bannerId) => {
  try {
    const res = await fetch(`http://localhost:5000/api/banner/${bannerId}/toggle`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      fetchBanners(); // refresh data
    } else {
      const error = await res.json();
      alert("Toggle failed: " + error.message);
    }
  } catch (err) {
    console.error("Toggle failed:", err);
    alert("Toggle failed: " + err.message);
  }
};

  //  Selection helpers
  const toggleCheckbox = (bannerId) =>
    setSelectedBannerIds((prev) =>
      prev.includes(bannerId)
        ? prev.filter((id) => id !== bannerId)
        : [...prev, bannerId]
    );

  const toggleAllCheckboxes = () => {
    const currentIds = currentItems.map((b) => b._id);
    const allSelected = currentIds.every((id) => selectedBannerIds.includes(id));
    setSelectedBannerIds((prev) =>
      allSelected
        ? prev.filter((id) => !currentIds.includes(id))
        : [...new Set([...prev, ...currentIds])]
    );
  };

  // ✅ Export helpers
  const selectedBanners = bannerData.filter((b) =>
    selectedBannerIds.includes(b._id)
  );

  const exportToCSV = () => {
    if (selectedBanners.length === 0) return alert("Select at least one banner.");
    const headers = ["Name", "Type", "Status"];
    const rows = selectedBanners.map((banner) => [
      banner.name,
      banner.type,
      banner.enabled ? "Enabled" : "Disabled",
    ]);
    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "banners.csv");
  };

  const exportToExcel = () => {
    if (selectedBanners.length === 0) return alert("Select at least one banner.");
    const ws = XLSXUtils.json_to_sheet(
      selectedBanners.map((banner) => ({
        Name: banner.name,
        Type: banner.type,
        Status: banner.enabled ? "Enabled" : "Disabled",
      }))
    );
    const wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, "Banners");
    writeFile(wb, "banners.xlsx");
  };

  const exportToPDF = () => {
    if (selectedBanners.length === 0) return alert("Select at least one banner.");
    const doc = new jsPDF();
    autoTable(doc, {
      head: [["Name", "Type", "Status"]],
      body: selectedBanners.map((banner) => [
        banner.name,
        banner.type,
        banner.enabled ? "Enabled" : "Disabled",
      ]),
    });
    doc.save("banners.pdf");
  };


const handleDeleteSelected = async () => {
  if (selectedBannerIds.length === 0) return alert("No banners selected.");
  if (!window.confirm("Delete all selected banners?")) return;

  try {
    const deletePromises = selectedBannerIds.map((id) =>
      fetch(`http://localhost:5000/api/banner/${id}`, { method: "DELETE" })
    );
    const responses = await Promise.all(deletePromises);
    const hasError = responses.some((res) => !res.ok);

    if (hasError) alert("Some deletions failed.");
    else alert("Selected banners deleted successfully.");

    setSelectedBannerIds([]);
    fetchBanners();
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
        <div className="customerheader">
          <h3 className="cush3">Manage Banners</h3>
        </div>

        {/* Controls */}
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
            <button className="btn btn-outline-danger me-2" onClick={exportToPDF}>
              <FaFilePdf />
            </button>
            <button className="btn btn-outline-danger" onClick={handleDeleteSelected}>
              <FaTrash className="me-1" />
            </button>
          </div>
        </div>

        {/* Error */}
        {fetchError && (
          <div className="alert alert-danger mt-3">
            Error fetching banners: {fetchError}
          </div>
        )}

        {/* Table */}
        <div className="customer-table2 mb-3">
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={
                      currentItems.length > 0 &&
                      currentItems.every((b) => selectedBannerIds.includes(b._id))
                    }
                    onChange={toggleAllCheckboxes}
                  />
                </th>
                <th>Name</th>
                <th>Image</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {!currentItems.length ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    No banners found
                  </td>
                </tr>
              ) : (
                currentItems.map((b) => (
                  <tr key={b._id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedBannerIds.includes(b._id)}
                        onChange={() => toggleCheckbox(b._id)}
                      />
                    </td>
                    <td>{b.name}</td>
                    <td>
                      <img
                        src={b.image}
                        alt={b.name}
                        style={{ maxWidth: "150px", height: "auto" }}
                      />
                    </td>
                    <td>{b.type}</td>
                    <td>
                      <div
                        className={`toggle-switch ${b.enabled ? "enabled" : "disabled"}`}
                        onClick={() => handleToggleEnable(b._id)}
                      >
                        <div className="toggle-circle"></div>
                      </div>
                      {/* <div className="toggle-label">
                        {b.enabled ? "ENABLE" : "DISABLE"}
                      </div> */}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-success me-2"
                        onClick={() => handleEdit(b)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(b._id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <ul className="pagination justify-content-end" style={{ cursor: "pointer" }}>
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage((p) => p - 1)}
              style={{
                backgroundColor: "#ff2e56",
                border: "none",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`mx-1 page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(i + 1)}
                style={{
                  backgroundColor: "#198754",
                  border: "1px solid #198754",
                  color: "#fff",
                }}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage((p) => p + 1)}
              style={{
                backgroundColor: "#ff2e56",
                border: "none",
                color: "#fff",
                borderRadius: "10px",
                padding: "6px 25px",
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ManageBanner;
