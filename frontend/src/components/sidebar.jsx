import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <div
            style={{
                width: "220px",
                minHeight: "100vh",
                background: "#f2f2f2",
                padding: "20px"
            }}
        >

            <h3>EMR Menu</h3>

            <p><Link to="/">Dashboard</Link></p>

            <p><Link to="/visits">Visits</Link></p>

            <p><Link to="/diagnoses">Diagnoses</Link></p>

            <p><Link to="/prescriptions">Prescriptions</Link></p>

            <p><Link to="/labreports">Lab Reports</Link></p>

            <p><Link to="/history">Patient History</Link></p>

        </div>

    );

}

export default Sidebar;