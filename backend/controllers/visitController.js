const db = require("../db");

// Create Visit
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
    (
        patient_id,
        doctor_id,
        symptoms,
        treatment_notes,
        follow_up_date
    )
    VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            patient_id,
            doctor_id,
            symptoms,
            treatment_notes,
            follow_up_date
        ],
        (err, result) => {

            if(err){
                console.log(err);

                return res.status(500).json({
                    message: "Error Saving Visit"
                });
            }

            res.status(201).json({
                message: "Visit Created Successfully",
                visitId: result.insertId
            });

        }
    );

};