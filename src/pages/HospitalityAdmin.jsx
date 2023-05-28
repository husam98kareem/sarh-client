import React, { useState, useEffect } from 'react'
import "./Hospitality.css"

import { useSelector, useDispatch } from 'react-redux'
import { getOrders, reset } from '../features/orders/orderSlice'
import { Triangle } from 'react-loader-spinner'
function HospitalityAdmin() {
    const dispatch = useDispatch()
    const { orders, isLoading, isError, message } = useSelector(
        (state) => state.orders
    )
    useEffect(() => {
        // dispatch(getOrders())
        // setInterval(() => {
        //     dispatch(getOrders())
        // }, 3000)
        return () => {
            clearInterval(dispatch);
            dispatch(reset())
        }
    }, [dispatch])
    return (
        <div className='hospitality'>

            <div >
                {orders.slice(0).reverse().map((order) => (
                    <div key={order.orderID} className="card">
                        <div className='info__'>
                            <h5>{order.tittle}</h5>
                            <h5>عدد  {order.number}</h5>
                        </div>
                        <h4>{order.place}</h4>
                        <h4>{order.name}</h4>
                    </div>
                ))}
            </div>
            {/* } */}
        </div>
    )
}
export default HospitalityAdmin