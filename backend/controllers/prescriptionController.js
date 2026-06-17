const db = require("../db");

// CREATE PRESCRIPTION
exports.createPrescription = (req, res) => {

    const {
        visit_id,
        medicine_name,
        dosage,
        duration,
        instructions
    } = req.body;

    const sql = `
    INSERT INTO prescriptions
    (visit_id, medicine_name, dosage, duration, instructions)
    VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            visit_id,
            medicine_name,
            dosage,
            duration,
            instructions
        ],
        (err, result) => {

            if(err){
                console.log(err);
                return res.status(500).json({
                    message: "Error adding prescription"
                });
            }

            res.status(201).json({
                message: "Prescription Added Successfully",
                prescriptionId: result.insertId
            });
        }
    );
};

// GET ALL PRESCRIPTIONS
exports.getAllPrescriptions = (req, res) => {

    const sql = "SELECT * FROM prescriptions";

    db.query(sql, (err, results) => {

        if(err){
            return res.status(500).json(err);
        }

        res.status(200).json(results);
    });
};