import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { Triangle } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify'
function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const register = async () => {
        try {
            setLoading(true)
            const response = await axios.post("http://localhost:4000/api/auth/register", { name, username, password })
            console.log(response);
            toast.success("تم انشاء حساب", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setLoading(false)
        } catch (error) {
            toast.error("حدث خطأ أثناء الحساب");
            setLoading(false)
        }

    }

    return (
        <div className="login" dir="rtl">
            <h3>انشاء حساب</h3>
            <input type="text" placeholder='الاسم' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="اسم المستخدم" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} />
            {loading ? <Triangle
                height="60"
                width="60"
                color="#fff"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            /> : <button onClick={register}>انشاء حساب</button>}
            <ToastContainer />
        </div>
    )
}

export default Register