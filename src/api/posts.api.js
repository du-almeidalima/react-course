import axios from 'axios';

const postAxiosInstance = axios.create()


// Posts API Defaults Values
postAxiosInstance.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
postAxiosInstance.defaults.headers.common['POSTS_API_CUSTOM_HEADER'] = 'POSTS_API_CUSTOM_HEADER_VALUE_XXX';

// Posts API Request Interceptors
postAxiosInstance.interceptors.request.use(
    // This is useful to attach Headers or any pre-flight configuration
    req => {
        req.headers['CUSTOM_HEADER'] = 'CUSTOM_HEADER_VALUE_XXX';

        return req;
    },
    // This is "catch" when there's an error sending a request, for example no internet connectivity
    reqError => {
        console.error('[Posts API Request Interceptor] Error: ', reqError);

        return Promise.reject(reqError)
    }
);

// Posts API Response Interceptor
postAxiosInstance.interceptors.response.use(
    res => {

        return res;
    },
    resError => {
        // This callback is executed when a request is sent but it returns an error
        console.error('[Posts API Response Interceptor] Error: ', resError);

        return Promise.reject(resError);
    }
)

export default postAxiosInstance;

/*
 * Axios is a HttpClient and this configuration is applied to all its "instance"
 */