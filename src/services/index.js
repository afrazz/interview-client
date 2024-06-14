import axios from "axios";

const endpoint = "http://localhost:5000/api";
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // config.headers.Authorization = `Bearer ${your_token}`;
    // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
    config.baseURL = endpoint;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Optional: Do something with response data
    return response;
  },
  function (error) {
    console.log(error.message, "errror");

    console.log(error);
    return Promise.reject(
      error.response.data.message || error.response.data?.err || error.message
    );
  }
);

export default axios;
