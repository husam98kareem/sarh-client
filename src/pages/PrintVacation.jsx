import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';
import "./PrintVacation.css"


function PrintVacation() {
    const location = useLocation().pathname.split("/")[3];
    const [vacation, setVacation] = useState({})
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert('Print successful!')
    })

    const getVacation = async () => {
        const res = await axios.get(`http://localhost:4000/api/human/${location}`)
        setVacation(res.data[0])
    }


    useEffect(() => {
        getVacation()
    }, [])
    return (

        <div className='print_vacation' dir="rtl" >
            <button onClick={handlePrint}>طباعه</button>
            <div ref={componentRef} className='print_vacation_paper' dir="rtl"   >
                <h6 style={{ fontFamily: "none", fontSize: "24px" }}>السيد المدير المفوض المحترم.</h6>
                <p style={{ fontFamily: "none", fontSize: "20px", display: "flex", justifyContent: "center" }}>م/طلب اجازة </p>
                <p style={{ fontFamily: "none", fontSize: "20px" }}>تحية طيبة...</p>
                <div className='print_vacation_paper_detail' >
                    <p style={{ fontFamily: "none", fontSize: "20px" }}>إني الموظف </p>
                    <p style={{ fontFamily: "none", fontSize: "20px", marginRight: "10px", marginLeft: "10px", borderBottom: "1px dashed #a4a1a1" }}>{vacation?.name} </p>
                    <p style={{ fontFamily: "none", fontSize: "20px" }}>ضمن قسم</p>
                    <p style={{ fontFamily: "none", fontSize: "20px", marginRight: "10px", marginLeft: "10px", borderBottom: "1px dashed #a4a1a1" }}>{vacation?.dept}</p>
                    <p style={{ fontFamily: "none", fontSize: "20px" }}>ارجو التفضل بمنحي إجازة </p>
                    <p style={{ fontFamily: "none", fontSize: "20px", marginRight: "10px", marginLeft: "10px", borderBottom: "1px dashed #a4a1a1", }}>{vacation?.type}</p>
                    <p style={{ fontFamily: "none", fontSize: "20px" }}>لمدة </p>
                    <p style={{ fontFamily: "none", fontSize: "20px", marginRight: "10px", marginLeft: "10px", borderBottom: "1px dashed #a4a1a1", }}>{vacation?.duration}</p>
                    <p style={{ fontFamily: "none", fontSize: "20px" }}>من تاريخ</p>
                    <p style={{ fontFamily: "none", fontSize: "20px", marginRight: "10px", marginLeft: "10px", }}>{new Date(vacation?.fromDate).getFullYear()}/{new Date(vacation.fromDate).getMonth() + 1}/{new Date(vacation.fromDate).getDate()}</p>
                    <p style={{ fontFamily: "none", fontSize: "20px" }}>الى تاريخ</p>
                    <p style={{ fontFamily: "none", fontSize: "20px", marginRight: "10px", marginLeft: "10px", }}>{new Date(vacation?.toDate).getFullYear()}/{new Date(vacation.toDate).getMonth() + 1}/{new Date(vacation.toDate).getDate()}</p>
                    <p style={{ fontFamily: "none", fontSize: "20px" }}>للتفضل بالاطلاع وامركم.</p>
                    <p style={{ fontFamily: "none", fontSize: "20px", marginRight: "35%" }}>   مع جزيل الشكر والتقدير...</p>
                </div>
                <div className='print_vacation_paper_detail' >
                    {/* <p style={{ fontFamily: "none", fontSize: "20px" }}>السبب:</p>
                    <p style={{ fontFamily: "none", fontSize: "20px", borderBottom: "1px dashed #a4a1a1", borderBottom: "1px dashed #a4a1a1", }}>{vacation?.reason}</p> */}
                </div>
                <div className='print_vacation_approve'>
                    <div className='print_vacation_employee'>
                        <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>التوقيع: <img style={{ height: "50px" }} src={vacation?.employeeSignUrl} alt="" /></p>
                        <div style={{ display: "flex" }}>
                            <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>مقدم الطلب:</p>
                            <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>{vacation?.name}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>التوصيف الوظيفي:</p>
                            <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>{vacation?.jobDesc}</p>
                        </div>
                    </div>
                    <div className='print_vacation_section'>
                        <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>التوقيع:<img style={{ height: "50px" }} src={vacation?.sectionManagerSignUrl} alt="" /></p>
                        <div style={{ display: "flex" }}>
                            <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>رئيس القسم:</p>
                            <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>{vacation?.sectionManagerName}</p>
                        </div>
                    </div>
                    <div className='print_vacation_hr'>
                        <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>التوقيع:<img style={{ height: "50px" }} src={vacation?.hrSignUrl} alt="" /></p>
                        <div style={{ display: "flex" }}>
                            <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>الاداري:</p>
                            <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>الاء هاني عبد</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>التوصيف الوضيفي: </p>
                            <p style={{ fontFamily: "none", fontSize: "15px", fontWeight: "bold" }}>قسم الموارد البشرية</p>
                        </div>
                    </div>
                </div>
                <div className='manager_margin'>
                    <p style={{ fontFamily: "none", fontSize: "16px", fontWeight: "bold", }}>هامش المدير المفوض</p>
                    <span style={{ fontFamily: "none", fontSize: "16px", fontWeight: "500", marginRight: "20px" }}>{vacation?.managerMargin}<img src={vacation?.managerSign} alt="" style={{ width: "50px", height: "50px" }} /></span>
                </div>
            </div>
        </div>

    )
}

export default PrintVacation