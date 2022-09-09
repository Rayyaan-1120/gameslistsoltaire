import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/adminnavbar";


export const Admin = () => {
    return(
        <>
        <AdminNavbar />
        <Outlet />
        </>
    )
}