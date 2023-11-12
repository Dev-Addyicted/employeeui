import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        navigate("/login");
    }, [navigate])

    return (
        <div>
            <h1>Logout Component</h1>
        </div>
    )
}