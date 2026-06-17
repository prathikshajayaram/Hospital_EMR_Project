const db = require("../db");

// CREATE VISIT
exports.createVisit = (req, res) => {

    const {
        patient_id,
        doctor_id,
        symptoms,
        treatment_notes,
        follow_up_date
    } = req.body;

    const sql = `
        INSERT INTO visits
        (patient_id, doctor_id, symptoms, treatment_notes, follow_up_date)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql,
        [patient_id, doctor_id, symptoms, treatment_notes, follow_up_date],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "DB Error" });
            }

            res.json({
                message: "Visit Created Successfully",
                visitId: result.insertId
            });
        }
    );
};

// GET ALL VISITS
exports.getAllVisits = (req, res) => {

    const sql = "SELECT * FROM visits";

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "DB Error" });
        }

        res.json(results);
    });
};
exports.getPatientHistory = (req, res) => {

    const patient_id = req.params.id;

    const sql = `
    SELECT 
        v.visit_id,
        v.patient_id,
        v.doctor_id,
        v.visit_date,
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
    `;

    db.query(sql, [patient_id], (err, results) => {

        if (err) {
            console.log(err);
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