import { useState } from "react";
import "./SubmitTask.css";

const projects = [
  "Task Management System",
  "Website Redesign",
  "CRM Dashboard",
];

export default function SubmitTask() {
  const [formData, setFormData] = useState({
    project: "",
    taskTitle: "",
    description: "",
    hours: "",
    status: "In Progress",
    date: new Date().toISOString().split("T")[0],
    link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Work Report Submitted (Static)");
  };

  return (
    <div className="submit-container">
      <h2>Submit Daily Work Report</h2>

      <form className="submit-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>Date</label>
            <input type="date" name="date" value={formData.date} readOnly />
          </div>

          <div>
            <label>Project</label>
            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
            >
              <option value="">Select Project</option>
              {projects.map((p, i) => (
                <option key={i}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Task / Module Name</label>
            <input
              type="text"
              name="taskTitle"
              placeholder="e.g. Dashboard UI"
              value={formData.taskTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Time Spent (Hours)</label>
            <input
              type="number"
              name="hours"
              placeholder="e.g. 3"
              value={formData.hours}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label>Work Description</label>
        <textarea
          name="description"
          placeholder="Describe what you worked on today..."
          value={formData.description}
          onChange={handleChange}
          required
        />

        <div className="form-row">
          <div>
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div>
            <label>Work Link (Optional)</label>
            <input
              type="url"
              name="link"
              placeholder="GitHub / Drive link"
              value={formData.link}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit">Submit Report</button>
          <button type="reset" className="secondary">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
