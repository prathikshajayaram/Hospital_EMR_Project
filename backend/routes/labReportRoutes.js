const express = require("express");

const router = express.Router();

const labReportController =
require("../controllers/labReportController");

// UPLOAD REPORT
router.post(
    "/",
    labReportController.uploadMiddleware,
    labReportController.uploadLabReport
);

// GET ALL REPORTS
router.get(
    "/",
    labReportController.getAllReports
);

module.exports = router;