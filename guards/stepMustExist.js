const db = require("../model/helper");

async function stepMustExist(req, res, next) {
  try {
    const result = await db(
      `SELECT * FROM steps WHERE id =${req.params.id}`
    );

    if (result.data.length) {
      next();
    } else {
      res.status(404).send({ message: "Step not found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = stepMustExist;