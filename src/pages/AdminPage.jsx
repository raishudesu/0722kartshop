import React from "react";
import AdminHeader from "../components/AdminHeader";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
    return(
      <div>
          <AdminHeader />
          <Outlet />
      </div>
    )
};

export default AdminPage;

