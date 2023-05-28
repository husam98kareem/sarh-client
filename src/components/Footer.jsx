import React from 'react'
import { useLocation } from "react-router-dom"
import "./Footer.css"
function Footer() {
    const location = useLocation().pathname
    const display = location.includes("print") || location.includes("login")

    return (
        <div className='footer' style={{ display: display ? "none" : "flex" }}>
            <p> © Copyright 2023</p>
            <p>All rights reserved.Powered By IT Department</p>
        </div>
    )
}

export default Footer