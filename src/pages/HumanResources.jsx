import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createVacation } from '../features/human/humanSlice'
import { useNavigate } from "react-router-dom"
import SignatureCanvas from 'react-signature-canvas'
import { TbArrowBigDownLinesFilled } from 'react-icons/tb'
import './HumanResources.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'

function HumanResources() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [sign, setSign] = useState()
    const [employeeSignUrl, setEmployeeSignUrl] = useState("")
    const [name, setName] = useState("")
    const [dept, setDept] = useState("")
    const [jobDesc, setJobDesc] = useState("")
    const [duration, setDuration] = useState("")
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [reason, setReason] = useState("")
    const [selectedOption, setSelectedOption] = useState('');
    const type = selectedOption
    const handleClear = () => {
        sign.clear()
    }
    const handleGenerate = () => {
        setEmployeeSignUrl(sign.getTrimmedCanvas().toDataURL("image/png"))
    }
    const handleSubmit = async () => {
        try {
            await axios.post("http://localhost:4000/api/human", {
                name, dept, jobDesc, type, duration, fromDate, toDate, reason, employeeSignUrl,
            })

            setTimeout(() => {
                toast.success(" تم رفع الاجازة ", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/home")
            }, 2000)

        } catch (error) {
            console.log(error);
        }
    }
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className='human_resources' dir="rtl">
            <div className='human_resources_form'>
                <h3>طلب اجازة</h3>
                <label > اسم الموظف:
                    <input onChange={(e) => setName(e.target.value)} type='text' />
                </label>
                <label> القسم:
                    <input onChange={(e) => setDept(e.target.value)} type='text' />
                </label>
                <label> التوصيف الوظيفي :
                    <input onChange={(e) => setJobDesc(e.target.value)} type='text' />
                </label>
                <label> المدة:
                    <input onChange={(e) => setDuration(e.target.value)} type='text' placeholder='المدة' />
                </label>
                <select value={selectedOption} onChange={handleSelectChange} style={{ marginTop: "10px" }}>
                    <option value="">نوع الاجازة</option>
                    <option value="مرضية">مرضية</option>
                    <option value="اعتيادية">اعتيادية</option>
                    <option value="زمنية">زمنية</option>
                </select>
                <div className='date'>
                    <label htmlFor="date">من تاريخ:</label>
                    <input onChange={(e) => setFromDate(e.target.value)} type="date" id="date" name="date" placeholder="من تاريخ" />
                </div>
                <div className='date'>
                    <label htmlFor="date">الى تاريخ:</label>
                    <input onChange={(e) => setToDate(e.target.value)} type="date" id="date" name="date" placeholder='الى تاريخ' />
                </div>
                <label> السبب:
                    <input onChange={(e) => setReason(e.target.value)} type='text' />
                </label>
                <div style={{ width: "60%" }}>
                    <p style={{ color: "#fff", borderTop: "1px dashed #918f84", borderBottom: "1px dashed #918f84", textAlign: "center", height: "50px" }}>وقع هنا
                        <TbArrowBigDownLinesFilled style={{
                            fontSize: "22px",
                            color: "#918f84",
                            marginTop: "10px",
                            marginRight: "10px",
                        }} />
                    </p>
                    <div style={{ width: "100%", overflow: "hidden", border: "1px dashed #fff", background: "#918f84" }}>
                        <SignatureCanvas
                            ref={data => setSign(data)}
                            penColor='blue'
                            canvasProps={{ width: 300, height: 300, background: "#fff", className: 'sigCanvas' }} />
                    </div>
                    <button onClick={handleClear} style={{ width: "100px", height: "30px", background: "#918f84", color: "#fff", border: "none", fontSize: "14px", fontWeight: "bold", margin: "10px", fontFamily: "Noto Kufi Arabic, sans-serif" }}>الغاء</button>
                    <button onClick={handleGenerate} style={{ width: "100px", height: "30px", background: "#918f84", color: "#fff", border: "none", fontSize: "14px", fontWeight: "bold", margin: "10px", fontFamily: "Noto Kufi Arabic, sans-serif" }}>حفظ</button>
                    <img src={employeeSignUrl} alt="" />
                </div>
                <button className='send-btn' onClick={handleSubmit}>ارسال</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default HumanResources
