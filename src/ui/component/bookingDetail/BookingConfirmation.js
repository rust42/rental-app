

import { Link, useLocation } from "react-router-dom";
import Home from "../../Home";

const BookingConfirmation = () => {
    const { state } = useLocation();
        
    return <div>  
        Confirmed ! We received a payment of {state.currency} {state.amount}. We will shortly send you an email of the reservations.
        Hope you have a wonderful ride !
        <Link to="/">Reserve more</Link>
    </div>;
};

export default BookingConfirmation;