const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

// ROUTES
const visitRoutes = require("./routes/visitRoutes");
const diagnosisRoutes = require("./routes/diagnosisRoutes");
const prescriptionRoutes = require("./routes/prescriptionRoutes");
const labReportRoutes = require("./routes/labReportRoutes");

const app = express();

/* =========================
   MIDDLEWARE
========================= */

// Enable CORS
app.use(cors());

// JSON body parser (VERY IMPORTANT)
app.use(express.json());

// URL encoded data parser
app.use(express.urlencoded({ extended: true }));

// Static folder for uploaded files (lab reports)
app.use("/uploads", express.static("uploads"));

/* =========================
   DATABASE CONNECTION
========================= */

db.connect((err) => {
    if (err) {
        console.log(" Database Connection Failed");
        console.log(err);
        process.exit(1); // stop server if DB fails
    } else {
        console.log("Database Connected Successfully");
    }
});

/* =========================
   API ROUTES
========================= */

app.use("/api/visits", visitRoutes);
app.use("/api/diagnoses", diagnosisRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/labreports", labReportRoutes);

/* =========================
   HEALTH CHECK ROUTE
========================= */

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hospital EMR Backend is Running Successfully"
    });
});

/* =========================
   GLOBAL ERROR HANDLER (OPTIONAL BUT PROFESSIONAL)
========================= */

app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).json({
        message: "Internal Server Error"
    });
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(` Server Running on Port ${PORT}`);
});