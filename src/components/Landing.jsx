import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { EmpDetails } from "./EmpDetails";
import { AddEmp } from "./AddEmp";
import { Dashboard } from "./Dashboard";
import { Nav } from "./Nav";
import { Logout } from "./Logout";
import { Login } from "./Login";

export const Landing = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<AddEmp />} />
                    <Route path="/empdtl" element={<EmpDetails />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>

    )
}