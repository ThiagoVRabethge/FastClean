import server from "@/services/server";

const getSchedules = () => {
  return (
    server
      .get("/api/listSchedules")
      .then((response) => response)
      .catch((error) => console.error({ error: error.message }))
  );
};

export default getSchedules;