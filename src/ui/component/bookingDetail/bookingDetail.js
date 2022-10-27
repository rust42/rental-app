import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import Stripe from "react-stripe-checkout";
import { getBookingDetailById } from '../../../reducers/booking';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { payBookingAmount } from '../../../services/booking';

export default function BookingDetail() {

    const [currency] = useState("USD")
    const [loading, setLoading] = useState(false)

    // can be one of idle, pending, success, error, 
    const [paymentStatus, setPaymentStatus] = useState('idle');
    const [paymentError, setPaymentError] = useState('');

    const navigate = useNavigate();


    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        setLoading(true)
        localStorage.removeItem("bookingDetail")

        dispatch(getBookingDetailById(id)).then(res => {
            localStorage.setItem("bookingDetail", JSON.stringify(res.payload))

            setLoading(false)
        })
    }, [id, dispatch])


    const [description] = useState(`Confirm Booking`)


    async function handleToken(token) {
        const data = {
            token: token?.id,
            amount: JSON.parse(localStorage.getItem("bookingDetail"))?.totalPrice,
            currency: currency,
            description: description,
            tokenType: token?.tokenType,
            bookingId: JSON.parse(localStorage.getItem("bookingDetail"))?.bookingId,
            email: token?.email
        }

        try {
            const payload = await payBookingAmount(data);
            setPaymentStatus('success');
            console.log(payload);
            toast.success("Successfully paid");
            localStorage.removeItem("bookingDetail");
            navigate('/confirmation', { state: data});
        } catch (error) {
            toast.error("Could not complete the payment");
            setPaymentError(error);
            setPaymentStatus('error');
        }
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
