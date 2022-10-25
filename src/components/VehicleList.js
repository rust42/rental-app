import React, { useEffect } from 'react'
import { fetchVehicles as getVehicles } from '../reducers/vehicle'
import { useDispatch, useSelector } from "react-redux";
import { Button } from '@mui/material';

export default function Vehicle() {
    const dispatch = useDispatch();
    const vehicleState = useSelector(selector => selector.vehicles);
    const { http } = vehicleState

    useEffect(() => {
        fetchVehicles()
    }, [])

    const fetchVehicles = async () => {
        dispatch(getVehicles())
    }


    if (http?.loading) return (<div>Loading....</div>)
    if (!http?.success) return (<div>
        ${JSON.stringify(http?.error)}
    </div>)

    return (


        < div >
            <Button onClick={() => dispatch(fetchVehicles())}>Click me!</Button>
        </div >
    )
}
