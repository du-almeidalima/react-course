import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://du-react-burger-builder.firebaseio.com/'
});

export default instance;