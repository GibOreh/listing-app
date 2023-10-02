import axios from "axios";

export const apiGetArticles = (params) => axios.get ('http://localhost:5002/api/article',{params})