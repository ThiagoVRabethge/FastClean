import server from "@/services/server";

const getWashsTypes = () => {
    return (
        server
            .get("/api/listWashsTypes")
            .then((response) => response)
            .catch((error) => console.error(error))
    );
};

export default getWashsTypes;