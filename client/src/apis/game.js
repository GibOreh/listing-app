import axios from "axios";

export const apiGetGames = (params) => axios.get ('http://localhost:5002/api/game',{params})