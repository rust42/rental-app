import { Link, useLocation } from "react-router-dom";

const BookingConfirmation = () => {
    const { state } = useLocation();
    const { bookingDetail, data } = state;
    console.log(bookingDetail, data);

    return (
        <div className="conformationbody" >

            <div className="confirmationtext">
                <h2> CONFIRMED! </h2> <br /> We received a payment of  <h2> {data.currency} {data.amount} </h2> <br />
                We will shortly send you the details on email given at the time of reservations.
                <h3> Have a wonderful ride ! </h3> <br />
                <h2><Link to="/">Reserve more</Link> </h2>
            </div>
            <div className="conformationdetails">
                <div className="lists">
                    <li> Booking Id: {bookingDetail.bookingId} </li>
                    <li> Vehicle Id: {bookingDetail.vehicleId} </li>
                    <li> User Id: {bookingDetail.userId} </li>
                    <li> Email: {data.email} </li>
                    <li> Description: {data.description}</li> <br /> <br />
                    <li> Created Date: {bookingDetail.createdDate} </li>
                    <li> Pickup Date: {bookingDetail.pickupDate} </li>
                    <li> Return: {bookingDetail.returnDate} </li>
                </div>

                <div className="conformationpaymentdetails">
                    <h3>{data.currency} </h3>
                    <div className='price'> $ {bookingDetail.totalPrice}</div> <br /> <br />
                    <div className='status'> {bookingDetail.bookingStatus} </div> <br /> <br />
                </div>
            </div>


        </div>
    )
}

export default BookingConfirmation;