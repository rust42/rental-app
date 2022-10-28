import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import { getAllReviewByVehicle } from '../../../services/reviewService';
import Rating from '@mui/material/Rating';
import "./Details.css"

const Review = ({ vehicleId }) => {

    const [reviews, setReviews] = useState({
        status: 'idle',
        reviews: [],
    });

    const reviewsElements = () => {
        if (reviews.reviews.length === 0) {
            return <div>No review found!</div>;
        }

        return reviews.reviews.map((review, index) => {
            return <div key={index}>
                <Rating
                    name="simple-controlled"
                    value={review.rating} />
                <div>
                    {review.comment}
                </div>
            </div>
        });
    };

    useState(async () => {
        setReviews({
            ...reviews,
            status: 'pending'
        });

        try {
            const vehicleReviews = await getAllReviewByVehicle(vehicleId);
            setReviews({
                reviews: vehicleReviews,
                status: 'success'
            })
        } catch (error) {
            setReviews({
                reviews: [],
                status: 'error'
            })
        }
    }, [vehicleId]);


    return (
                <div className='reviewbody'>
                    <div className='reviewtext'>
                        Reviews
                    </div>
                    <div className='reviewmain'> 
                            {reviews.status === 'pending' && <CircularProgress color="inherit" />}
                            {reviewsElements()}
                    </div>

                </div>
    )
};


export default Review;