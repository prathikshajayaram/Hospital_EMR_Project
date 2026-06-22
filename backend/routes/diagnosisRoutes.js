const express = require("express");
const router = express.Router();

const diagnosisController =
require("../controllers/diagnosisController");

router.get("/debug", (req,res)=>{
    res.json({
        message: "DEBUG ROUTE WORKING"
    });
});
// CREATE
router.post("/", diagnosisController.createDiagnosis);

// GET ALL
router.get("/", diagnosisController.getAllDiagnoses);

// UPDATE
router.put("/:id", diagnosisController.updateDiagnosis);

// DELETE
router.delete("/testdelete", (req,res)=>{
    res.send("DELETE ROUTE FOUND");
});
router.delete("/:id", diagnosisController.deleteDiagnosis);

module.exports = router;