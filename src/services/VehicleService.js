import HttpClient from './HttpClient';

const getAllVehicleList = async () => {
    try {
        return await HttpClient.get('/vehicles');
    }
    catch (ex) {
        throw ex;
    }
};


const getVehicleById = async (id) => {
    console.log("calle.dd")
    try {
        return await HttpClient.get(`/vehicles/${id}`);
    }
    catch (ex) {
        throw ex;
    }
};



export { getAllVehicleList, getVehicleById }