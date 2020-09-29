import axios from 'axios';

const axiosInstance = axios.create()


// Global Defaults Values
axiosInstance.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axiosInstance.defaults.headers.common['GLOBAL_CUSTOM_HEADER'] = 'GLOBAL_CUSTOM_HEADER_VALUE_XXX';

// Global Request Interceptors
axiosInstance.interceptors.request.use(
    // This is useful to attach Headers or any pre-flight configuration
    req => {
        req.headers['CUSTOM_HEADER'] = 'CUSTOM_HEADER_VALUE_XXX';

        return req;
    },
    // This is "catch" when there's an error sending a request, for example no internet connectivity
    reqError => {
        console.error('[Global Request Interceptor] Error: ', reqError);

        return Promise.reject(reqError)
    }
);

// Global Response Interceptor
axiosInstance.interceptors.response.use(
    res => {

        return res;
    },
    resError => {
        // This callback is executed when a request is sent but it returns an error
        console.error('[Global Response Interceptor] Error: ', resError);

        return Promise.reject(resError);
    }
)

export default axiosInstance;

/*
 * Axios is a HttpClient and this configuration is applied to all its "instance"
 */