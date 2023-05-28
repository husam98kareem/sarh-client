import React from 'react'
import "./Home.css"
import { GiCoffeeCup, GiReceiveMoney } from "react-icons/gi"
import { GoLaw } from "react-icons/go"
import { FaUserTie } from "react-icons/fa"
import { Link } from "react-router-dom"
import { AiOutlineAudit } from "react-icons/ai"
import { MdOutlineEngineering } from "react-icons/md"
import { BsCameraReels } from "react-icons/bs"
import { BiPurchaseTag } from "react-icons/bi"
import { RiInformationFill } from "react-icons/ri"
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import { GoFileDirectory } from "react-icons/go"
import { useNavigate } from 'react-router-dom'
import bg from "../assets/127.jpg"
import userImg from "../assets/user.jpg"
import Header from '../components/Header'
function Home() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.name);
    return (
        <div>
            <Header />
            <div className='home__page'>
                <div className='home'>
                    <div className='home__page__box' >
                        <Link style={{
                            // display: user.name === "admin" ? "flex" : "none",
                            textDecoration: "none", color: "aliceblue", height: "40px"
                        }} to="/">
                            <div className="dept" >
                                <h3><GoFileDirectory style={{ fontSize: "30px", marginRight: "10px", height: "40px" }} /></h3>
                                <p>الادارية</p>
                            </div>
                        </Link>
                        <Link style={{
                            // display: user.name === "admin" ? "flex" : "none",
                            textDecoration: "none", color: "aliceblue", height: "40px"
                        }} to="/human">
                            <div className="dept">
                                <h3><FaUserTie style={{ fontSize: "30px", marginRight: "10px", height: "40px" }} /></h3>
                                <p>المواردالبشرية</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "aliceblue", height: "40px" }} to="/hospitality">
                            <div className="dept">
                                <h3><GiCoffeeCup style={{
                                    fontSize: "30px",
                                    marginRight: "10px"
                                }} /></h3>
                                <p>الضيافة</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "aliceblue", height: "40px" }} to="/">
                            <div className="dept">

                                <h3><RiInformationFill style={{
                                    fontSize: "30px",
                                    marginRight: "10px"
                                }} /></h3>
                                <p>الاستعلامات</p>

                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "aliceblue", height: "40px" }} to="/">
                            <div className="dept">
                                <h3><GiReceiveMoney style={{
                                    fontSize: "30px",
                                    marginRight: "10px"
                                }} /></h3>
                                <p>الحسابات</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "aliceblue", height: "40px" }} to="/">
                            <div className="dept">
                                <h3><AiOutlineAudit style={{
                                    fontSize: "30px",
                                    marginRight: "10px"
                                }} /></h3>
                                <p>التدقيق</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "aliceblue", height: "40px" }} to="/">
                            <div className="dept">
                                <h3><GoLaw style={{
                                    fontSize: "30px",
                                    marginRight: "10px"
                                }} /></h3>
                                <p>القانونية</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "aliceblue", height: "40px" }} to="/">
                            <div className="dept">
                                <h3><BiPurchaseTag style={{
                                    fontSize: "30px",
                                    marginRight: "10px"
                                }} /></h3>
                                <p>المشتريات</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "aliceblue", height: "40px" }} to="/">
                            <div className="dept">
                                <h3><HiOutlineOfficeBuilding style={{
                                    fontSize: "30px",
                                    marginRight: "10px",

                                }} /></h3>
                                <p>المشاريع</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "aliceblue", height: "40px" }} to="/">
                            <div className="dept">
                                <h3><BsCameraReels style={{
                                    fontSize: "30px",
                                    marginRight: "10px"
                                }} /></h3>
                                <p>الاعلام</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "aliceblue", height: "40px" }} to="/">
                            <div className="dept">
                                <h3><MdOutlineEngineering style={{
                                    fontSize: "30px",
                                    marginRight: "10px",
                                }} /></h3>
                                <p>الهندسية</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home