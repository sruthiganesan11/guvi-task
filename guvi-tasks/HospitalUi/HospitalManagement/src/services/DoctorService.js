import axios from "axios";
import { getToken } from "./AuthService";

const Base_URL_DOCTOR = "http://localhost:8081/api/doctor";

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

export const getAllDoctors = () => axios.get(Base_URL_DOCTOR);

export const getDoctor = (id) => axios.get(Base_URL_DOCTOR + "/" + id);

export const addDoctor = (doctor) => axios.post(Base_URL_DOCTOR, doctor);

export const deleteDoctor = (id) => axios.delete(Base_URL_DOCTOR + "/" + id);

export const updateDoctor = (id, doctor) =>
  axios.put(Base_URL_DOCTOR + "/" + id, doctor);
