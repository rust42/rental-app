import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom';
import Stripe from "react-stripe-checkout";
import { bookVehicle, payBooking } from '../../../reducers/booking'
import { getBookById } from '../../../services/booking';

export default function BookingDetail() {

    const [currency] = useState("USD")
    const bookingDetail = useSelector(selector => selector.bookings)
    const { state } = useLocation()
    console.log("===dd", state)
    const [description] = useState(`Vehicle booking from ${bookingDetail?.pickupDate} to ${bookingDetail?.returnDate}`)
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(getBookById(id))
    }, [id])

    async function handleToken(token) {
        console.log("==token", token)

        const data = {
            token: token?.id,
            amount: bookingDetail?.totalPrice,
            currency: currency,
            description: description,
            tokenType: token?.tokenType,
            bookingId: bookingDetail?.bookingId,
            email: token?.email

        }
        dispatch(payBooking(data))
        // await axios.post("http://35.226.108.68/api/payments",
        //     {
        //         token: token.id,
        //         amount: amount,
        //         currency: currency,
        //         description: description,
        //         tokenType: token.type,
        //         bookingId: `f5b32296-c038-4c57-be45-71c0fe3f7f7b`,
        //         email: token.email
        //     },
        //     config

        // ).then(() => {
        //     alert("Payment Success");
        // }).catch((error) => {
        //     alert(error);
        // });
    }
    return (
        <div>
            Booking detail

            <Stripe
                stripeKey="pk_test_wybyhxgwoATvHET7aaeEUVQT00slpNIgke"
                token={handleToken}
                currency={currency}
                amount={bookingDetail?.totalPrice}
                email={``}
                zipCode={true}
                description={description}
                bookingDetail={bookingDetail}

            />
        </div>
    )
}
