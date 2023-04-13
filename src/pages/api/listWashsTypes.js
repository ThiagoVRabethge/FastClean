import db from "./db";

const listWashsTypes = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM wash_type");

    res.status(200).send(rows);
  } catch (error) {
    res.status(500).send({ error: error.message });
  };
};

export default listWashsTypes;