import { useState } from "react";
import "../styles/calendar.css";

/* SAME TYPE OF DATA AS MyTasks */
const allTasks = [
  {
    task: "Dashboard UI",
    project: "Task Manager",
    status: "Completed",
    dueDate: "2026-09-10",
  },
  {
    task: "API Planning",
    project: "Task Manager",
    status: "In Progress",
    dueDate: "2026-09-12",
  },
  {
    task: "Testing",
    project: "Website Redesign",
    status: "Not Started",
    dueDate: "2026-09-12",
  },
];

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState("");

  const dateTasks = allTasks.filter((t) => t.dueDate === selectedDate);

  return (
    <div className="calendar-page">
      <h2>Task Calendar</h2>

      {/* DATE PICKER */}
      <div className="calendar-box">
        <label>Select Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* DATE WISE TASKS */}
      <div className="calendar-tasks">
        <h3>
          {selectedDate
            ? `Tasks on ${selectedDate}`
            : "Select a date to view tasks"}
        </h3>

        {selectedDate && dateTasks.length === 0 && (
          <p className="no-task">No tasks on this date</p>
        )}

        {dateTasks.map((t, i) => (
          <div key={i} className="calendar-task-card">
            <h4>{t.task}</h4>
            <p>{t.project}</p>
            <span className={`badge ${t.status.replace(" ", "")}`}>
              {t.status}
            </span>
          </div>
        ))}
      </div>

      {/* ALL TASKS LIST */}
      <div className="calendar-all">
        <h3>All Tasks</h3>

        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Project</th>
              <th>Status</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {allTasks.map((t, i) => (
              <tr key={i}>
                <td>{t.task}</td>
                <td>{t.project}</td>
                <td>{t.status}</td>
                <td>{t.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
