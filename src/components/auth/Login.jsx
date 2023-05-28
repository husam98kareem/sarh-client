import React, { useState } from 'react'
import axios from "axios"
import "./style.css"
import 'react-toastify/dist/ReactToastify.css';
import { Triangle } from 'react-loader-spinner'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const login = async () => {
        try {
            setLoading(true)
            const response = await axios.post("http://192.168.88.149:4000/api/auth/login", { username, password })
            toast.success("تم تسجيل الدخول ", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            localStorage.setItem("user", JSON.stringify(response.data));
            const user = JSON.parse(localStorage.getItem('user'));
            console.log(user);
            setLoading(false)
            setTimeout(() => {
                navigate("/")
            }, 2000)

        } catch (error) {
            toast.error("حدث خطأ أثناء تسجيل الدخول");
            setLoading(false)
        }
    }
    return (
        <div className="login" dir="rtl">
            <p>Welcome To <br />Company Management Software</p>
            <p>تسجيل الدخول</p>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="اسم المستخدم" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='كلمة المرور' />
            {loading ? <Triangle
                height="60"
                width="60"
                color="#fff"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            /> : <button onClick={login}>تسجيل الدخول</button>}
            <ToastContainer />
        </div>
    )
}

export default Login