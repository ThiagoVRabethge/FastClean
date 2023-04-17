import db from "./db";

const insertSchedule = async (req, res) => {
  try {
    let selectedScheduleId = req.body.selectedScheduleId;
    let clientName = req.body.clientName;
    let carModel = req.body.carModel;
    let washTypeId = req.body.washTypeId;

    const { rows } = await db.query(
      `UPDATE schedule SET car_model = $1, wash_type_id = $2 WHERE schedule_id = $3`,
      [carModel, washTypeId, selectedScheduleId]
    );

    res.status(200).send(rows);
  } catch (error) {
    res.status(500).send({ error: error.message });
  };
};

export default insertSchedule;