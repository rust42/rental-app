import HttpClient from './HttpClient';

const createBooking = async (data) => {
    try {
        return await HttpClient.post('/bookings', data);
    }
    catch (ex) {
        throw ex;
    }
};



const getBookById = async (id) => {
    try {
        return await HttpClient.get(`/bookings/${id}`);
    }
    catch (ex) {
        throw ex;
    }
};

const payBookingAmount = async (data) => {
    try {
        return await HttpClient.post(`/payments`, data);
    }
    catch (ex) {
        throw ex;
    }
};



export { createBooking, payBookingAmount, getBookById }