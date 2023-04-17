import { useStore } from "@/pages";

const CreateSchedule = (props) => {
  const id = props.id;

  const washsTypesList = useStore((state) => state.washsTypesList);

  return (
    <div class="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Agendar</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={(e) => props.HandleCreateSchedule(e)}>
            <div class="modal-body">
              <div className="mb-3">
                <input type="text" id="clientName" placeholder="Seu nome" className="form-control" />
              </div>

              <div className="mb-3">
                <input type="text" id="carModel" placeholder="Modelo do carro" className="form-control" />
              </div>

              <div className="mb-3">
                <select id="washType" className="form-control">
                  {washsTypesList && washsTypesList.map((washs) => (
                    <option key={washs.wash_id} value={washs.wash_id}>
                      {washs.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
              <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Concluir</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSchedule;