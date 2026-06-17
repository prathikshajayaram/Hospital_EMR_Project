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
app.use(cors());

// IMPORTANT: This allows JSON body parsing
app.use(express.json());

// This allows form-data (for file uploads like lab reports)
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files publicly
app.use("/uploads", express.static("uploads"));

/* =========================
   DATABASE CHECK (optional but useful)
========================= */
db.connect((err) => {
    if (err) {
        console.log("❌ Database Connection Failed");
        console.log(err);
    } else {
        console.log("Database Connected Successfully");
    }
});

/* =========================
   ROUTES
========================= */
app.use("/api/visits", visitRoutes);
app.use("/api/diagnoses", diagnosisRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/labreports", labReportRoutes);

/* =========================
   TEST ROUTE
========================= */
app.get("/", (req, res) => {
    res.send("🏥 Hospital EMR Backend is Running");
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});