import axios from "axios";
import { getToken } from "./AuthService";

const Base_URL_MEDICATION = "http://localhost:8081/api/medication";

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

export const getAllMedication = () => axios.get(Base_URL_MEDICATION);

export const getMedicineByName = (name) =>
  axios.get(Base_URL_MEDICATION + "/patient" + "/" + name);

export const addMedicines = (medicine) =>
  axios.post(Base_URL_MEDICATION, medicine);

export const deleteMedicine = (id) =>
  axios.delete(Base_URL_MEDICATION + "/" + id);

export const updateMedicine = (id, medicine) =>
  axios.put(Base_URL_MEDICATION + "/" + id, medicine);
