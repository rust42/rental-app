import React, { useEffect } from 'react'
import { fetchVehicles } from '../reducers/vehicle'
import { useDispatch, useSelector } from "react-redux";
import { Button } from '@mui/material';

export default function Vehicle() {

    // const [loading, setLoading] = useState();

    const dispatch = useDispatch();
    const vehicleState = useSelector(selector => selector.vehicles);
    const { http, vehicleList } = vehicleState

    console.log(vehicleState)
    useEffect(() => {
        _init()
    }, [])

    const _init = async () => {
        dispatch(fetchVehicles())
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
