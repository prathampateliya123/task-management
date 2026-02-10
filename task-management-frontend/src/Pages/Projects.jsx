import { useState } from "react";
import "./projects.css";

const projectsData = [
  {
    id: 1,
    name: "Task Management System",
    description: "Internal company task tracking system",
    status: "In Progress",
    progress: 65,
    dueDate: "10 Sep 2024",
    tasks: [
      { id: 1, title: "Dashboard UI", status: "Completed" },
      { id: 2, title: "API Integration", status: "In Progress" },
      { id: 3, title: "Testing", status: "Not Started" },
    ],
  },
  {
    id: 2,
    name: "Website Redesign",
    description: "Marketing website redesign project",
    status: "Not Started",
    progress: 0,
    dueDate: "20 Sep 2024",
    tasks: [
      { id: 1, title: "Wireframes", status: "Not Started" },
      { id: 2, title: "Landing Page UI", status: "Not Started" },
    ],
  },
  {
    id: 3,
    name: "Task Management System",
    description: "Internal company task tracking system",
    status: "In Progress",
    progress: 65,
    dueDate: "10 Sep 2024",
    tasks: [
      { id: 1, title: "Dashboard UI", status: "Completed" },
      { id: 2, title: "API Integration", status: "In Progress" },
      { id: 3, title: "Testing", status: "Not Started" },
    ],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <div className="projects-container">
      {/* LEFT - PROJECT LIST */}
      <div className="projects-list">
        <h2>Projects</h2>

        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`project-card ${
              activeProject.id === project.id ? "active" : ""
            }`}
            onClick={() => setActiveProject(project)}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <div className="project-meta">
              <span className={`status ${project.status.replace(" ", "")}`}>
                {project.status}
              </span>
              <span className="due">📅 {project.dueDate}</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            <small>{project.progress}% Completed</small>
          </div>
        ))}
      </div>

      {/* RIGHT - TASKS */}
      <div className="project-tasks">
        <h2>{activeProject.name}</h2>

        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activeProject.tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>
                  <span
                    className={`task-status ${task.status.replace(" ", "")}`}
                  >
                    {task.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
