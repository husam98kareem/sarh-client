import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from "react-router-dom";
import SignatureCanvas from 'react-signature-canvas'

function Vacation() {
    const [vacation, setVacation] = useState({})
    const location = useLocation().pathname.split("/")[2];
    const [sign, setSign] = useState()
    const [sectionManagerName, setSectionManagerName] = useState("")
    const [sectionManagerSignUrl, setSectionManagerSignUrl] = useState("")
    const [managerMargin, setManagerMargin] = useState("")
    const [managerSign, setManagerSign] = useState("")
    const [hrSignUrl, setHrSignUrl] = useState("")
    const navigate = useNavigate()
    const handleClear = () => {
        sign.clear()
    }
    const handleClear2 = () => {
        sign.clear()
    }
    const handleGenerate = () => {
        setSectionManagerSignUrl(sign.getTrimmedCanvas().toDataURL("image/png"))
    }
    console.log(sectionManagerSignUrl);
    const handleGenerateManager = () => {
        setManagerSign(sign.getTrimmedCanvas().toDataURL("image/png"))
    }
    const handleGenerateHr = () => {
        setHrSignUrl(sign.getTrimmedCanvas().toDataURL("image/png"))
    }
    console.log(managerSign);
    console.log(hrSignUrl);
    const getVacation = async () => {
        const res = await axios.get(`http://localhost:4000/api/human/${location}`)
        setVacation(res.data[0])
    }
    const updateVacationBySectionManager = async () => {
        const res = await axios.put(`http://localhost:4000/api/human/${location}`, { sectionManagerName, sectionManagerSignUrl })
        alert("تم")
        navigate("/home")
        return (res.data[0])
    }
    const updateVacationByManager = async () => {
        const res = await axios.put(`http://localhost:4000/api/human/manager/${location}`, { managerMargin, managerSign })
        alert("تم")
        navigate("/home")
        return (res.data[0])
    }
    const updateVacationByHr = async () => {
        const res = await axios.put(`http://localhost:4000/api/human/hr/${location}`, { hrSignUrl })
        alert("تم")
        navigate("/home")
        return (res.data[0])
    }
    useEffect(() => {
        getVacation()
    }, [])

    return (
        <div style={{ color: "#fff", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", minHeight: "100vh", marginBottom: "40px" }} dir='rtl'>
            <div>
                <p> الاسم :  {vacation.name}</p>
                <p> القسم :  {vacation.dept}</p>

                <p> نوع الاجازة :  {vacation.type}</p>
                <p>  المدة :  {vacation.duration}</p>
                <p>  من تاريخ  : {new Date(vacation.fromDate).getFullYear()}-{new Date(vacation.fromDate).getMonth() + 1}-{new Date(vacation.fromDate).getDate()}</p>
                <p>  الى تاريخ  :   {new Date(vacation.toDate).getFullYear()}-{new Date(vacation.toDate).getMonth() + 1}-{new Date(vacation.toDate).getDate()}</p>
                <p> السبب  : {vacation.reason}</p>
                <p>توقيع الموظف: <img src={vacation.employeeSignUrl} alt="" style={{ height: "100px", }} /></p>
                {vacation.sectionManagerName && <p>رئيس القسم :{vacation.sectionManagerName} </p>}
                {!vacation.sectionManagerName && <p>رئيس القسم : <input type="text"
                    onChange={(e) => setSectionManagerName(e.target.value)}
                    style={{ height: "30px", outline: "none" }} /></p>}
                {vacation.sectionManagerSignUrl ? <p>توقيع رئيس القسم :<img src={vacation.sectionManagerSignUrl} alt="" /></p> :
                    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                        <div style={{ border: "2px solid #fff", background: "#918f84" }}>
                            <SignatureCanvas
                                ref={data => setSign(data)}
                                penColor='blue'
                                canvasProps={{ width: 250, height: 250, background: "#fff", className: 'sigCanvas' }} />
                        </div>
                        <img src={sectionManagerSignUrl} alt="" style={{ width: "150px", height: "150px" }} />
                        <div style={{ display: "flex" }}>
                            <button onClick={handleClear} style={{ width: "100px", height: "30px", background: "#918f84", color: "#fff", border: "none", fontSize: "14px", fontWeight: "bold", margin: "10px", fontFamily: "Noto Kufi Arabic, sans-serif" }}>الغاء</button>
                            <button onClick={handleGenerate} style={{ width: "100px", height: "30px", background: "#918f84", color: "#fff", border: "none", fontSize: "14px", fontWeight: "bold", margin: "10px", fontFamily: "Noto Kufi Arabic, sans-serif" }}>حفظ</button>
                        </div>
                        <button style={{ width: "100px", height: "30px", background: "#918f84", color: "#fff", border: "none", fontSize: "14px", fontWeight: "bold", margin: "10px", fontFamily: "Noto Kufi Arabic, sans-serif" }} onClick={updateVacationBySectionManager}>قبول</button>
                    </div>
                }
                {vacation.managerMargin && <p> هامش المدير المفوض :{vacation.managerMargin} </p>}
                {vacation.sectionManagerSignUrl && !vacation.managerMargin && <p> هامش المدير المفوض : <input type="text"
                    onChange={(e) => setManagerMargin(e.target.value)}
                    style={{ height: "30px", outline: "none" }} /></p>}
                {
                    // add manager approvement
                    vacation.sectionManagerSignUrl
                    &&
                    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                        {
                            vacation.managerSign ?
                                <>
                                    <img src={vacation.managerSign} alt="" style={{ width: "150px", height: "150px" }} />
                                </>
                                :
                                <>
                                    <div style={{ border: "2px solid #fff", background: "#918f84" }}>
                                        <SignatureCanvas
                                            ref={data => setSign(data)}
                                            penColor='blue'
                                            canvasProps={{ width: 250, height: 250, background: "#fff", className: 'sigCanvas' }} />
                                    </div>

                                    <img src={managerSign} alt="" style={{ width: "150px", height: "150px" }} />

                                    <div style={{ display: "flex" }}>
                                        <button onClick={handleClear2} style={{ width: "100px", height: "30px", background: "#918f84", color: "#fff", border: "none", fontSize: "14px", fontWeight: "bold", margin: "10px", fontFamily: "Noto Kufi Arabic, sans-serif" }}>الغاء</button>
                                        <button onClick={handleGenerateManager} style={{ width: "100px", height: "30px", background: "#918f84", color: "#fff", border: "none", fontSize: "14px", fontWeight: "bold", margin: "10px", fontFamily: "Noto Kufi Arabic, sans-serif" }}>حفظ</button>
                                    </div> <Link to={`/vacation/print/${vacation.ID}`}><p> طباعة</p></Link>
                                </>
                        }
                        {
                            !vacation.managerMargin && !vacation.managerSign && <button style={{ width: "100px", height: "30px", background: "#918f84", color: "#fff", border: "none", fontSize: "14px", fontWeight: "bold", margin: "10px", fontFamily: "Noto Kufi Arabic, sans-serif" }} onClick={updateVacationByManager}>قبول</button>
                        }
                        {
                            vacation.managerMargin && vacation.managerSign
                            &&
                            <> {
                                vacation.hrSignUrl ? <p> توقيع الاداري : <img src={vacation.hrSignUrl} alt="" /></p>
                                    : <>
                                        <p>توقيع الاداري</p>
                                        <div style={{ border: "2px solid #fff", background: "#918f84" }}>
                                            <SignatureCanvas
                                                ref={data => setSign(data)}
                                                penColor='blue'
                                                canvasProps={{ width: 250, height: 250, background: "#fff", className: 'sigCanvas' }} />
                                        </div>

                                        <img src={hrSignUrl} alt="" style={{ width: "100px", height: "100px" }} />
                                        <div style={{ display: "flex" }}>
                                            <button onClick={handleClear2} style={{ width: "100px", height: "30px", background: "#918f84", color: "#fff", border: "none", fontSize: "14px", fontWeight: "bold", margin: "10px", fontFamily: "Noto Kufi Arabic, sans-serif" }}>الغاء</button>
                                            <button onClick={handleGenerateHr} style={{ width: "100px", height: "30px", background: "#918f84", color: "#fff", border: "none", fontSize: "14px", fontWeight: "bold", margin: "10px", fontFamily: "Noto Kufi Arabic, sans-serif" }}>حفظ</button>
                                        </div>
                                        <button style={{ width: "100px", height: "30px", background: "#918f84", color: "#fff", border: "none", fontSize: "14px", fontWeight: "bold", margin: "10px", fontFamily: "Noto Kufi Arabic, sans-serif" }} onClick={updateVacationByHr}>قبول</button>
                                    </>
                            }
                            </>
                        }

                    </div>
                }
                {vacation.hrSignUrl && <Link style={{ textDecoration: "none", color: "aliceblue", height: "180px" }} to={`/vacation/print/${vacation.ID}`}><p> طباعة</p></Link>}
            </div>
        </div>
    )
}
export default Vacation