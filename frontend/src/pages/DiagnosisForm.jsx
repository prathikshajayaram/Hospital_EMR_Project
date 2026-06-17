import { useState } from "react";
import axios from "axios";

function DiagnosisForm() {

  const [visitId, setVisitId] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [remarks, setRemarks] = useState("");

  const saveDiagnosis = async () => {

    try {
         if (
  !visitId ||
  !diagnosis ||
  !remarks
) {
  alert("Please fill all fields");
  return;
}      
      const response = await axios.post(
        "http://localhost:5000/api/diagnoses",
        {
          visit_id: visitId,
          diagnosis_name: diagnosis,
          remarks: remarks
        }
      );

      alert(response.data.message);

    } catch(error) {

      alert("Error Saving Diagnosis");

    }

  };

  return (
    <div>

      <h2>Diagnosis Form</h2>

      <input
        placeholder="Visit ID"
        value={visitId}
        onChange={(e)=>setVisitId(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Diagnosis"
        value={diagnosis}
        onChange={(e)=>setDiagnosis(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Remarks"
        value={remarks}
        onChange={(e)=>setRemarks(e.target.value)}
      />

      <br /><br />

      <button onClick={saveDiagnosis}>
        Save Diagnosis
      </button>

    </div>
  );
}

export default DiagnosisForm;