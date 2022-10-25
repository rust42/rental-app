import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVehicleById } from "./../reducers/vehicle";
import { addReview, getAllReviewsByVehicleId } from './../reducers/review'

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import {
    Grid,
    Button,
    Rating,
    Typography,
    TextareaAutosize,
} from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 10,
    m: "auto",
};

export default function VehicleDetail() {

    const [reviewDailog, setReviewDailog] = useState(false);
    const [review, setReview] = useState(0);
    const [comment, setComment] = useState("");
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        // _init();
    }, [id]);

    const _init = async () => {
        dispatch(fetchVehicleById(id));
    };

    const vehicleState = useSelector((selector) => {
        return selector.vehicles;
    });

    const reviewState = useSelector((selector) => {
        return selector.reviews;
    });

    console.log(`===review`, reviewState)


    const { vehicleDetail } = vehicleState;

    const submitReview = async () => {

        const data = {
            userId: 'binodpant.nep@gmail.com',
            rating: review,
            vehicleId: '63578a4c5d12db62c7ed56fb',
            comment
        }
        Promise.resolve(dispatch(addReview(data))).then(data => {
            setReviewDailog(false)
            dispatch(getAllReviewsByVehicleId("63578a4c5d12db62c7ed56fb"))
        }
        )


    };
    const handleCancel = () => {
        setReview(0)
        setComment("")
        setReviewDailog(false)
    }

    console.log(vehicleDetail);
    // if (http?.loading) return <div>Loading....</div>;
    // if (!http?.success) return <div>${JSON.stringify(http?.error)}</div>;

    const showVehicleReview = (
        <div>
            <Button
                onClick={() => {
                    setReviewDailog(true);
                }}
            >
                Add Rewiew
            </Button>
            <Modal open={reviewDailog}>
                <Box sx={style}>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="h2">
                            Rating(between 1 to 5)
                        </Typography>
                        <Rating
                            name="rating"
                            value={review}
                            onChange={(event, newValue) => {
                                setReview(newValue);
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography> Comment </Typography>
                        <TextareaAutosize
                            cols={50}
                            minRows={10}
                            placeholder="Please put your review herer"
                            name="comment"
                            onChange={e => setComment(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={() => submitReview()}>
                            Submit
                        </Button>
                        <Button variant="contained" color="inherit" onClick={() => {
                            handleCancel()
                        }}>
                            Cancel
                        </Button>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );



    return (
        <div>
            {showVehicleReview}
            Vehicle Detail component loaded..
        </div>
    );
}
