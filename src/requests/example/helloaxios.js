import server from "@/pages/services/server";

const helloaxios = () => {
  return (
    server
      .get("/api/hello")
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default helloaxios;