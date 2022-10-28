import "./Details.css"
import { useLocation, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bookVehicle } from "../../../reducers/booking";
import { getFirstImage } from "../view/Vbody/car_images";
import Review from "./Review";
import { useEffect } from "react";
import { fetchVehicleById } from './../../../reducers/vehicle'

const Details = () => {
  const location = useLocation();
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { search } = useLocation()
  const objParam = Object.fromEntries(new URLSearchParams(search));
  const vehicle = useSelector(selector => selector?.vehicles?.vehicleDetail)
  const loginDetail = useSelector(selector => selector?.login?.login)
  console.log("===", objParam)
  useEffect(() => {
    dispatch(fetchVehicleById(id))
  }, [id])

  const bookNow = () => {
    if (!loginDetail?.user) {
      navigate({
        pathname: "/login",
        search: `?redirect=/details/${vehicle.id}?pickupDate=${objParam?.pickupDate}&returnDate=${objParam?.returnDate}`
      })
    } else {
      const obj = {
        ...objParam,
        vehicleId: id
      }
      dispatch(bookVehicle(obj)).then(({ payload }) => {
        console.log("res", payload)
        navigate(`/booking/details/${payload?.bookingId}`)
      })
    }
  }




  if (vehicle == null) return (<div>loading...</div>)
  return (
    <div className="maindetails">

      <div className="vehicleinfo">
        <div className="vehicledetails">
          <div className="vechicleinfo">
            <h1 className="vehiclename"> {vehicle.brand}</h1>

            <div className="lists">
              <li> Vin: {vehicle.vin} </li>
              <li> Model: {vehicle.model} </li>
              <li> Color: {vehicle.color} </li>
              <li> Purchase Date: {vehicle.purchaseDate} </li>
              <div className="descque"> What to expect:
                <div className="desans"> {vehicle.description}  </div>
              </div>
            </div>
          </div>

          <div className="pay">
            <div className="price"> ${vehicle.pricePerDay} </div>
            <button className="purchase" onClick={() => bookNow(vehicle)}> PURCHASE </button>
          </div>
        </div>

        <div className="vehicleimages">
          {vehicle.imageList}
          <img className="carsimage" src={getFirstImage(vehicle)} alt="" />
        </div>

      </div>
      <Review vehicleId={vehicle.id} />
    </div>
  )
}

export default Details
