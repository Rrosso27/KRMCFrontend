import axios from "axios";

const API_URL = "http://localhost:5000/api/";

const getAuthHeaders = () => {
    const token = localStorage.getItem("token"); // Obtén el token desde localStorage
    return { token: `${token}` };
};


export const getEmployees = () => axios.get(`${API_URL}employeeRoutes/`, { headers: getAuthHeaders() });
export const createEmployee = (data) => axios.post(`${API_URL}employeeRoutes/`, data, { headers: getAuthHeaders() });
export const updateEmployee = (id, data) => axios.put(`${API_URL}employeeRoutes/${id}`, data, { headers: getAuthHeaders() });
export const deleteEmployee = (id) => axios.delete(`${API_URL}employeeRoutes/${id}`, { headers: getAuthHeaders() });


export const getApplications = () => axios.get(`${API_URL}applicationRoutes/`, { headers: getAuthHeaders() });
export const createApplication = (data) => axios.post(`${API_URL}applicationRoutes/`, data, { headers: getAuthHeaders() });
export const updateAapplication = (id, data) => axios.put(`${API_URL}applicationRoutes/${id}`, data, { headers: getAuthHeaders() });
export const deleteApplication = (id) => axios.delete(`${API_URL}applicationRoutes/${id}`, { headers: getAuthHeaders() });

export const loginUser = (data) => axios.post(`${API_URL}auth/login`, data);
export const registerUser = (data) => axios.post(`${API_URL}auth/register`, data);

export const getUserByEmail = (email) => axios.get(`${API_URL}users/${email}`, { headers: getAuthHeaders() });

