
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookVehicle } from '././../../../../reducers/booking'
const VehicleItem = ({ vehicle, bookingDate }) => {

    const loginDetail = useSelector(selector => selector?.login?.login)
    const bookingDetail = useSelector(selector => selector?.bookings?.bookingDetail)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const confirmBooking = (data) => {
        // search: `?redirect=/vehicles/${data?.id}`,

        // if (!loginDetail?.user) {
        //     navigate({
        //         pathname: "/login",
        //         search: `?redirect=/view`,
        //     })
        // } else {
        //     const obj = {
        //         ...bookingDate,
        //         vehicleId: data?.id
        //     }
        //     dispatch(bookVehicle(obj))
        //     console.log("==bookingDetail?.bookingId", bookingDetail?.bookingId)
        //     if (bookingDetail?.bookingId) {
        //         navigate("/booking/details/1")
        //     }

        // }

        navigate(`/details/${vehicle.id}`,
            { 
                state: {
                    vehicle: vehicle
                }
            }
        );
    }


    return <div className="viewcard">
        <div className="cardimg">
            <img src="/image/car1.webp" alt="next" />
        </div>

        <div className="details">

            <div className="vechicledetails">
                <h2> {vehicle.brand} </h2>
                <ul className="lists">
                    <li> Name: {vehicle.description} </li>
                    <li> Model: {vehicle.model} </li>
                    <li> Color: {vehicle.color} </li>
                    <li> Vin: {vehicle.vin}  </li>
                    <li> Purchase: {vehicle.purchaseDate}  </li>
                </ul>
            </div>

            <div className="actions">
                <a href="/"> Online check in </a> <br />
                <a href="/"> Payment procedure </a> <br />
                <a href="/"> Free cancellation </a>
            </div>

            <div className="impdetails">
                <div className="price"> ${vehicle.pricePerDay} </div>
                <div> per day </div>

                {/* <button className="buttons" onClick={() => confirmBooking(vehicle)}> RESERVE</button> */}
                <button className="buttons" onClick={() => confirmBooking(vehicle)}> RESERVE</button>

            </div >
        </div >
    </div >
};

export default VehicleItem;