import axios from "axios";

export const apiGetGames = (params) => axios.get ('http://localhost:5002/api/game',{params})
export const apiGetGameDetail = (_id) => {
    const url = `http://localhost:5002/api/game/${_id}`;
    
    return axios.get(url);
  };
  
export const apiSearchGame = (query) => {return axios.get(`http://localhost:5002/api/game/search?query=${query}`);};