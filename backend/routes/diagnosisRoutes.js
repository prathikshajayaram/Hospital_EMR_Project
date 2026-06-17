const express = require("express");
const router = express.Router();

const diagnosisController =
require("../controllers/diagnosisController");

router.post("/", diagnosisController.createDiagnosis);

router.get("/", diagnosisController.getAllDiagnoses);

router.put("/:id", diagnosisController.updateDiagnosis);

module.exports = router;