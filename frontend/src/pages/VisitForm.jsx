import { useState } from "react";
import axios from "axios";

function VisitForm() {

  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [treatmentNotes, setTreatmentNotes] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");

  const saveVisit = async () => {

    try {
        if (
  !patientId ||
  !doctorId ||
  !symptoms ||
  !treatmentNotes
) {
  alert("Please fill all fields");
  return;
}
      const response = await axios.post(
        "http://localhost:5000/api/visits",
        {
          patient_id: patientId,
          doctor_id: doctorId,
          symptoms: symptoms,
          treatment_notes: treatmentNotes,
          follow_up_date: followUpDate
        }
      );

      alert(response.data.message);

    } catch (error) {

      console.log(error);

      alert("Error Saving Visit");

    }

  };

  return (
    <div>

      <h2>Visit Form</h2>

      <input
        type="number"
        placeholder="Patient ID"
        value={patientId}
        onChange={(e)=>setPatientId(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Doctor ID"
        value={doctorId}
        onChange={(e)=>setDoctorId(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Symptoms"
        value={symptoms}
        onChange={(e)=>setSymptoms(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Treatment Notes"
        value={treatmentNotes}
        onChange={(e)=>setTreatmentNotes(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={followUpDate}
        onChange={(e)=>setFollowUpDate(e.target.value)}
      />

      <br /><br />

      <button onClick={saveVisit}>
        Save Visit
      </button>

    </div>
  );
  
}

export default VisitForm;