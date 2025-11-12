import React, { useState, useEffect } from "react";
import {
  FaTrash,
  FaFileCsv,
  FaFileExcel,
  FaFilePdf,
  FaChevronDown,
  FaChevronUp,
  FaTruck,
} from "react-icons/fa";
import { utils as XLSXUtils, writeFile } from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./customertable.css";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
const OrderTable = () => {
  const [orderData, setOrderData] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrderIds, setSelectedOrderIds] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [expandedRows, setExpandedRows] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showTracking, setShowTracking] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
// Fetch orders
  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/orders");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setOrderData(Array.isArray(data) ? data : data.orders || []);
      setFetchError(null);
    } catch (err) {
      console.error("Fetch failed:", err);
      setFetchError(err.message);
    }
  };
// Update status manually
  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:5000/api/orders/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        setOrderData((prev) =>
          prev.map((order) => (order._id === id ? data.order : order))
        );
      }
    } catch (err) {
      console.error("Status update failed:", err);
    }
  };
//Initial fetch + auto refresh
  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 30000);
    return () => clearInterval(interval);
  }, []);
// Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);
const safeOrderData = Array.isArray(orderData) ? orderData : [];
const filteredData = safeOrderData
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .filter((order) =>
      Object.values(order)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
const indexOfLastItem = currentPage * entriesPerPage;
  const indexOfFirstItem = indexOfLastItem - entriesPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
// Delivery status fix (auto mark delivered after 40 min)
  const getDeliveryTimeStatus = (order) => {
    if (!order) return "Unknown";
// If backend already marked delivered/cancelled
    if (order.status === "Delivered") return "Delivered";
    if (order.status === "Cancelled") return "Cancelled";
const created = new Date(order.createdAt);
    const deliveryTime = new Date(created.getTime() + 15 * 60 * 1000);
    const diffMs = deliveryTime - currentTime;
 if (diffMs <= 0) {
      // Auto mark as delivered in UI (even if backend not updated)
      return "Delivered";
    }
 const diffMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    return hours > 0 ? `Arriving in ${hours}h ${mins}m` : `Arriving in ${mins}m`;
  };
//  Expand/collapse rows
  const toggleExpand = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };
//  Checkbox
  const toggleCheckbox = (id) => {
    setSelectedOrderIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };
const toggleAllCheckboxes = () => {
    const currentIds = currentItems.map((o) => o._id);
    const allSelected = currentIds.every((id) => selectedOrderIds.includes(id));
    if (allSelected) {
      setSelectedOrderIds((prev) => prev.filter((id) => !currentIds.includes(id)));
    } else {
      setSelectedOrderIds((prev) => [...new Set([...prev, ...currentIds])]);
    }
  };
// Tracking
  const handleTrackOrder = (order) => {
    setSelectedOrder(order);
    setShowTracking(true);
  };
const closeTracking = () => {
    setShowTracking(false);
    setSelectedOrder(null);
  };
 const getTrackingStep = (createdAt, status) => {
    if (status === "Cancelled") return -1;
    if (status === "Delivered") return 3;
const now = new Date();
    const created = new Date(createdAt);
    const elapsedMins = Math.floor((now - created) / 60000);
    if (elapsedMins < 5) return 0;
    if (elapsedMins < 15) return 1;
    if (elapsedMins < 20) return 2;
    return 3;
  };
const trackingSteps = ["Order Placed", "Processing", "Shipped", "Delivered"];
// Delete order
  const handleDelete = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("Order deleted");
        fetchOrders();
      }
    } catch (err) {
      alert("Delete failed: " + err.message);
    }
  };
// Bulk delete
  const handleDeleteSelected = async () => {
    if (selectedOrderIds.length === 0) return alert("No orders selected.");
    if (!window.confirm("Delete all selected orders?")) return;
    try {
      await Promise.all(
        selectedOrderIds.map((id) =>
          fetch(`http://localhost:5000/api/orders/${id}`, { method: "DELETE" })
        )
      );
      alert("Selected orders deleted successfully.");
      setSelectedOrderIds([]);
      fetchOrders();
    } catch (err) {
      alert("Bulk delete failed: " + err.message);
    }
  };
//  Export functions
  const selectedOrders = orderData.filter((r) =>
    selectedOrderIds.includes(r._id)
  );
const exportToCSV = () => {
    if (selectedOrders.length === 0) return alert("Select at least one order.");
    const headers = [
      "User Email",
      "Items Count",
      "Subtotal",
      "Delivery Charge",
      "Total Amount",
      "City",
      "Status",
      "Created At",
    ];
    const data = selectedOrders.map((order) => [
      order.userEmail,
      order.items.length,
      order.subtotal,
      order.deliveryCharge,
      order.totalAmount,
      order.address?.city || "N/A",
      order.status || "Pending",
      new Date(order.createdAt).toLocaleString(),
    ]);
    const csvContent = [headers.join(","), ...data.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "orders.csv");
  };
const exportToExcel = () => {
    if (selectedOrders.length === 0) return alert("Select at least one order.");
    const ws = XLSXUtils.json_to_sheet(
      selectedOrders.map((order) => ({
        "User Email": order.userEmail,
        "Items Count": order.items.length,
        Subtotal: order.subtotal,
        "Delivery Charge": order.deliveryCharge,
        "Total Amount": order.totalAmount,
        City: order.address?.city || "N/A",
        Status: order.status || "Pending",
        "Created At": new Date(order.createdAt).toLocaleString(),
      }))
    );
    const wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, "Orders");
    writeFile(wb, "orders.xlsx");
  };
const exportToPDF = () => {
    if (selectedOrders.length === 0) return alert("Select at least one order.");
    const doc = new jsPDF();
    autoTable(doc, {
      head: [["User Email", "Items Count", "Subtotal", "Delivery", "Total", "City", "Status", "Date"]],
      body: selectedOrders.map((order) => [
        order.userEmail,
        order.items.length,
        order.subtotal,
        order.deliveryCharge,
        order.totalAmount,
        order.address?.city || "N/A",
        order.status || "Pending",
        new Date(order.createdAt).toLocaleString(),
      ]),
    });
    doc.save("orders.pdf");
  };
return (
    <>
      <AdminHeader />
      <AdminSidebar />
<div className="customertable-container mb-2">
        <div className="customerheader">
          <h3 className="cush3">Order Details</h3>
        </div>
{/* Top Controls */}
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
              placeholder="Search orders..."
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
              <FaTrash />
            </button>
          </div>
        </div>
{fetchError && (
          <div className="alert alert-danger mt-3">Error fetching orders: {fetchError}</div>
        )}
{/* Orders Table */}
        <div className="customer-table2 mb-3">
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={
                      currentItems.length > 0 &&
                      currentItems.every((o) => selectedOrderIds.includes(o._id))
                    }
                    onChange={toggleAllCheckboxes}
                  />
                </th>
                <th>Order No</th>
                <th>User</th>
                <th>Items</th>
                <th>Total</th>
                <th>City</th>
                <th>Status</th>
                <th>Delivery</th>
                <th>Track</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
<tbody>
              {currentItems.map((order) => {
                const deliveryStatus = getDeliveryTimeStatus(order);
                const displayStatus =
                  order.status === "Cancelled"
                    ? "Cancelled"
                    : deliveryStatus === "Delivered"
                    ? "Delivered"
                    : order.status || "Pending";

                return (
                  <React.Fragment key={order._id}>
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedOrderIds.includes(order._id)}
                          onChange={() => toggleCheckbox(order._id)}
                        />
                      </td>
                      <td>{order._id.slice(-6).toUpperCase()}</td>
                      <td>{order.userEmail}</td>
                      <td>
                        <button
                          className="btn btn-sm"
                          onClick={() => toggleExpand(order._id)}
                        >
                          {expandedRows.includes(order._id) ? (
                            <>
                              <FaChevronUp /> ({order.items.length})
                            </>
                          ) : (
                            <>
                              <FaChevronDown /> ({order.items.length})
                            </>
                          )}
                        </button>
                      </td>
                      <td>{order.totalAmount}</td>
                      <td>{order.address?.city || "N/A"}</td>
{/* Correct Status Display */}
                      <td>
                        <span
                          className={`badge ${
                            displayStatus === "Delivered"
                              ? "bg-success"
                              : displayStatus === "Cancelled"
                              ? "bg-danger"
                              : "bg-warning text-dark"
                          }`}
                        >
                          {displayStatus}
                        </span>
                      </td>
{/* Delivery ETA */}
                      <td>
                        {displayStatus === "Cancelled" ? (
                          <span className="text-danger fw-semibold">
                            Order Cancelled
                          </span>
                        ) : deliveryStatus === "Delivered" ? (
                          <span className="text-success fw-semibold">
                            Delivered
                          </span>
                        ) : (
                          deliveryStatus
                        )}
                      </td>
 <td>
                        <button
                          className="btn btn-sm btn-info"
                          onClick={() => handleTrackOrder(order)}
                        >
                          <FaTruck /> Track
                        </button>
                      </td>
                      <td>{new Date(order.createdAt).toLocaleString()}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(order._id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
{/* Expanded Items */}
                    {expandedRows.includes(order._id) && (
                      <tr>
                        <td colSpan="11">
                          <table className="table table-sm table-bordered mb-0">
                            <thead>
                              <tr className="table-secondary">
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Offer Price</th>
                                <th>Weight</th>
                              </tr>
                            </thead>
                            <tbody>
                              {order.items.map((item, i) => (
                                <tr key={i}>
                                  <td>
                                    {item.image ? (
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "cover",
                                          borderRadius: "8px",
                                        }}
                                      />
                                    ) : (
                                      "N/A"
                                    )}
                                  </td>
                                  <td>{item.name}</td>
                                  <td>{item.quantity}</td>
                                  <td>{item.price}</td>
                                  <td>{item.offerPrice}</td>
                                  <td>{item.weight || "Not specified"}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
         {/* Tracking Modal */}
        {showTracking && selectedOrder && (
          <div className="tracking-modal">
            <div className="tracking-modal-content">
              <h5>
                Tracking Order:{" "}
                <strong>{selectedOrder._id.slice(-6).toUpperCase()}</strong>
              </h5>
{selectedOrder.status === "Cancelled" ? (
                <div className="text-center mt-3">
                  <span className="badge bg-danger fs-6 p-2">
                    Order Cancelled
                  </span>
                </div>
              ) : (
                <ul className="tracking-steps">
                  {trackingSteps.map((step, idx) => (
                    <li
                      key={idx}
                      className={
                        idx <=
                        getTrackingStep(selectedOrder.createdAt, selectedOrder.status)
                          ? "active-step"
                          : ""
                      }
                    >
                      {step}
                    </li>
                  ))}
                </ul>
              )}
<button className="btn btn-secondary mt-3" onClick={closeTracking}>
                Close
              </button>
            </div>
          </div>
        )}
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
export default OrderTable;
