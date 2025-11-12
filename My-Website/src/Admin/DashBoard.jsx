import React, { useState, useEffect } from "react";
import "./dashboard.css";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import NewUser from "./NewUser";
import CustomerTable from "./CustomerTable";

const DashBoard = () => {
  const [activeContent, setActiveContent] = useState("dashboard");

  // State for counts
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalBanners, setTotalBanners] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  const [fetchError, setFetchError] = useState(null);

  // ✅ Fetch total orders
  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/orders");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      const orders = Array.isArray(data) ? data : data.orders || [];
      setTotalOrders(orders.length);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
      setFetchError("Unable to fetch order count");
    }
  };

  // ✅ Fetch total banners
  const fetchBanners = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/banner");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      const banners = Array.isArray(data) ? data : data.banners || [];
      setTotalBanners(banners.length);
    } catch (err) {
      console.error("Failed to fetch banners:", err);
      setFetchError("Unable to fetch banner count");
    }
  };

  // ✅ Fetch total users
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/manageuser");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      const users = Array.isArray(data) ? data : data.users || [];
      setTotalUsers(users.length);
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setFetchError("Unable to fetch user count");
    }
  };

  // ✅ Fetch total customers
  const fetchCustomers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/customers");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      const customers = Array.isArray(data) ? data : data.customers || [];
      setTotalCustomers(customers.length);
    } catch (err) {
      console.error("Failed to fetch customers:", err);
      setFetchError("Unable to fetch customer count");
    }
  };

  // ✅ Fetch total categories
  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/categories");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      const categories = Array.isArray(data) ? data : data.categories || [];
      setTotalCategories(categories.length);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
      setFetchError("Unable to fetch category count");
    }
  };

  // ✅ Fetch total products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      const products = Array.isArray(data) ? data : data.products || [];
      setTotalProducts(products.length);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setFetchError("Unable to fetch product count");
    }
  };

  // ✅ Run all fetches when Dashboard loads
  useEffect(() => {
    fetchOrders();
    fetchBanners();
    fetchUsers();
    fetchCustomers();
    fetchCategories();
    fetchProducts();
  }, []);

  // Dashboard Stats
  const stats = [
    { title: "Total Orders", value: totalOrders },
    { title: "Total Banners", value: totalBanners },
    { title: "Total Users", value: totalUsers },
    { title: "Total Customers", value: totalCustomers },
    { title: "Total Categories", value: totalCategories },
    { title: "Total Products", value: totalProducts },
  ];

  return (
    <>
      <AdminSidebar />
      <AdminHeader />
      <div style={{ display: "flex", cursor: "pointer" }}>
        <div className="adminmain">
          <div className="admindash-cards">
            {activeContent === "dashboard" &&
              stats.map((stat, index) => (
                <div className="admindash-cards1" key={index}>
                  <h3 className="dashboardtext1">
                    {fetchError &&
                    [
                      "Total Orders",
                      "Total Banners",
                      "Total Users",
                      "Total Customers",
                      "Total Categories",
                      "Total Products",
                    ].includes(stat.title)
                      ? "N/A"
                      : stat.value}
                  </h3>
                  <p className="dashboardtext2">{stat.title}</p>
                </div>
              ))}

            {activeContent === "customer" && <CustomerTable />}
            {activeContent === "newuser" && <NewUser />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
