import { useState } from "react";
import axios from "axios";

function MedicalHistory() {

    const [patientId, setPatientId] = useState("");
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchHistory = async () => {

        if (!patientId) {
            alert("Please enter Patient ID");
            return;
        }

        try {

            setLoading(true);

            const response = await axios.get(
                `http://localhost:5000/api/visits/history/${patientId}`
            );

            setHistory(response.data.history);

        } catch (error) {

            console.log(error);

            alert("Error Fetching Patient History");

        } finally {

            setLoading(false);

        }
    };

    return (

        <div>

            <h2>Patient Medical History</h2>

            <input
                type="number"
                placeholder="Enter Patient ID"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
            />

            <button
                onClick={fetchHistory}
                style={{ marginLeft: "10px" }}
            >
                Search
            </button>

            <hr />

            {loading && (
                <p>Loading...</p>
            )}

            {!loading && history.length > 0 && (
               
               <><h2>Patient Medical History</h2><table>

                    <thead>

                        <tr>

                            <th>Visit ID</th>
                            <th>Symptoms</th>
                            <th>Diagnosis</th>
                            <th>Medicine</th>
                            <th>Dosage</th>
                            <th>Report</th>

                        </tr>

                    </thead>

                    <tbody>

                        {history.map((record, index) => (

                            <tr key={index}>

                                <td>{record.visit_id}</td>

                                <td>{record.symptoms}</td>

                                <td>{record.diagnosis_name}</td>

                                <td>{record.medicine_name}</td>

                                <td>{record.dosage}</td>

                                <td>{record.report_name}</td>

                            </tr>

                        ))}

                    </tbody>

                </table></>

            )}

            {!loading &&
                history.length === 0 &&
                patientId !== "" && (

                    <p>
                        No medical history found for this patient.
                    </p>

                )}

        </div>

    );
}

export default MedicalHistory;