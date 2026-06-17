import "./App.css";
import { useState } from "react";

import VisitForm from "./pages/VisitForm";
import DiagnosisForm from "./pages/DiagnosisForm";
import PrescriptionForm from "./pages/PrescriptionForm";
import LabReportUpload from "./pages/LabReportUpload";
import MedicalHistory from "./pages/MedicalHistory";

function App() {

  const [page, setPage] = useState("visit");

  return (
  <div className="container">

    <h1>Hospital EMR System</h1>

    <h3>
      Student 3 - Clinical Records Module
    </h3>

    <button onClick={() => setPage("visit")}>
      Visit
    </button>

    <button onClick={() => setPage("diagnosis")}>
      Diagnosis
    </button>

    <button onClick={() => setPage("prescription")}>
      Prescription
    </button>

    <button onClick={() => setPage("lab")}>
      Lab Report
    </button>

    <button onClick={() => setPage("history")}>
      Medical History
    </button>

    <div className="card">

      {page === "visit" && <VisitForm />}

      {page === "diagnosis" && <DiagnosisForm />}

      {page === "prescription" && <PrescriptionForm />}

      {page === "lab" && <LabReportUpload />}

      {page === "history" && <MedicalHistory />}

    </div>

  </div>
);
}

export default App;