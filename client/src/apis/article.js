import axios from "axios";

export const apiGetArticles = (params) => axios.get ('http://localhost:5002/api/article',{params})
export const apiGetArticleDetail = (_id) => {
    const url = `http://localhost:5002/api/article/${_id}`;
    
    return axios.get(url);
  };