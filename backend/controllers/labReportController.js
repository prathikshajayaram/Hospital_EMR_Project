const db = require("../db");

// CREATE REPORT
exports.createLabReport = (req, res) => {

    const {
        visit_id,
        report_name,
        file_path
    } = req.body;

    const sql = `
        INSERT INTO lab_reports
        (
            visit_id,
            report_name,
            file_path
        )
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [
            visit_id,
            report_name,
            file_path
        ],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: "Error Adding Report"
                });
            }

            res.status(201).json({
                message: "Lab Report Added Successfully"
            });

        }
    );
};

// GET ALL REPORTS
exports.getAllLabReports = (req, res) => {

    db.query(
        "SELECT * FROM lab_reports",
        (err, results) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(results);

        }
    );

};

// DELETE REPORT
exports.deleteLabReport = (req, res) => {

    const id = req.params.id;

    const sql = `
        DELETE FROM lab_reports
        WHERE report_id = ?
    `;

    db.query(
        sql,
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Lab Report Deleted Successfully"
            });

        }
    );

};