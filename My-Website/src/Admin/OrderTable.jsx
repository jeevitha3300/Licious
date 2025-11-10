// // import React, { useState, useEffect } from "react";
// // import {
// //   FaTrash,
// //   FaFileCsv,
// //   FaFileExcel,
// //   FaFilePdf,
// //   FaChevronDown,
// //   FaChevronUp,
// //   FaEdit, 
// // } from "react-icons/fa";
// // import { utils as XLSXUtils, writeFile } from "xlsx";
// // import { saveAs } from "file-saver";
// // import jsPDF from "jspdf";
// // import autoTable from "jspdf-autotable";
// // import "./customertable.css";
// // import AdminHeader from "./AdminHeader";
// // import AdminSidebar from "./AdminSidebar";

// // const OrderTable = () => {
// //   const [orderData, setOrderData] = useState([]);
// //   const [entriesPerPage, setEntriesPerPage] = useState(10);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [selectedOrderIds, setSelectedOrderIds] = useState([]);
// //   const [fetchError, setFetchError] = useState(null);
// //   const [expandedRows, setExpandedRows] = useState([]);

// //   const fetchOrders = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/orders");
// //       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
// //       const data = await res.json();
// //       setOrderData(data);
// //       setFetchError(null);
// //     } catch (err) {
// //       console.error("Fetch failed:", err);
// //       setFetchError(err.message);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchOrders();
// //   }, []);

// //   const safeOrderData = Array.isArray(orderData) ? orderData : [];

// //   const filteredData = safeOrderData
// //     .slice()
// //     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
// //     .filter((order) =>
// //       Object.values(order)
// //         .join(" ")
// //         .toLowerCase()
// //         .includes(searchTerm.toLowerCase())
// //     );

// //   const indexOfLastItem = currentPage * entriesPerPage;
// //   const indexOfFirstItem = indexOfLastItem - entriesPerPage;
// //   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
// //   const totalPages = Math.ceil(filteredData.length / entriesPerPage);
// // const handleEdit = (order) => {
// //   alert(`Edit feature coming soon for order: ${order._id}`);
// // };
// //   // Delete single order
// //   const handleDelete = async (orderId) => {
// //     if (window.confirm("Are you sure you want to delete this order?")) {
// //       try {
// //         const res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
// //           method: "DELETE",
// //         });
// //         const data = await res.json();
// //         if (res.ok) {
// //           alert("Order deleted");
// //           fetchOrders();
// //           setSelectedOrderIds((prev) => prev.filter((id) => id !== orderId));
// //         } else {
// //           alert("Delete failed: " + data.message);
// //         }
// //       } catch (err) {
// //         console.error("Delete failed:", err);
// //         alert("Delete failed: " + err.message);
// //       }
// //     }
// //   };

// //   // Bulk delete
// //   const handleDeleteSelected = async () => {
// //     if (selectedOrderIds.length === 0) {
// //       alert("No orders selected.");
// //       return;
// //     }
// //     if (!window.confirm("Are you sure you want to delete all selected orders?"))
// //       return;

// //     try {
// //       const deletePromises = selectedOrderIds.map((id) =>
// //         fetch(`http://localhost:5000/api/orders/${id}`, {
// //           method: "DELETE",
// //         })
// //       );
// //       const responses = await Promise.all(deletePromises);
// //       const hasError = responses.some((res) => !res.ok);

// //       if (hasError) alert("Some deletions failed. Please try again.");
// //       else alert("Selected orders deleted successfully.");

// //       setSelectedOrderIds([]);
// //       fetchOrders();
// //     } catch (err) {
// //       console.error("Bulk delete failed:", err);
// //       alert("Bulk delete failed: " + err.message);
// //     }
// //   };

// //   // Checkbox handling
// //   const toggleCheckbox = (orderId) => {
// //     setSelectedOrderIds((prev) =>
// //       prev.includes(orderId)
// //         ? prev.filter((id) => id !== orderId)
// //         : [...prev, orderId]
// //     );
// //   };

// //   const toggleAllCheckboxes = () => {
// //     const currentIds = currentItems.map((o) => o._id);
// //     const allSelected = currentIds.every((id) =>
// //       selectedOrderIds.includes(id)
// //     );

// //     if (allSelected) {
// //       setSelectedOrderIds((prev) =>
// //         prev.filter((id) => !currentIds.includes(id))
// //       );
// //     } else {
// //       setSelectedOrderIds((prev) => [...new Set([...prev, ...currentIds])]);
// //     }
// //   };

// //   // Toggle expanded rows
// //   const toggleExpand = (id) => {
// //     setExpandedRows((prev) =>
// //       prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
// //     );
// //   };

// //   // Export Functions
// //   const exportToCSV = () => {
// //     const headers = [
// //       "User Email",
// //       "Items Count",
// //       "Subtotal",
// //       "Delivery Charge",
// //       "Total Amount",
// //       "City",
// //       "Time Slot",
// //       "Created At",
// //     ];
// //     const data = filteredData.map((order) => [
// //       order.userEmail,
// //       order.items.length,
// //       order.subtotal,
// //       order.deliveryCharge,
// //       order.totalAmount,
// //       order.address?.city,
// //       order.timeSlot,
// //       new Date(order.createdAt).toLocaleString(),
// //     ]);

// //     const csvContent = [headers.join(","), ...data.map((r) => r.join(","))].join(
// //       "\n"
// //     );
// //     const blob = new Blob([csvContent], {
// //       type: "text/csv;charset=utf-8;",
// //     });
// //     saveAs(blob, "orders.csv");
// //   };

// //   const exportToExcel = () => {
// //     const ws = XLSXUtils.json_to_sheet(
// //       filteredData.map((order) => ({
// //         "User Email": order.userEmail,
// //         "Items Count": order.items.length,
// //         Subtotal: order.subtotal,
// //         "Delivery Charge": order.deliveryCharge,
// //         "Total Amount": order.totalAmount,
// //         City: order.address?.city,
// //         "Time Slot": order.timeSlot,
// //         "Created At": new Date(order.createdAt).toLocaleString(),
// //       }))
// //     );
// //     const wb = XLSXUtils.book_new();
// //     XLSXUtils.book_append_sheet(wb, ws, "Orders");
// //     writeFile(wb, "orders.xlsx");
// //   };

// //   const exportToPDF = () => {
// //     const doc = new jsPDF();
// //     const tableColumn = [
// //       "User Email",
// //       "Items Count",
// //       "Subtotal",
// //       "Delivery",
// //       "Total",
// //       "City",
// //       "Time Slot",
// //       "Date",
// //     ];
// //     const tableRows = filteredData.map((order) => [
// //       order.userEmail,
// //       order.items.length,
// //       order.subtotal,
// //       order.deliveryCharge,
// //       order.totalAmount,
// //       order.address?.city,
// //       order.timeSlot,
// //       new Date(order.createdAt).toLocaleString(),
// //     ]);

// //     doc.text("Order List", 14, 10);
// //     autoTable(doc, { head: [tableColumn], body: tableRows, startY: 20 });
// //     doc.save("orders.pdf");
// //   };

// //   return (
// //     <>
// //       <AdminHeader />
// //       <AdminSidebar />

// //       <div className="customertable-container mb-2">
// //         <div className="customerheader">
// //           <h3 className="cush3">Order Details</h3>
// //         </div>

// //         <div className="d-flex customer-table1 justify-content-between mt-4 align-items-center">
// //           <div>
// //             Show
// //             <select
// //               className="form-select d-inline mx-2 w-auto"
// //               value={entriesPerPage}
// //               onChange={(e) => {
// //                 setEntriesPerPage(Number(e.target.value));
// //                 setCurrentPage(1);
// //               }}
// //             >
// //               {[10, 25, 50, 100].map((n) => (
// //                 <option key={n} value={n}>
// //                   {n}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //           <div>
// //             Search:
// //             <input
// //               type="text"
// //               className="form-control d-inline mx-2 w-auto"
// //               value={searchTerm}
// //               onChange={(e) => {
// //                 setSearchTerm(e.target.value);
// //                 setCurrentPage(1);
// //               }}
// //               placeholder="Search orders..."
// //             />
// //           </div>
// //           <div>
// //             <button
// //               className="btn btn-outline-secondary me-2"
// //               onClick={exportToCSV}
// //             >
// //               <FaFileCsv />
// //             </button>
// //             <button
// //               className="btn btn-outline-success me-2"
// //               onClick={exportToExcel}
// //             >
// //               <FaFileExcel />
// //             </button>
// //             <button
// //               className="btn btn-outline-danger me-2"
// //               onClick={exportToPDF}
// //             >
// //               <FaFilePdf />
// //             </button>
// //             <button
// //               className="btn btn-outline-danger"
// //               onClick={handleDeleteSelected}
// //             >
// //               <FaTrash />
// //             </button>
// //           </div>
// //         </div>

// //         {fetchError && (
// //           <div className="alert alert-danger mt-3" role="alert">
// //             Error fetching orders: {fetchError}
// //           </div>
// //         )}

// //         <div className="customer-table2 mb-3">
// //           <table className="table table-bordered table-hover">
// //             <thead className="thead-light">
// //               <tr>
// //                 <th>
// //                   <input
// //                     type="checkbox"
// //                     checked={
// //                       currentItems.length > 0 &&
// //                       currentItems.every((o) =>
// //                         selectedOrderIds.includes(o._id)
// //                       )
// //                     }
// //                     onChange={toggleAllCheckboxes}
// //                   />
// //                 </th>
// //                     <th>Order No</th>
// //                 <th>User Email</th>
// //                 <th>Items</th>
// //                 <th>Subtotal</th>
// //                 <th>Delivery</th>
// //                 <th>Total</th>
// //                 <th>City</th>
// //                 <th>Time Slot</th>
// //                 <th>Date</th>
// //                 <th>Actions</th>
// //               </tr>
// //             </thead>

// //             <tbody>
// //               {currentItems.length === 0 ? (
// //                 <tr>
// //                   <td colSpan="11" className="text-center">
// //                     No orders found
// //                   </td>
// //                 </tr>
// //               ) : (
// //                 currentItems.map((order, idx) => (
// //                   <React.Fragment key={order._id}>
// //                     <tr>
// //                       <td>
// //                         <input
// //                           type="checkbox"
// //                           checked={selectedOrderIds.includes(order._id)}
// //                           onChange={() => toggleCheckbox(order._id)}
// //                         />
// //                       </td>
                      
// //                <td>{order.Orderno || order._id.slice(-6).toUpperCase()}</td>
// //                       <td>{order.userEmail}</td>
// //                       <td>
// //                         <button
// //                           className="btn btn-sm "
// //                           onClick={() => toggleExpand(order._id)}
// //                         >
// //                           {expandedRows.includes(order._id) ? (
// //                             <>
// //                               <FaChevronUp /> ({order.items.length})
// //                             </>
// //                           ) : (
// //                             <>
// //                               <FaChevronDown />  ({order.items.length})
// //                             </>
// //                           )}
// //                         </button>
// //                       </td>
// //                       <td>{order.subtotal}</td>
// //                       <td>{order.deliveryCharge}</td>
// //                       <td>{order.totalAmount}</td>
// //                       <td>{order.address?.city}</td>
// //                       <td>{order.timeSlot}</td>
// //                       <td>{new Date(order.createdAt).toLocaleString()}</td>
// //                       <td>
// //                          <button className="btn btn-sm btn-success me-2" onClick={() => handleEdit(order)}><FaEdit /></button>
// //                         <button
// //                           className="btn btn-sm btn-danger"
// //                           onClick={() => handleDelete(order._id)}
// //                         >
// //                           <FaTrash />
// //                         </button>
// //                       </td>
// //                     </tr>

// //                     {/* Expanded Item Rows */}
// //                     {expandedRows.includes(order._id) && (
// //                       <tr>
// //                         <td colSpan="11">
// //                           <table className="table table-sm table-bordered mb-0">
// //                             <thead>
// //                               <tr className="table-secondary">
// //                                 <th>Image</th>
// //                                 <th>Name</th>
// //                                 <th>Quantity</th>
// //                                 <th>Price</th>
// //                                 <th>Offer Price</th>
// //                                 <th>Weight</th>
// //                               </tr>
// //                             </thead>
// //                             <tbody>
// //                               {order.items.map((item, i) => (
// //                                 <tr key={i}>
// //                                   <td>
// //                                     {item.image ? (
// //                                       <img
// //                                         src={item.image}
// //                                         alt={item.name}
// //                                         style={{
// //                                           width: "50px",
// //                                           height: "50px",
// //                                           objectFit: "cover",
// //                                           borderRadius: "8px",
// //                                         }}
// //                                       />
// //                                     ) : (
// //                                       "N/A"
// //                                     )}
// //                                   </td>
// //                                   <td>{item.name}</td>
// //                                   <td>{item.quantity}</td>
// //                                   <td>{item.price}</td>
// //                                   <td>{item.offerPrice}</td>
// //                                   <td>{item.weight || "Not specified"}</td>
// //                                 </tr>
// //                               ))}
// //                             </tbody>
// //                           </table>
// //                         </td>
// //                       </tr>
// //                     )}
// //                   </React.Fragment>
// //                 ))
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Pagination */}
// //          <ul className="pagination justify-content-end ">
// //         <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
// //           <button className="page-link " onClick={() => setCurrentPage(currentPage - 1)} style={{backgroundColor:"#ff2e56",border:"1px solid #fff",color:"#fff",borderRadius:"10px",border:"none"}}>Previous</button>
// //         </li>
// //         {Array.from({ length: totalPages }, (_, i) => (
// //           <li key={i} className={` mx-1 page-item ${currentPage === i + 1 ? 'active' : ''}`}>
// //             <button className="page-link " onClick={() => setCurrentPage(i + 1)} style={{backgroundColor:"#198754",border:"1px solid #198754",color:"#fff"}}>{i + 1}</button>
// //           </li>
// //         ))}
// //         <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
// //           <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}style={{backgroundColor:"#ff2e56",border:"1px solid #fff",color:"#fff",borderRadius:"10px",padding:"6px 25px",border:"none"}}>Next</button>
// //         </li>
// //       </ul>

// //       </div>
// //     </>
// //   );
// // };

// // export default OrderTable;
// // ===============================================================================================================
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

  // ✅ Fetch orders
  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/orders");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      console.log("Fetched Orders:", data);
      setOrderData(Array.isArray(data) ? data : data.orders || []);
      setFetchError(null);
    } catch (err) {
      console.error("Fetch failed:", err);
      setFetchError(err.message);
    }
  };

  // ✅ Update status
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

  // ✅ Initial fetch
  useEffect(() => {
    fetchOrders();
  }, []);

  // ✅ Auto refresh every 30s
  useEffect(() => {
    const interval = setInterval(fetchOrders, 30000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Update current time every minute
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

  // ✅ Delivery time status display fix
  const getDeliveryTimeStatus = (order) => {
    if (!order) return "Unknown";
    if (order.status === "Delivered") return "Delivered";
    if (order.status === "Cancelled") return "Cancelled";

    if (!order.createdAt) return "Not Scheduled";
    const deliveryTime = new Date(new Date(order.createdAt).getTime() + 40 * 60 * 1000);
    const diffMs = deliveryTime - currentTime;
    if (diffMs <= 0) return "Delivered";

    const diffMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    if (hours > 0) return `Arriving in ${hours}h ${mins}m`;
    return `Arriving in ${mins}m`;
  };

  // ✅ Expand/collapse rows
  const toggleExpand = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  // ✅ Checkbox handlers
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

  // ✅ Track order
  const handleTrackOrder = (order) => {
    setSelectedOrder(order);
    setShowTracking(true);
  };

  const closeTracking = () => {
    setShowTracking(false);
    setSelectedOrder(null);
  };

  const getTrackingStep = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    const elapsedMins = Math.floor((now - created) / 60000);
    if (elapsedMins < 15) return 0;
    if (elapsedMins < 30) return 1;
    if (elapsedMins < 60) return 2;
    return 3;
  };

  const trackingSteps = ["Order Placed", "Processing", "Shipped", "Delivered"];

  // ✅ Delete order
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
      console.error("Delete failed:", err);
      alert("Delete failed: " + err.message);
    }
  };

  // ✅ Bulk delete
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
      console.error("Bulk delete failed:", err);
      alert("Bulk delete failed: " + err.message);
    }
  };

  // ✅ Export to CSV/Excel/PDF
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
      "Time Slot",
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
      order.timeSlot || "N/A",
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
        "Time Slot": order.timeSlot || "N/A",
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
      head: [
        [
          "User Email",
          "Items Count",
          "Subtotal",
          "Delivery Charge",
          "Total",
          "City",
          "Status",
          "Created At",
        ],
      ],
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
          <div className="alert alert-danger mt-3" role="alert">
            Error fetching orders: {fetchError}
          </div>
        )}

        {/* ✅ Orders Table */}
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
              {currentItems.map((order) => (
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

                    {/* ✅ Corrected Status Display */}
                    <td>
                      <span
                        className={`badge ${
                          order.status === "Delivered"
                            ? "bg-success"
                            : order.status === "Cancelled"
                            ? "bg-danger"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {order.status || "Pending"}
                      </span>
                    </td>

                    {/* ✅ Delivery Time */}
                    <td>
                      {order.status === "Cancelled" ? (
                        <span className="text-danger fw-semibold">
                          Order Cancelled
                        </span>
                      ) : (
                        getDeliveryTimeStatus(order)
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
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ Tracking Modal */}
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
                        idx <= getTrackingStep(selectedOrder.createdAt)
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

export default OrderTable;
