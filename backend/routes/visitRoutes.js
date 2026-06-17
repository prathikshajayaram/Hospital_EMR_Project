const express = require("express");
const router = express.Router();

const visitController = require("../controllers/visitController");

router.post("/", visitController.createVisit);

router.get("/", visitController.getAllVisits);

router.delete("/:id", visitController.deleteVisit);

module.exports = router;