const express = require("express");
const router = express.Router();

const prescriptionController =
require("../controllers/prescriptionController");

// CREATE
router.post(
    "/",
    prescriptionController.createPrescription
);

// GET ALL
router.get(
    "/",
    prescriptionController.getAllPrescriptions
);

// UPDATE
router.put(
    "/:id",
    prescriptionController.updatePrescription
);

// DELETE
router.delete(
    "/:id",
    prescriptionController.deletePrescription
);

module.exports = router;