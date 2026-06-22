import { useState } from "react";
import api from "../api/api";

function VisitPage() {

    const [formData, setFormData] = useState({
        patient_id: "",
        doctor_id: "",
        symptoms: "",
        treatment_notes: "",
        follow_up_date: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post(
                "/visits",
                formData
            );

            alert("Visit Added Successfully");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div style={{ padding: "20px" }}>

            <h2>Add Visit</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="patient_id"
                    placeholder="Patient ID"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="doctor_id"
                    placeholder="Doctor ID"
                    onChange={handleChange}
                />

                <br /><br />

                <textarea
                    name="symptoms"
                    placeholder="Symptoms"
                    onChange={handleChange}
                />

                <br /><br />

                <textarea
                    name="treatment_notes"
                    placeholder="Treatment Notes"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="date"
                    name="follow_up_date"
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Save Visit
                </button>

            </form>

        </div>

    );

}

export default VisitPage;