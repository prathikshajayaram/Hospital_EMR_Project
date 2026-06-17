const db = require("../db");

/* =========================
   CREATE VISIT
========================= */
exports.createVisit = (req, res) => {

    const {
        patient_id,
        doctor_id,
        symptoms,
        treatment_notes,
        follow_up_date
    } = req.body;

    // Validation
    if (!patient_id || !doctor_id || !symptoms || !treatment_notes || !follow_up_date) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const sql = `
        INSERT INTO visits
        (patient_id, doctor_id, symptoms, treatment_notes, follow_up_date)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [patient_id, doctor_id, symptoms, treatment_notes, follow_up_date],
        (err, result) => {

            if (err) {
                console.log("Create Visit Error:", err);
                return res.status(500).json({
                    message: "Database error while creating visit"
                });
            }

            res.status(201).json({
                message: "Visit Created Successfully",
                visitId: result.insertId
            });
        }
    );
};


/* =========================
   GET ALL VISITS
========================= */
exports.getAllVisits = (req, res) => {

    const sql = "SELECT * FROM visits ORDER BY visit_id DESC";

    db.query(sql, (err, results) => {

        if (err) {
            console.log("Get Visits Error:", err);
            return res.status(500).json({
                message: "Database error while fetching visits"
            });
        }

        res.status(200).json(results);
    });
};


/* =========================
   GET PATIENT HISTORY
========================= */
exports.getPatientHistory = (req, res) => {

    const patient_id = req.params.id;

    if (!patient_id) {
        return res.status(400).json({
            message: "Patient ID is required"
        });
    }

    const sql = `
        SELECT 
            v.visit_id,
            v.patient_id,
            v.doctor_id,
            v.symptoms,
            v.treatment_notes,
            v.follow_up_date,

            d.diagnosis_name,
            d.remarks AS diagnosis_remarks,

            p.medicine_name,
            p.dosage,
            p.duration,
            p.instructions,

            l.report_name,
            l.file_path

        FROM visits v
        LEFT JOIN diagnoses d ON v.visit_id = d.visit_id
        LEFT JOIN prescriptions p ON v.visit_id = p.visit_id
        LEFT JOIN lab_reports l ON v.visit_id = l.visit_id

        WHERE v.patient_id = ?
        ORDER BY v.visit_id DESC
    `;

    db.query(sql, [patient_id], (err, results) => {

        if (err) {
            console.log("History Error:", err);
            return res.status(500).json({
                message: "Error fetching patient history"
            });
        }

        res.status(200).json({
            patient_id,
            history: results
        });
    });
};


/* =========================
   DELETE VISIT
========================= */
exports.deleteVisit = (req, res) => {

    const id = req.params.id;

    if (!id) {
        return res.status(400).json({
            message: "Visit ID is required"
        });
    }

    const sql = "DELETE FROM visits WHERE visit_id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            console.log("Delete Visit Error:", err);
            return res.status(500).json({
                message: "Database error while deleting visit"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Visit not found"
            });
        }

        res.status(200).json({
            message: "Visit deleted successfully"
        });

    });
};