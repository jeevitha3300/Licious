import React, { useState } from "react";
import './dashboard.css';
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import NewUser from "./NewUser";
import CustomerTable from "./CustomerTable";
const DashBoard = () => {
    const [activeContent, setActiveContent] = useState("dashboard");
    const stats = [
        { title: "Total Order", value: 1188 },
        { title: "Total Banner", value: 4 },
        { title: "Total User", value: 1226 },
        { title: "Total Category", value: 10 },
        { title: "Total Product", value: 16 },
        { title: "Total Testimonial", value: 3 },
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
                                    <h3 className="dashboardtext1">{stat.value}</h3>
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
