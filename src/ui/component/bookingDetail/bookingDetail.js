import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom';
import Stripe from "react-stripe-checkout";
import { bookVehicle, payBooking } from '../../../reducers/booking'
import { getBookingDetailById } from '../../../reducers/booking';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BookingDetail() {

    const [currency] = useState("USD")
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        setLoading(true)
        localStorage.removeItem("bookingDetail")

        dispatch(getBookingDetailById(id)).then(res => {
            localStorage.setItem("bookingDetail", JSON.stringify(res.payload))

            setLoading(false)
        })
    }, [id])


    const [description] = useState(`Confirm Booking`)




    async function handleToken(token) {
        console.log("==token", token)

        const data = {
            token: token?.id,
            amount: JSON.parse(localStorage.getItem("bookingDetail"))?.totalPrice,
            currency: currency,
            description: description,
            tokenType: token?.tokenType,
            bookingId: JSON.parse(localStorage.getItem("bookingDetail"))?.bookingId,
            email: token?.email

        }
        dispatch(payBooking(data)).then(({ payload }) => {
            console.log(payload)
            toast.success("Successfully paid")
            localStorage.removeItem("bookingDetail")

        })
    }


    if (loading) return (<div>laoding..</div>)
    return (
        <div>
            Booking detail

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
    )
}
