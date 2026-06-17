const db = require("../db");

exports.createDiagnosis = (req, res) => {
    const { visit_id, diagnosis_name, remarks } = req.body;

    const sql = `
    INSERT INTO diagnoses (visit_id, diagnosis_name, remarks)
    VALUES (?, ?, ?)
    `;

    db.query(sql, [visit_id, diagnosis_name, remarks], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error adding diagnosis" });
        }

        res.json({ message: "Diagnosis Added Successfully" });
    });
};

exports.getAllDiagnoses = (req, res) => {
    db.query("SELECT * FROM diagnoses", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.updateDiagnosis = (req, res) => {
    const id = req.params.id;
    const { diagnosis_name, remarks } = req.body;

    db.query(
        "UPDATE diagnoses SET diagnosis_name=?, remarks=? WHERE diagnosis_id=?",
        [diagnosis_name, remarks, id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Updated Successfully" });
        }
    );
};