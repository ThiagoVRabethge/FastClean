import Navbar from "@/components/Navbar/Navbar";
import getSchedules from "@/requests/schedules/getSchedules";
import { useStore } from "..";
import { useMemo } from "react";
import CreateSchedule from "@/components/modals/CreateSchedule";
import postSchedule from "@/requests/schedules/postSchedule";
import moment from "moment";

const Schedule = () => {
  const { schedulesList, setSchedulesList } = useStore();
  const { selectedSchedule, setSelectedSchedule } = useStore();
  const actualDate = moment(new Date()).format("DD/MM/YYYY");

  console.info(actualDate);

  const GetSchedules = () => {
    getSchedules()
      .then((response) => setSchedulesList(response.data));
  };

  useMemo(() => {
    GetSchedules();
  }, []);

  const HandleLoadDataToForm = (schedule) => {
    setSelectedSchedule(schedule);
  };

  const HandleCreateSchedule = (e) => {
    e.preventDefault();

    let selectedScheduleId = selectedSchedule.schedule_id;
    let clientName = document.querySelector("#clientName").value;
    let carModel = document.querySelector("#carModel").value;
    let washTypeId = document.querySelector("#washType").value;

    postSchedule(selectedScheduleId, clientName, carModel, washTypeId)
      .then((response) => {
        console.info(response);
        GetSchedules();
      });
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
                if (schedule.date == actualDate && (schedule.car_model == null && schedule.wash_type_id == null)) {
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
                          onClick={() => HandleLoadDataToForm(schedule)}
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