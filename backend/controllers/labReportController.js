const db = require("../db");
const multer = require("multer");
const path = require("path");

// STORAGE CONFIGURATION
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// MIDDLEWARE FOR UPLOAD
exports.uploadMiddleware = upload.single("report_file");

// UPLOAD LAB REPORT
exports.uploadLabReport = (req, res) => {

    const {
        visit_id,
        report_name
    } = req.body;

    const file_path = req.file ? req.file.filename : null;

    if (!file_path) {
        return res.status(400).json({
            message: "File upload failed"
        });
    }

    const sql = `
    INSERT INTO lab_reports
    (visit_id, report_name, file_path)
    VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [visit_id, report_name, file_path],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Error uploading report"
                });
            }

            res.status(201).json({
                message: "Lab Report Uploaded Successfully",
                reportId: result.insertId,
                file: file_path
            });
        }
    );
};

// GET ALL REPORTS
exports.getAllReports = (req, res) => {

    const sql = "SELECT * FROM lab_reports";

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);
    });
};