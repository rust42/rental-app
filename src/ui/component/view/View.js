import Navbars from "../Navbars/Navbars";
import VBody from "./Vbody/VBody";
import VehicleItem from "./Vbody/VehicleItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVehicles as getVehicles } from "../../../reducers/vehicle";
import { Box, CircularProgress } from "@mui/material";

import SortBar from "./Vbody/SortBar";

const View = () => {
  const dispatch = useDispatch();
  const vehicleState = useSelector((selector) => selector.vehicles);
  const { http, vehicleList } = vehicleState;

  useEffect(() => {
    fetchVehicles();
  });

  const fetchVehicles = async () => {
    dispatch(getVehicles());
  };

  return (
    <>
      <Navbars />
      <VBody>
        {http.loading && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        )}
        <SortBar />

        {vehicleList.map((vehicle) => (
          <VehicleItem key={vehicle.id} vehicle={vehicle} />
        ))}
      </VBody>
    </>
  );
};

export default View;
