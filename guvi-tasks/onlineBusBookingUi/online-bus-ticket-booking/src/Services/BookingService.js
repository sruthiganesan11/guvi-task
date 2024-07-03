import axios from "axios";
import { getToken } from "./AuthService";

axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = getToken();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const BASE_REST_API_URL = "http://localhost:8081/api/booking";

export const getAllBookings = () => axios.get(BASE_REST_API_URL);

export const getBooking = (id) => axios.get(BASE_REST_API_URL + "/" + id);

export const saveBooking = (booking) => axios.post(BASE_REST_API_URL, booking);

export const getPassengerById = (id) =>
  axios.get(BASE_REST_API_URL + "/passenger" + "/" + id);
