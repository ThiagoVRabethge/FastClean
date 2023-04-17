import server from "@/services/server";

const postSchedule = (selectedScheduleId, clientName, carModel, washTypeId) => {
  return (
    server
      .post("/api/insertSchedule", {
        selectedScheduleId: selectedScheduleId,
        clientName: clientName,
        carModel: carModel,
        washTypeId: washTypeId,
      })
      .then((response) => response)
      .catch((error) => console.error({ error: error.message }))
  );
};

export default postSchedule;