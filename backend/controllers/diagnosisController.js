const db = require("../db");

// CREATE DIAGNOSIS
exports.createDiagnosis = (req, res) => {

    const {
        visit_id,
        diagnosis_name,
        remarks
    } = req.body;

    const sql = `
    INSERT INTO diagnoses
    (visit_id, diagnosis_name, remarks)
    VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [visit_id, diagnosis_name, remarks],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: "Error adding diagnosis"
                });
            }

            res.status(201).json({
                message: "Diagnosis Added Successfully"
            });

        }
    );

};

// GET ALL DIAGNOSES
exports.getAllDiagnoses = (req, res) => {

    const sql = "SELECT * FROM diagnoses";

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);

    });

};

// UPDATE DIAGNOSIS
exports.updateDiagnosis = (req, res) => {

    const id = req.params.id;

    const {
        diagnosis_name,
        remarks
    } = req.body;

    const sql = `
    UPDATE diagnoses
    SET diagnosis_name = ?,
        remarks = ?
    WHERE diagnosis_id = ?
    `;

    db.query(
        sql,
        [diagnosis_name, remarks, id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Diagnosis Not Found"
                });
            }

            res.json({
                message: "Diagnosis Updated Successfully"
            });

        }
    );

};

// DELETE DIAGNOSIS
exports.deleteDiagnosis = (req, res) => {

    const id = req.params.id;

    const sql = `
    DELETE FROM diagnoses
    WHERE diagnosis_id = ?
    `;

    db.query(sql, [id], (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                message: "Error deleting diagnosis"
            });

        }

        if (result.affectedRows === 0) {

            return res.status(404).json({
                message: "Diagnosis Not Found"
            });

        }

        res.status(200).json({
            message: "Diagnosis Deleted Successfully"
        });

    });

};