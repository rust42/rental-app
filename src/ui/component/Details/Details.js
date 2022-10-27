import "./Details.css"
import { useLocation } from "react-router-dom"
import Navbars from "../Navbars/Navbars";
import car from '../cards/car1.webp';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bookVehicle } from "../../../reducers/booking";


// import car from '../cards/minivan.webp'
// import car from '../cards/convertible.jpeg'
// import car from '../cards/sedan.webp'
// import car from '../cards/truck.jpeg'


const Details = () => {
  const location = useLocation();
  const { vehicle,bookingDate } = location.state;
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginDetail = useSelector(selector => selector?.login?.login)

  const bookNow = () => {
        //  search: `?redirect=/vehicles/${data?.id}`,

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
            dispatch(bookVehicle(obj)).then(({payload}) => {
              console.log("res",payload)
              navigate(`/booking/details/${payload?.bookingId}`)
            })
            // console.log("==bookingDetail?.bookingId", bookingDetail?.bookingId)
            // if (bookingDetail?.bookingId) {
            //     navigate("/booking/details/1")
            // }

        }
  }

  const confirmPayment = (data) => {

    navigate(`/notify`,
        { 
            state: {
                vehicle: vehicle
            }
        }
    );
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
                    <img className="carsimage" src={car} alt=""/> 
              </div>

        </div>
      
    </div>
  )
}

export default Details