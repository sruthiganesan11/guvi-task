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

const BASE_REST_API_URL_1 = "http://localhost:8081/api/buses";

export const getAllBuses = () => axios.get(BASE_REST_API_URL_1);

export const getBus = (id) => axios.get(BASE_REST_API_URL_1 + "/" + id);

export const addBus = (bus) => axios.post(BASE_REST_API_URL_1, bus);

export const updateBus = (id, bus) =>
  axios.put(BASE_REST_API_URL_1 + "/" + id, bus);

export const deleteBus = (id) => axios.delete(BASE_REST_API_URL_1 + "/" + id);

export const updateTickets = (busid, num) =>
  axios.put(
    BASE_REST_API_URL_1 + "/updateAvailableTickets" + "/" + busid + "/" + num
  );
