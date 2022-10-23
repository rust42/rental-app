
import HttpClient from './HttpClient';

const sigin = async (data) => {
    try {
        return await HttpClient.post('/auth/login', data);
    }
    catch (ex) {
        throw ex;
    }
};

const signup = async (data) => {
    return await HttpClient.post('/auth/signup', data);
};

export { sigin, signup };

