import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getVacations, reset } from '../features/human/humanSlice'
import "./Hospitality.css"
import { Link } from "react-router-dom"
function HumanResourcesAdmin() {
    const dispatch = useDispatch()
    const { vacations, isLoading, isError, message } = useSelector(
        (state) => state.vacations
    )
    useEffect(() => {
        dispatch(getVacations())
        setInterval(() => {
            dispatch(getVacations())
        }, 3000)
        return () => {
            clearInterval(dispatch);
            dispatch(reset())
        }
    }, [dispatch])

    return (
        <div style={{ background: "#40485A" }} className='home__page' dir="rtl">
            <div>
                {
                    vacations.slice(0).reverse().map((vacation) => (
                        <Link key={vacation.ID} style={{ textDecoration: "none", color: "aliceblue", height: "180px" }} to={`/vacation/${vacation.ID}`}>
                            <div className='vacation'  >
                                <p>اسم الموضف :  {vacation.name}</p>
                                <p>القسم  :  {vacation.dept}</p>
                            </div>
                        </Link>
                    )
                    )}
            </div>
        </div>
    )
}

export default HumanResourcesAdmin