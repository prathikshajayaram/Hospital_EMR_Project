const express = require("express");
const router = express.Router();

const visitController =
require("../controllers/visitController");

// CREATE
router.post("/", visitController.createVisit);

// GET ALL
router.get("/", visitController.getAllVisits);

// PATIENT HISTORY
router.get("/history/:id", visitController.getPatientHistory);

// UPDATE
router.put("/:id", visitController.updateVisit);

// DELETE
router.delete("/:id", visitController.deleteVisit);

module.exports = router;