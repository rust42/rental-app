import HttpClient from './HttpClient';

const getAllVehicleList = async (data) => {
    try {
        return await HttpClient.put('/vehicles/search', data);
    }
    catch (ex) {
        throw ex;
    }
};


const getVehicleById = async (id) => {
    try {
        return await HttpClient.get(`/vehicles/${id}`);
    }
    catch (ex) {
        throw ex;
    }
};



export { getAllVehicleList, getVehicleById }