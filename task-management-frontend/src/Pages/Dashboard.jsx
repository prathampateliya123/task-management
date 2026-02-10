import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import Header from "../Components/Layout/Header";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <Header />
      <h2 className="dashboard-title">Legacy Dashboard</h2>

      <div className="dashboard-grid">
        <div className="dash-card" onClick={() => navigate("/tasks")}>
          <h3>My Tasks</h3>
          <p>View & manage your tasks</p>
        </div>

        <div className="dash-card" onClick={() => navigate("/projects")}>
          <h3>Projects</h3>
          <p>View & manage your Project</p>
        </div>

        <div className="dash-card" onClick={() => navigate("/calendar")}>
          <h3>Calendar</h3>
          <p>Check history & deadlines</p>
        </div>

        <div className="dash-card" onClick={() => navigate("/submit-task")}>
          <h3>Submit Task</h3>
          <p>Create & submit new task</p>
        </div>

        <div className="dash-card" onClick={() => navigate("/settings")}>
          <h3>Settings</h3>
          <p>Manage preferences</p>
        </div>
      </div>
    </div>
  );
}
