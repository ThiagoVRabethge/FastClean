import Navbar from "@/components/Navbar/Navbar";
import getSchedules from "@/requests/schedules/getSchedules";
import { useStore } from "..";
import { useMemo } from "react";
import CreateSchedule from "@/components/modals/CreateSchedule";

const Schedule = () => {
  const { schedulesList, setSchedulesList } = useStore();

  const GetSchedules = () => {
    getSchedules()
      .then((response) => setSchedulesList(response.data));
  };

  useMemo(() => {
    GetSchedules();
  }, []);

  const HandleCreateSchedule = (e) => {
    e.preventDefault();

    let clientName = document.querySelector("#clientName").value;
    let carModel = document.querySelector("#carModel").value;

    console.log(clientName, carModel);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>
                  Data
                </th>
                <th>
                  Horário
                </th>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
              {schedulesList && schedulesList.map((schedule) => {
                if (schedule.car_model == null && schedule.wash_type_id == null) {
                  return (
                    <tr key={schedule.schedule_id}>
                      <td>
                        {schedule.date}
                      </td>
                      <td>
                        {schedule.time}
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#CreateScheduleModal"
                        >
                          Agendar
                        </button>
                      </td>
                    </tr>
                  )
                }
              })}
            </tbody>
          </table>
        </div>

        <CreateSchedule id="CreateScheduleModal" HandleCreateSchedule={HandleCreateSchedule} />
      </div>
    </>
  );
};

export default Schedule;