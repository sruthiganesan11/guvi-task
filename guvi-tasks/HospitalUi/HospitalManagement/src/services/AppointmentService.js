import axios from "axios";
import { getToken } from "./AuthService";

const Base_URL_APPOINTMENT = "http://localhost:8081/api/appointment";

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

export const getAllAppointments = () => axios.get(Base_URL_APPOINTMENT);

export const getAppointment = (id) =>
  axios.get(Base_URL_APPOINTMENT + "/" + id);

export const addAppointment = (appointment) =>
  axios.post(Base_URL_APPOINTMENT, appointment);

export const deleteAppointment = (id) =>
  axios.delete(Base_URL_APPOINTMENT + "/" + id);

export const updateAppointment = (id, appointment) =>
  axios.put(Base_URL_APPOINTMENT + "/" + id, appointment);

export const cancelAppointment = (id) =>
  axios.put(Base_URL_APPOINTMENT + "/cancelAppointment/" + id);
