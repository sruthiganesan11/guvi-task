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

const BASE_REST_API_URL_2 = "http://localhost:8081/api/passengers";

export const savepassenger = (passenger) =>
  axios.post(BASE_REST_API_URL_2, passenger);

export const getpassenger = (id) => axios.get(BASE_REST_API_URL_2 + "/" + id);

export const getAllPassengers = () => axios.get(BASE_REST_API_URL_2);

export const updatepassenger = (id, passenger) =>
  axios.put(BASE_REST_API_URL_2 + "/" + id, passenger);

export const deletepassenger = (id) =>
  axios.delete(BASE_REST_API_URL_2 + "/" + id);

export const passengerByEmail = (email) =>
  axios.get(BASE_REST_API_URL_2 + "/email/" + email);

export const cancelTicket = (id) =>
  axios.put(BASE_REST_API_URL_2 + "/cancelticket/" + id);

  
