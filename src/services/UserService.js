
import HttpClient from './HttpClient';

const sigin = async (data) => {
    return await HttpClient.post('/api/auth/signin', data);

};

const signup = async (data) => {
    return await HttpClient.post('/api/auth/signup', data);
};

export { sigin, signup };

