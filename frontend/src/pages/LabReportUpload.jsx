import { useState } from "react";
import axios from "axios";

function LabReportUpload() {

  const [visitId, setVisitId] = useState("");
  const [reportName, setReportName] = useState("");
  const [file, setFile] = useState(null);

  const uploadReport = async () => {

    const formData = new FormData();

    formData.append("visit_id", visitId);
    formData.append("report_name", reportName);
    formData.append("report_file", file);

    try {
      if (!visitId || !reportName || !file) {
  alert("Please fill all Lab Report fields");
  return;
}

      const response = await axios.post(
        "http://localhost:5000/api/labreports",
        formData
      );

      alert(response.data.message);

    } catch(error) {

      console.log(error);

      alert("Upload Failed");

    }

  };

  return (

    <div>

      <h2>Lab Report Upload</h2>

      <input
        placeholder="Visit ID"
        value={visitId}
        onChange={(e)=>setVisitId(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Report Name"
        value={reportName}
        onChange={(e)=>setReportName(e.target.value)}
      />

      <br /><br />

      <input
        type="file"
        onChange={(e)=>setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={uploadReport}>
        Upload Report
      </button>

    </div>
  );
}

export default LabReportUpload;