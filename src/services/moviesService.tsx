import axios from "axios";


const baseURL = 'https://api.themoviedb.org/3';

const movies = 'https://api.themoviedb.org/3/discover';

const api_key = 'cdd0947b1771d5e277bfcb6b465a7d8e';

const apiRequest = axios.create({
    baseURL
});

export {
    baseURL,
    movies,
    api_key,
    apiRequest
}