import "./Details.css"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bookVehicle } from "../../../reducers/booking";
import { getFirstImage } from "../view/Vbody/car_images";


const Details = () => {
  const location = useLocation();
  const { vehicle, bookingDate } = location.state;
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginDetail = useSelector(selector => selector?.login?.login)

  const bookNow = () => {
    if (!loginDetail?.user) {
      navigate({
        pathname: "/login",
        search: `?redirect=/view`,
      })
    } else {
      const obj = {
        ...bookingDate,
        vehicleId: vehicle?.id
      }
      dispatch(bookVehicle(obj)).then(({ payload }) => {
        console.log("res", payload)
        navigate(`/booking/details/${payload?.bookingId}`)
      })
    }
  }

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

    </div>
  )
}

export default Details
