const server = axios.create({
    baseURL: process.env.ROOT_API_URL,
});

export default server;