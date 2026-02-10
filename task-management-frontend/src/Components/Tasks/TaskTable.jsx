import { useState } from "react";
import "../../styles/tasks.css";
import TaskRow from "./TaskRow";

const tasks = [
  {
    id: 1,
    name: "Design Login Page",
    assignedTo: "Design Team",
    status: "inProgress",
    priority: "High",
    dueDate: "01/09/2024",
    hours: "6 hrs",
    progress: 60,
  },
  {
    id: 2,
    name: "API Integration",
    assignedTo: "Backend Team",
    status: "notStarted",
    priority: "Medium",
    dueDate: "05/09/2024",
    hours: "5 hrs",
    progress: 20,
  },
  {
    id: 3,
    name: "Landing Page Developing",
    assignedTo: "Frontend Team",
    status: "completed",
    priority: "Medium",
    dueDate: "06/09/2024",
    hours: "3 hrs",
    progress: 100,
  },
];

export default function TaskTable() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  const filteredTasks = tasks.filter((task) => {
    const statusMatch = activeFilter === "all" || task.status === activeFilter;

    const searchMatch =
      task.name.toLowerCase().includes(searchText.toLowerCase()) ||
      task.assignedTo.toLowerCase().includes(searchText.toLowerCase());

    return statusMatch && searchMatch;
  });
  return (
    <div className="tasks-container">
      <div className="task-filters">
        <div>
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>

          <button
            className={`filter-btn ${activeFilter === "completed" ? "active" : ""}`}
            onClick={() => setActiveFilter("completed")}
          >
            Completed
          </button>

          <button
            className={`filter-btn ${activeFilter === "inprogress" ? "active" : ""}`}
            onClick={() => setActiveFilter("inProgress")}
          >
            In Progress
          </button>

          <button
            className={`filter-btn ${activeFilter === "notstarted" ? "active" : ""}`}
            onClick={() => setActiveFilter("notStarted")}
          >
            Not Started
          </button>
        </div>

        <input
          type="text"
          placeholder="Search Tasks"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Estimated</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
