const express = require("express");

const router = express.Router();

const visitController =
require("../controllers/visitController");

router.post("/", visitController.createVisit);

router.get("/", visitController.getAllVisits);

// NEW IMPORTANT ROUTE
router.get("/history/:id", visitController.getPatientHistory);

module.exports = router;