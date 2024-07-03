import axios from "axios";
import { getToken } from "./AuthService";

const Base_URL_PATIENT = "http://localhost:8081/api/patient";

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

export const getAllPatients = () => axios.get(Base_URL_PATIENT);

export const getPatient = (id) => axios.get(Base_URL_PATIENT + "/" + id);

export const addPatient = (patient) => axios.post(Base_URL_PATIENT, patient);

export const deletePatient = (id) => axios.delete(Base_URL_PATIENT + "/" + id);

export const updatePatient = (id, patient) =>
  axios.put(Base_URL_PATIENT + "/" + id, patient);
