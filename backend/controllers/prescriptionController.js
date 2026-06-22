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
        (
            visit_id,
            medicine_name,
            dosage,
            duration,
            instructions
        )
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

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: "Error Adding Prescription"
                });
            }

            res.status(201).json({
                message: "Prescription Added Successfully"
            });

        }
    );
};

// GET ALL PRESCRIPTIONS
exports.getAllPrescriptions = (req, res) => {

    db.query(
        "SELECT * FROM prescriptions",
        (err, results) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(results);

        }
    );

};

// UPDATE PRESCRIPTION
exports.updatePrescription = (req, res) => {

    const id = req.params.id;

    const {
        medicine_name,
        dosage,
        duration,
        instructions
    } = req.body;

    const sql = `
        UPDATE prescriptions
        SET
            medicine_name = ?,
            dosage = ?,
            duration = ?,
            instructions = ?
        WHERE prescription_id = ?
    `;

    db.query(
        sql,
        [
            medicine_name,
            dosage,
            duration,
            instructions,
            id
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Prescription Updated Successfully"
            });

        }
    );

};

// DELETE PRESCRIPTION
exports.deletePrescription = (req, res) => {

    const id = req.params.id;

    const sql = `
        DELETE FROM prescriptions
        WHERE prescription_id = ?
    `;

    db.query(
        sql,
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Prescription Deleted Successfully"
            });

        }
    );

};