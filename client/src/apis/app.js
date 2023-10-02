import axios from "axios";

export const apiGetApps = (params) => axios.get ('http://localhost:5002/api/app',{params})
export const apiSearchApp = (query) => {return axios.get(`http://localhost:5002/api/app/search?query=${query}`);};