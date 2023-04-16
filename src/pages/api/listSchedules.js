import db from "./db";

const listSchedules = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM schedule");

    res.status(200).send(rows);
  } catch (error) {
    res.status(500).send({ error: error.message });
  };
};

export default listSchedules;