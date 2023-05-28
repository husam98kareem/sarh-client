import React from 'react'
import { useLocation } from "react-router-dom"
import "./Header.css"
import HeaderBg from ".././assets/headerbg.jpg"
import { useNavigate } from 'react-router-dom'
import logo from ".././assets/logo1.png"
import { BiLogOut } from 'react-icons/bi'
function Header() {

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.name);
    const location = useLocation().pathname
    const display = location.includes("print")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('user')
        navigate("/login")
    }

    return (
        <div className='header'
            style={{ display: display ? "none" : "flex" }}>
            <div className='header__logo'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
                <div className='logout' onClick={logout} >
                    <p><BiLogOut style={{ fontSize: "20px", marginTop: "9px", height: "30px" }} /></p>
                    <p>Logout</p>
                </div>
            </div>

            <div className='welcome'>
                <p>Welcome : {user.name}</p>
                <p>What You Feel With Paperless ?</p>
            </div>
        </div>
    )
}

export default Header