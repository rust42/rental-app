import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import Stripe from "react-stripe-checkout";
import { getBookingDetailById } from '../../../reducers/booking';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { payBookingAmount } from '../../../services/booking';
import "./Booking.css";

export default function BookingDetail() {

    const [currency] = useState("USD")
    const [loading, setLoading] = useState(true)

    // can be one of idle, pending, success, error, 
    const [, setPaymentStatus] = useState('idle');
    const [, setPaymentError] = useState('');
    const [bookingDetail, setBookingDetail] = useState({});

    const navigate = useNavigate();


    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        localStorage.removeItem("bookingDetail")

        dispatch(getBookingDetailById(id)).then(res => {
            localStorage.setItem("bookingDetail", JSON.stringify(res.payload))
            setBookingDetail(res.payload);
            setLoading(false)
        })
    }, [id, dispatch])


    const [description] = useState(`Confirm Booking`)


    async function handleToken(token) {
        const bookingDetail = JSON.parse(localStorage.getItem("bookingDetail"));
        const data = {
            token: token?.id,
            amount: bookingDetail?.totalPrice,
            currency: currency,
            description: description,
            tokenType: token?.tokenType,
            bookingId: bookingDetail?.bookingId,
            email: token?.email
        }

        try {
            const payload = await payBookingAmount(data);
            setPaymentStatus('success');
            console.log(payload);
            toast.success("Successfully paid");
            localStorage.removeItem("bookingDetail");
            navigate('/confirmation', { state: { bookingDetail, data } });
        } catch (error) {
            toast.error("Could not complete the payment");
            setPaymentError(error);
            setPaymentStatus('error');
        }
    }


    if (loading) return (<div>laoding..</div>)
    console.log("Booking detail ", bookingDetail);
    return (
        <div className='bookingdetail'>
            <div className='vdetails'>
                <h1> Booking Details </h1> <br />
                <div className="lists">
                    <li> Booking Id: {bookingDetail.bookingId} </li>
                    <li> Vehicle Id: {bookingDetail.vehicleId} </li>
                    <li> User Id: {bookingDetail.userId} </li> <br /> <br />
                    <li> Created Date: {bookingDetail.createdDate} </li>
                    <li> Pickup Date: {bookingDetail.pickupDate} </li>
                    <li> Return: {bookingDetail.returnDate} </li>
                </div>
            </div>

            <div className='bookingbutton'>
                <div className='bstatus'>
                    <div className='price'> $ {bookingDetail.totalPrice}</div> <br /> <br />
                    <div className='status'>Status: {bookingDetail.bookingStatus} </div> <br /> <br />
                </div>
                <Stripe
                    stripeKey="pk_test_wybyhxgwoATvHET7aaeEUVQT00slpNIgke"
                    token={handleToken}
                    currency={currency}
                    amount={JSON.parse(localStorage.getItem("bookingDetail"))?.totalPrice * 100}
                    email={``}
                    zipCode={true}
                    description={description}
                />
            </div>

        </div>
    )
}
