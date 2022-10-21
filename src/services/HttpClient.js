import axios from "axios";

class HttpClient {
    #baseURL;
    #token;

    constructor(baseURL) {
        this.#baseURL = baseURL;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
    }

    setAuthenticationToken(token) {
        this.#token = token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.#token}`;
    }

    async get(path, params = {}, headers = {}) {
        const response = await axios.get(this.#baseURL + path, {
            params,
            headers
        });
        return response.data;
    }

    async post(path, data, headers = {}) {
        const response = await axios.post(this.#baseURL + path, data, { headers });
        return response.data;
    }

    async put(path, data, headers = {}) {
        const response = await axios.put(this.#baseURL + path, data, { headers });
        return response.data;
    }

    async delete(path, data, headers = {}) {
        const response = await axios.delete(this.#baseURL + path, { headers });
        return response.data;
    }

    getBaseURL(){
        return this.#baseURL;
    }

    getToken(){
        return this.#token;
    }
}

const defaultClient = new HttpClient("http://localhost:8080")

export default defaultClient;