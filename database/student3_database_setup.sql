CREATE DATABASE hospital_emr;
USE hospital_emr;
CREATE TABLE visits (
    visit_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    visit_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    symptoms TEXT,
    treatment_notes TEXT,
    follow_up_date DATE
);
CREATE TABLE diagnoses (
    diagnosis_id INT AUTO_INCREMENT PRIMARY KEY,
    visit_id INT NOT NULL,
    diagnosis_name VARCHAR(255),
    remarks TEXT,
    FOREIGN KEY (visit_id)
    REFERENCES visits(visit_id)
);
CREATE TABLE prescriptions (
    prescription_id INT AUTO_INCREMENT PRIMARY KEY,
    visit_id INT NOT NULL,
    medicine_name VARCHAR(255),
    dosage VARCHAR(100),
    duration VARCHAR(100),
    instructions TEXT,
    FOREIGN KEY (visit_id)
    REFERENCES visits(visit_id)
);
CREATE TABLE lab_reports (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    visit_id INT NOT NULL,
    report_name VARCHAR(255),
    file_path VARCHAR(500),
    uploaded_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (visit_id)
    REFERENCES visits(visit_id)
);
INSERT INTO visits
(patient_id,
doctor_id,
symptoms,
treatment_notes,
follow_up_date)
VALUES
(
1,
101,
'Fever, Headache',
'Drink water and take rest',
'2026-06-25'
);
SELECT * FROM visits;
USE hospital_emr;

SELECT * FROM visits;
USE hospital_emr;
DROP TABLE IF EXISTS diagnoses;
 
CREATE TABLE diagnoses (
    diagnosis_id INT AUTO_INCREMENT PRIMARY KEY,
    visit_id INT NOT NULL,
    diagnosis_name VARCHAR(255),
    remarks TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_visit_diagnosis
    FOREIGN KEY (visit_id)
    REFERENCES visits(visit_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
USE hospital_emr;
SELECT * FROM diagnoses;

USE hospital_emr;
SELECT * FROM prescriptions;

SELECT * FROM lab_reports;
USE hospital_emr;

SELECT * FROM visits;
SELECT * FROM diagnoses;
SELECT * FROM prescriptions;
SELECT * FROM lab_reports;