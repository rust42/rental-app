import { useLocation, useSearchParams } from "react-router-dom"
import Navbars from "../Navbars/Navbars"
import VBody from "./Vbody/VBody"
import VehicleItem from './Vbody/VehicleItem';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVehicles as getVehicles } from '../../../reducers/vehicle'
import { Box, CircularProgress } from "@mui/material";

import SortBar from "./Vbody/SortBar";


const View = () => {
  const { search, query } = useLocation();

  const dispatch = useDispatch();
  const vehicleState = useSelector(selector => selector.vehicles);
  const { http, vehicleList } = vehicleState
  const { pickupDate, returnDate } = Object.fromEntries(new URLSearchParams(search));
  const objParam = {
    returnDate,
    pickupDate
  }

  console.log("==objParam", objParam)
  useEffect(() => {
    fetchVehicles()
  }, [])

  const fetchVehicles = async () => {
    dispatch(getVehicles(objParam))
  }
  return (
    <>
      <Navbars />
      <VBody>
        {http.loading &&
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          </div>}
        <SortBar />

        {vehicleList.map(vehicle => <VehicleItem key={vehicle.id} vehicle={vehicle} bookingDate={objParam} />)}
      </VBody>
    </>

  )
}

export default View
