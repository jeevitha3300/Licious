// import React, { useState, useEffect } from "react";
// import "./account.css";
// import { useNavigate } from "react-router-dom";
// import Header from "../Header/Header";

// const Account = () => {
//   const [activeTab, setActiveTab] = useState("Order History");
//   const [orderHistory, setOrderHistory] = useState([]);
//   const navigate = useNavigate();

//   const storedUser = localStorage.getItem("user");
//   const user = storedUser ? JSON.parse(storedUser) : {};

//   // ✅ Fetch user orders
//   useEffect(() => {
//     const fetchOrders = async () => {
//       if (user?.email) {
//         try {
//           const response = await fetch(`http://localhost:5000/api/orders/${user.email}`);
//           const data = await response.json();
//           if (Array.isArray(data) && data.length > 0) {
//             setOrderHistory(data);
//           } else {
//             const localOrders = JSON.parse(localStorage.getItem(`orderHistory_${user.email}`)) || [];
//             setOrderHistory(localOrders);
//           }
//         } catch (err) {
//           console.error("Failed to fetch orders:", err);
//         }
//       }
//     };
//     fetchOrders();
//   }, [user?.email]);

//   const renderContent = () => {
//     switch (activeTab) {
//       case "Order History":
//         if (!orderHistory.length) return <p className="text-center mt-3">No Order History</p>;

//         return (
//           <div className="order-history-list">
//             {[...orderHistory].reverse().map((order) => (
//               <div key={order._id || order.createdAt} className="order-card mb-3 p-3 border rounded shadow-sm">
//                 <h6 className="fw-bold text-danger">
//                 <span className="text-dark">Order No:</span>  {order.Orderno || order._id?.slice(-6).toUpperCase()}
//                 </h6>
//                 <p>
//                   <strong>Date:</strong>{" "}
//                   {new Date(order.createdAt).toLocaleString("en-IN", {
//                     dateStyle: "medium",
//                     timeStyle: "short",
//                   })}
//                 </p>
//                 <p>
//                   <strong>Delivery Slot:</strong> {order.timeSlot || "Not specified"}
//                 </p>
//                 <p>
//                   <strong>Address:</strong>{" "}
//                   {order.address?.label}, {order.address?.fullAddress}, {order.address?.city} <br />
//                   <strong>Mobile:</strong> {order.address?.mobile}
//                 </p>

//                 <p className="mt-2 mb-1 fw-bold">Items Ordered:</p>
//                 <ul className="list-unstyled">
//                   {order.items.map((item, i) => (
//                     <li key={i} className="d-flex align-items-center mb-2">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         style={{
//                           width: "50px",
//                           height: "50px",
//                           objectFit: "cover",
//                           borderRadius: "6px",
//                           marginRight: "10px",
//                         }}
//                       />
//                       <div>
//                         <span className="fw-semibold">{item.name}</span> <br />
//                         Qty: {item.quantity} × ₹{item.offerPrice} = ₹
//                         {item.quantity * item.offerPrice} <br />
//                         <small className="text-muted">Weight: {item.weight}</small>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>

//                 <hr />
//                 <p>
//                   <strong>Subtotal:</strong> ₹{order.subtotal} <br />
//                   <strong>Delivery:</strong>{" "}
//                   {order.deliveryCharge === 0 ? "Free" : `₹${order.deliveryCharge}`} <br />
//                   <strong>Total:</strong> ₹{order.total || order.totalAmount}
//                 </p>
//               </div>
//             ))}
//           </div>
//         );

//       case "Saved Address":
//         if (!user?.email) return <p>Please log in</p>;
//         const addressKey = `savedAddress_${user.email}`;
//         const savedAddress = JSON.parse(localStorage.getItem(addressKey));
//         if (!savedAddress) return <p className="text-center mt-3">No Address Saved</p>;

//         return (
//           <div className="saved-address-card p-3 border rounded shadow-sm">
//             <h5 className="fw-bold mb-2">🏠 {savedAddress.label}</h5>
//             <p>{savedAddress.fullAddress}</p>
//             <p>{savedAddress.city}</p>
//             <p>Mobile: {savedAddress.mobile}</p>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="container pt-5 account-container">
//         <div className="mb-4">
//           <h5 style={{ fontSize: "28px" }}>
//             {user.firstName || "User"} {user.lastName || ""}
//           </h5>
//           <p className="text-muted m-0">
//             {user.mobile || "N/A"} | {user.email || "N/A"}
//           </p>
//         </div>

//         <div className="row">
//           <div className="col-md-3 border-end accountHead">
//             <ul className="nav flex-column account-tabs">
//               {["Order History", "Saved Address"].map((tab) => (
//                 <li
//                   key={tab}
//                   className={`nav-link py-3 px-4 ${activeTab === tab ? "active-tab" : ""}`}
//                   onClick={() => setActiveTab(tab)}
//                   style={{ cursor: "pointer" }}
//                 >
//                   {tab}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="col-md-9 py-4">{renderContent()}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Account;





import React, { useState, useEffect } from "react";
import "./account.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { FaTruck } from "react-icons/fa";

const Account = () => {
  const [activeTab, setActiveTab] = useState("Order History");
  const [orderHistory, setOrderHistory] = useState([]);
  const [showTracking, setShowTracking] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : {};

  // ✅ Fetch user orders
  const fetchOrders = async () => {
    if (user?.email) {
      try {
        const response = await fetch(`http://localhost:5000/api/orders/${user.email}`);
        const data = await response.json();

        if (data.success && Array.isArray(data.orders)) {
          setOrderHistory(data.orders);
        } else {
          setOrderHistory([]);
        }
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    }
  };

  // ✅ Initial + Auto-refresh fetch
  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, [user?.email]);

  // ⏰ Auto-refresh delivery timer
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // ✅ Update order status (Cancel or Delivered)
  const updateOrderStatus = async (orderId, currentStatus, newStatus) => {
    if (currentStatus === "Delivered") {
      alert("Delivered orders cannot be cancelled.");
      return;
    }
    if (currentStatus === "Cancelled") {
      alert("This order is already cancelled.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setOrderHistory((prev) =>
          prev.map((order) => (order._id === orderId ? result.order : order))
        );
        alert(`Order marked as ${newStatus}`);
      } else {
        alert("Failed to update order: " + result.message);
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  // 🚚 Tracking Logic
  const trackingSteps = ["Order Placed", "Processing", "Shipped", "Delivered"];

  const getTrackingStep = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    const elapsedMins = Math.floor((now - created) / 60000);
    if (elapsedMins < 15) return 0;
    if (elapsedMins < 30) return 1;
    if (elapsedMins < 60) return 2;
    return 3;
  };

  const handleTrackOrder = (order) => {
    setSelectedOrder(order);
    setShowTracking(true);
  };

  const closeTracking = () => {
    setShowTracking(false);
    setSelectedOrder(null);
  };

  // 🕒 Delivery Time Status Display
  const getDeliveryTimeStatus = (createdAt, status) => {
    if (status === "Delivered") return "Delivered";
    if (status === "Cancelled") return "Cancelled";
    if (!createdAt) return "Not Scheduled";

    const deliveryTime = new Date(new Date(createdAt).getTime() + 40 * 60 * 1000);
    const diffMs = deliveryTime - currentTime;

    if (diffMs <= 0) return "Delivered";

    const diffMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;

    if (hours > 0) return `Arriving in ${hours}h ${mins}m`;
    return `Arriving in ${mins}m`;
  };

  // ✅ Render Tabs
  const renderContent = () => {
    switch (activeTab) {
      case "Order History":
        if (!orderHistory.length)
          return <p className="text-center mt-3">No Order History</p>;

        return (
          <div className="order-history-list">
{[...orderHistory]
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  .map((order, idx) => (
    <div key={order._id} className="order-card mb-4 p-3 border rounded shadow-sm">
      <h6 className="fw-bold text-danger">
        <span className="text-dark">Order No:</span>{" "}
             {order._id?.slice(-6).toUpperCase()}
        {orderHistory.length - idx}
      </h6>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(order.createdAt).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>

                <p>
                  <strong>Delivery Slot:</strong> {order.timeSlot || "Not specified"}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {order.address?.label}, {order.address?.fullAddress},{" "}
                  {order.address?.city} <br />
                  <strong>Mobile:</strong> {order.address?.mobile}
                </p>

                <p className="mt-2 mb-1 fw-bold">Items Ordered:</p>
                <ul className="list-unstyled">
                  {order.items.map((item, i) => (
                    <li key={i} className="d-flex align-items-center mb-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "6px",
                          marginRight: "10px",
                        }}
                      />
                      <div>
                        <span className="fw-semibold">{item.name}</span> <br />
                        Qty: {item.quantity} × ₹{item.offerPrice} = ₹
                        {item.quantity * item.offerPrice} <br />
                        <small className="text-muted">Weight: {item.weight}</small>
                      </div>
                    </li>
                  ))}
                </ul>

                <hr />
                <p>
                  <strong>Subtotal:</strong> ₹{order.subtotal} <br />
                  <strong>Delivery:</strong>{" "}
                  {order.deliveryCharge === 0 ? "Free" : `₹${order.deliveryCharge}`} <br />
                  <strong>Total:</strong> ₹{order.totalAmount}
                </p>

                {/* ✅ Status */}
                <p>
                  <strong>Status:</strong>{" "}
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
                </p>

                {/* 🚚 Delivery Status */}
                <p>
                  <strong>Delivery:</strong>{" "}
                  {getDeliveryTimeStatus(order.createdAt, order.status)}
                </p>

                {/* ✅ Buttons */}
                <div className="d-flex gap-2 mt-2">
                  {order.status !== "Delivered" && order.status !== "Cancelled" && (
                    <>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() =>
                          updateOrderStatus(order._id, order.status, "Cancelled")
                        }
                      >
                        Cancel Order
                      </button>

                      <button
                        className="btn btn-outline-info btn-sm"
                        onClick={() => handleTrackOrder(order)}
                      >
                        <FaTruck /> Track
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        );

      case "Saved Address":
        if (!user?.email) return <p>Please log in</p>;
        const addressKey = `savedAddress_${user.email}`;
        const savedAddress = JSON.parse(localStorage.getItem(addressKey));
        if (!savedAddress)
          return <p className="text-center mt-3">No Address Saved</p>;

        return (
          <div className="saved-address-card p-3 border rounded shadow-sm">
            <h5 className="fw-bold mb-2">🏠 {savedAddress.label}</h5>
            <p>{savedAddress.fullAddress}</p>
            <p>{savedAddress.city}</p>
            <p>Mobile: {savedAddress.mobile}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="container pt-5 account-container">
        <div className="mb-4">
          <h5 style={{ fontSize: "28px" }}>
            {user.firstName || "User"} {user.lastName || ""}
          </h5>
          <p className="text-muted m-0">
            {user.mobile || "N/A"} | {user.email || "N/A"}
          </p>
        </div>

        <div className="row">
          <div className="col-md-3 border-end accountHead">
            <ul className="nav flex-column account-tabs">
              {["Order History", "Saved Address"].map((tab) => (
                <li
                  key={tab}
                  className={`nav-link py-3 px-4 ${
                    activeTab === tab ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                  style={{ cursor: "pointer" }}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-9 py-4">{renderContent()}</div>
        </div>
      </div>

      {/* 🚚 Tracking Modal */}
      {showTracking && selectedOrder && (
        <div className="tracking-modal">
          <div className="tracking-modal-content">
            <h5>
              Tracking Order:{" "}
              <strong>{selectedOrder._id.slice(-6).toUpperCase()}</strong>
            </h5>
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
            <button className="btn btn-secondary mt-3" onClick={closeTracking}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Account;
