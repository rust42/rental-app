import React, { useEffect } from 'react'
import { fetchVehicles as getVehicles } from '../reducers/vehicle'
import { useDispatch, useSelector } from "react-redux";
import { Button } from '@mui/material';
import LoadingIndicator from './LoadingIndicator';
import { Backdrop, CircularProgress } from "@mui/material";
import VehicleItem from './VehicleItem';


export default function Vehicle() {
    const dispatch = useDispatch();
    const vehicleState = useSelector(selector => selector.vehicles);
    const { http, vehicleList } = vehicleState

    useEffect(() => {
        fetchVehicles()
    }, [])

    const fetchVehicles = async () => {
        dispatch(getVehicles())
    }

    if (http.loading) {
        return <LoadingIndicator loading={http?.loading}/>;
    }

    return vehicleList.map(vehicle => <VehicleItem key={vehicle.id} vehicle={vehicle}/>);
};
