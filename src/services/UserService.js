
import HttpClient from './HttpClient';

const sigin = async (data) => {
    return await HttpClient.post('/signin', data);

};

const signup = async (data) => {
    return await HttpClient.post('/signup', data);
};

export { sigin, signup };

