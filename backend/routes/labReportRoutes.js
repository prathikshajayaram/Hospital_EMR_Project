const express = require("express");
const router = express.Router();

const labReportController =
require("../controllers/labReportController");

// CREATE
router.post(
    "/",
    labReportController.createLabReport
);

// GET ALL
router.get(
    "/",
    labReportController.getAllLabReports
);

// DELETE
router.delete(
    "/:id",
    labReportController.deleteLabReport
);

module.exports = router;