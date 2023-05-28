import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./Hospitality.css"
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, getOrders, reset } from '../features/orders/orderSlice'
import { Triangle } from 'react-loader-spinner'
import HospitalityAdmin from './HospitalityAdmin'


function Hospitality() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrders())

    return () => {
      dispatch(reset())
    }
  }, [dispatch])
  const { orders, isLoading, isError, message } = useSelector(
    (state) => state.orders
  )

  const [sendReq, setSendReq] = useState(false)
  const [selectedOption, setSelectedOption] = useState('');
  const [number, setNumber] = useState("")
  const [place, setPlace] = useState("")

  const tittle = selectedOption

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);

  }
  const user = JSON.parse(localStorage.getItem('user'));

  const user_id = user.id


  const handleSubmit = () => {
    dispatch(createOrder({ tittle, number, place, user_id }))
    setSendReq(true)
  }

  return (
    <div className="hospitality" dir="rtl">
      <div className="hospitality__form">
        {/* <label> what drink? */}
          <select className="select" id="select" value={selectedOption} onChange={handleSelectChange}>
            <option value="tea">tea</option>
            <option value="coffee">coffee</option>
          <option value="water">water</option>
          </select>
          <p>You selected: {selectedOption}</p>
        {/* </label> */}
        <input placeholder="العدد" onChange={(e) => setNumber(e.target.value)} type="number" />
        <input placeholder="المكان" onChange={(e) => setPlace(e.target.value)} type="text" />

        <button onClick={handleSubmit} >اطلب</button>
      </div>
      {/* <HospitalityAdmin sendReq={sendReq} setSendReq={setSendReq} orders={orders} /> */}
    </div>
  )
}

export default Hospitality