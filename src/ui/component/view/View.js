import { useLocation } from "react-router-dom"
import Navbars from "../Navbars/Navbars"
import VBody from "./Vbody/VBody"
import VehicleItem from './Vbody/VehicleItem';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVehicles as getVehicles } from "../../../reducers/vehicle";
import LoadingIndicator from '../common/LoadingIndicator';

import SortBar from "./Vbody/SortBar";

const View = () => {

  const { search } = useLocation();

  const dispatch = useDispatch();
  const vehicleState = useSelector(selector => selector.vehicles);
  const { http, vehicleList } = vehicleState

  const objParam = Object.fromEntries(new URLSearchParams(search));

  useEffect(() => {
    dispatch(getVehicles(objParam))
  }, [dispatch])

  const showvehicleItems = (items) => {
    if (items.length > 0) {
      return <div>
      <SortBar />
        { vehicleList.map(vehicle => 
              <VehicleItem key={vehicle.id} vehicle={vehicle} bookingDate={objParam} />) }
      </div>;
    };
  };

  return (
    <>
      <VBody>
        { 
        http.loading &&
          <LoadingIndicator />
            }

        { !http.loading && 
            showvehicleItems(vehicleList) };
      </VBody>
    </>

  )
}
export default View;
