import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import VisitPage from "./pages/VisitPage";
import DiagnosisPage from "./pages/DiagnosisPage";
import PrescriptionPage from "./pages/PrescriptionPage";
import LabReportPage from "./pages/LabReportPage";
import PatientHistoryPage from "./pages/PatientHistoryPage";

function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <div
                style={{
                    display: "flex"
                }}
            >

                <Sidebar />

                <div
                    style={{
                        padding: "20px",
                        width: "100%"
                    }}
                >

                    <Routes>

                        <Route
                            path="/"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/visits"
                            element={<VisitPage />}
                        />

                        <Route
                            path="/diagnoses"
                            element={<DiagnosisPage />}
                        />

                        <Route
                            path="/prescriptions"
                            element={<PrescriptionPage />}
                        />

                        <Route
                            path="/labreports"
                            element={<LabReportPage />}
                        />

                        <Route
                            path="/history"
                            element={<PatientHistoryPage />}
                        />

                    </Routes>

                </div>

            </div>

        </BrowserRouter>

    );

}

export default App;