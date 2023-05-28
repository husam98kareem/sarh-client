import React, { useState } from 'react'
import "./Register.css"
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'

function Register() {
    const [file, setFile] = useState(null);
    const [img, setImg] = useState("");
    const [surname, setSurname] = useState("Mr");
    const [gender, setGender] = useState("Male")
    const [bloodGroup, setBloodGroup] = useState("+O")
    const [company, setCompany] = useState("Sarh Al-Warith Company")
    const [country, setCountry] = useState("Iraq")
    const [city, setCity] = useState("Karbala")
    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    };
    const handleSubmitFile = async (event) => {
        event.preventDefault();;
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await axios.post('http://localhost:4000/upload', formData)
            console.log(response.data);
            setImg(response.data)
            toast.success(" تم  رفع الصورة ", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            console.log(error);
        }
    }
    const [values, setValues] = useState({
        employeeId: "",
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        dateOfStart: "",
        zipCode: "",
        streetAddress: "",
        mobile: "",
        email: "",
    });
    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/auth/register',
                { ...values, surname, img, gender, bloodGroup, company, country, city }
            )
            console.log(response.data);
            toast.success(" تم التسجيل بنجاح ", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (err) {
            toast.error("  يرجى ملىء جميع الحقول! ", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log(err);
        }
    }
    return (
        <div className='register'>
            <div className='personal_form'>
                <p>Personal Information</p>
                <form onSubmit={handelSubmit}>
                    <label>
                        <p>Employee ID :</p>
                        <input
                            name='employeeId'
                            value={values.employeeId}
                            onChange={handleChangeInput}
                            type="number" />
                    </label>
                    <label>
                        <p>First Name :</p>
                        <select value={surname} onChange={(event) => setSurname(event.target.value)}>
                            <option value="Mr">Mr</option>
                            <option value="Miss">Miss</option>
                        </select>
                        <input
                            name='firstName'
                            value={values.firstName}
                            onChange={handleChangeInput}
                            type="text"
                            required
                        />

                    </label>
                    <label>
                        <p>Middle Name :</p>
                        <input
                            name="middleName"
                            value={values.middleName}
                            onChange={handleChangeInput}
                            required type="" />
                    </label>
                    <label>
                        <p>Last Name :</p>
                        <input
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChangeInput}
                            required type="text" />
                    </label>
                    <label>
                        <p>Date Of Birth :</p>
                        <input
                            name="dateOfBirth"
                            value={values.dateOfBirth}
                            onChange={handleChangeInput}
                            type="date" />
                    </label>
                    <label>
                        <p>Gender :</p>
                        <select onChange={(event) => setGender(event.target.value)}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                    <label>
                        <p>Blood Group :</p>
                        <select value={bloodGroup} onChange={(event) => setBloodGroup(event.target.value)}>
                            <option value="+A">+A</option>
                            <option value="+B">+B</option>
                            <option value="-A">-A</option>
                            <option value="-B">-B</option>
                            <option value="+O">+O</option>
                            <option value="-O">-O</option>
                            <option value="+AB">+AB</option>
                            <option value="-AB">-AB</option>
                        </select>
                    </label>
                    <label>
                        <p>Corporate Company:</p>
                        <select value={company} onChange={(event) => setCompany(event.target.value)}>
                            <option value="Sarh AL-Warith Company" >Sarh AL-Warith Company</option>
                            <option value="AL-Munjiz Company">AL-Munjiz Company</option>
                        </select>
                    </label>
                    <label>
                        <p>Date Of Start :</p>
                        <input
                            name="dateOfStart"
                            type="date"
                            value={values.dateOfStart}
                            onChange={handleChangeInput} />
                    </label>
                    <label>
                        <p>Upload Image:</p>
                        <input
                            type="file"
                            onChange={handleFileChange} />
                    </label>
                    {/* <p style={{ width: "100%", background: "#000", textAlign: "center" }}>Contact Information</p> */}
                    <label>
                        <p>Street Address:</p>
                        <textarea
                            name='streetAddress'
                            value={values.streetAddress}
                            onChange={handleChangeInput}
                            type="text" />
                    </label>
                    <label>
                        <p>ZIP Code :</p>
                        <input
                            name='zipCode'
                            value={values.zipCode}
                            type="number"
                            onChange={handleChangeInput} />
                    </label>
                    <label>
                        <p>Country :</p>
                        <select value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="Iraq">Iraq</option>
                        </select>
                    </label>
                    <label>
                        <p>City :</p>
                        <select value={city} onChange={(e) => setCity(e.target.value)}>
                            <option value="Karbala">Karbala</option>
                        </select>
                    </label>
                    <label>
                        <p>Mobile :</p>
                        <input
                            name='mobile'
                            value={values.mobile}
                            type="number"
                            onChange={handleChangeInput} />
                    </label>
                    <label>
                        <p>Email :</p>
                        <input
                            name='email'
                            value={values.email}
                            type="email"
                            onChange={handleChangeInput} />
                    </label>
                    <button type="submit" style={{ marginTop: "40px", color: "#fff", background: "#40485A", border: "none", width: "30%", height: "30px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px", }}>submit</button>
                </form>
                <div style={{
                    display: "flex", flexDirection: "column", border: file ? "none" : "1px dashed #fff",
                    height: "150px", width: "150px", background: file ? "none" : "#A4D0A4",
                    // position: "absolute", top: "20%", right: "20px"
                }}>
                    {file && <img src={URL.createObjectURL(file)} style={{ height: "100px", width: "100px", }} alt="uploaded" />}
                    {file && <button onClick={handleSubmitFile} style={{ height: "40px", width: "100px", background: "#40485A", color: "#fff", marginTop: "10px", borderRadius: "5px" }}>Upload</button>}
                </div>
            </div>
            {/* <div className='contact_form'>
                <p>Contact Information</p> */}
            {/* <form>
                    <label>Street Address:
                        <input type="" />
                    </label>

                    <label>ZIP Code :
                        <input type="number" />
                    </label>
                    <label>Country
                        <select>
                            <option>Sarh AL-Warith Company</option>
                            <option>AL-Munjiz Company</option>
                        </select>
                    </label>
                    <label>State :
                        <select>
                            <option>Sarh AL-Warith Company</option>
                            <option>AL-Munjiz Company</option>
                        </select>
                    </label>
                    <label>City :
                        <select>
                            <option>Sarh AL-Warith Company</option>
                            <option>AL-Munjiz Company</option>
                        </select>
                    </label>
                    <label>Village :
                        <select>
                            <option>Sarh AL-Warith Company</option>
                            <option>AL-Munjiz Company</option>
                        </select>
                    </label>
                    <label>Mobile
                        <input type="number" />
                    </label>
                    <label>
                        <input type="email" />
                    </label>
                </form> */}
            {/* </div> */}
            <ToastContainer />
        </div>
    )
}

export default Register