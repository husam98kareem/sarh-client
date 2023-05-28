import React, { useState } from 'react'
import "./Auth.css"
import bg from "../assets/333.jpg"
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"
import logo from "../assets/logo2.png"

function Auth() {
    const [showLogin, setShowLogin] = useState(true)
    return (
        <div className="auth_page">
            <div className="container">
                <div className="box1">
                    <img src={bg} alt="bg" />

                </div>
                <div className="box2">
                    <img src={logo} alt="" />
                    <Login />
                    <div style={{ color: " #40485A", display: "flex", flexDirection: "column", gap: "0px", fontSize: "14px", height: "60px", padding: "0px" }}>
                        <p style={{ height: "15px", margin: 0 }}> © Copyright 2023</p>
                        <p style={{ height: "15px" }}>All rights reserved.Powered By IT Department</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Auth