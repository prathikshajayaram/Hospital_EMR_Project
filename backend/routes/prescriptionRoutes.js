const express = require("express");

const router = express.Router();

const prescriptionController =
require("../controllers/prescriptionController");

// CREATE PRESCRIPTION
router.post(
    "/",
    prescriptionController.createPrescription
);

// GET ALL PRESCRIPTIONS
router.get(
    "/",
    prescriptionController.getAllPrescriptions
);

module.exports = router;