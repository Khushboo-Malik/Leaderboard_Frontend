import axios from "axios";

const API = axios.create({
    baseURL: "https://leaderboard-backend-kcbp.onrender.com",
});

export default API;
