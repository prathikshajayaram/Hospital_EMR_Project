import { useState } from "react";
import axios from "axios";

function LabReportUpload() {

  const [visitId, setVisitId] = useState("");
  const [reportName, setReportName] = useState("");
  const [filePath, setFilePath] = useState("");

  const uploadReport = async () => {

    try {

      if (!visitId || !reportName || !filePath) {
        alert("Please fill all fields");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/labreports",
        {
          visit_id: visitId,
          report_name: reportName,
          file_path: filePath
        }
      );

      alert(response.data.message);

    } catch (error) {

      console.log(error);
      alert("Upload Failed");

    }

  };

  return (

    <div>

      <h2>Lab Report Form</h2>

      <input
        placeholder="Visit ID"
        value={visitId}
        onChange={(e) => setVisitId(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Report Name"
        value={reportName}
        onChange={(e) => setReportName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="File Path"
        value={filePath}
        onChange={(e) => setFilePath(e.target.value)}
      />

      <br /><br />

      <button onClick={uploadReport}>
        Save Report
      </button>

    </div>

  );
}

export default LabReportUpload;