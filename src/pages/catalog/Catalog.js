import { useMemo } from "react";
import { useStore } from "../index";
import Navbar from "@/components/Navbar/Navbar";
import server from "@/services/server";

const Catalog = () => {
  const { washsTypesList, setWashsTypesList } = useStore();

  const GetWashsTypes = () => {
    server
      .get("https://fast-clean-8a0k1tal7-thiagovrabethge.vercel.app/api/listWashsTypes")
      .then((response) => setWashsTypesList(response.data))
      .catch((error) => console.error(error))
  };

  useMemo(() => {
    GetWashsTypes();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="text-center mt-3 mb-3">
          <h5>Confira nossos serviços</h5>
        </div>

        <div className="row">
          {washsTypesList && washsTypesList.map((washType) => {
            return (
              <div key={washType.wash_id} className="col-6">
                <div className="card">
                  <div className="card-body">
                    <span>
                      <h5 className="card-title">
                        {washType.name}
                      </h5>
                      <p className="card-text">
                        {washType.description}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </>
  );
};

export default Catalog;