import { useState } from "react";
import axios from "axios";

function PrescriptionForm() {

  const [visitId, setVisitId] = useState("");
  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");
  const [duration, setDuration] = useState("");

  const savePrescription = async () => {

    try {
     if (
  !visitId ||
  !medicine ||
  !dosage ||
  !duration
) {
  alert("Please fill all fields");
  return;
}
      const response = await axios.post(
        "http://localhost:5000/api/prescriptions",
        {
          visit_id: visitId,
          medicine_name: medicine,
          dosage: dosage,
          duration: duration,
          instructions: "Take after food"
        }
      );

      alert(response.data.message);

    } catch(error) {

      alert("Error Saving Prescription");

    }

  };

  return (
    <div>

      <h2>Prescription Form</h2>

      <input
        placeholder="Visit ID"
        value={visitId}
        onChange={(e)=>setVisitId(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Medicine Name"
        value={medicine}
        onChange={(e)=>setMedicine(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Dosage"
        value={dosage}
        onChange={(e)=>setDosage(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Duration"
        value={duration}
        onChange={(e)=>setDuration(e.target.value)}
      />

      <br /><br />

      <button onClick={savePrescription}>
        Save Prescription
      </button>

    </div>
  );
}

export default PrescriptionForm;