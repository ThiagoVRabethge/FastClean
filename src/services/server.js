import axios from "axios";

const server = axios.create({
    baseURL: "https://fast-clean.vercel.app",
});

export default server;