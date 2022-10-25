import HttpClient from './HttpClient';

const saveReview = async (data) => {

    console.log('data', data)


    try {
        return await HttpClient.post('/reviews', data);
    }
    catch (ex) {
        throw ex;
    }
};



const getAllReviewByVehicle = async (vehicleId) => {

    try {
        return await HttpClient.get(`/reviews/vehicle/${vehicleId}`);
    }
    catch (ex) {
        throw ex;
    }
};
export { saveReview, getAllReviewByVehicle }

