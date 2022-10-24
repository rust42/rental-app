import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { fetchVehicleById } from './../reducers/vehicle'
export default function VehicleDetail() {
    const { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        _init()
    }, [id])

    const _init = async () => {
        dispatch(fetchVehicleById(id))
    }

    const vehicleState = useSelector(selector => {
        return selector.vehicles;
    });

    const { http, vehicleDetail } = vehicleState

    console.log(vehicleDetail)
    if (http?.loading) return (<div>Loading....</div>)
    if (!http?.success) return (<div>
        ${JSON.stringify(http?.error)}
    </div>)




    return (
        <div>
            Vehicle Detail component loaded..
        </div>
    )
}
