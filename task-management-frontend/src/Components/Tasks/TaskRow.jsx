export default function TaskRow({ task }) {
  return (
    <tr>
      <td>{task.name}</td>
      <td>{task.assignedTo}</td>
      <td>
        <span className={`status ${task.status}`}>{task.status}</span>
      </td>
      <td>{task.priority}</td>
      <td>{task.dueDate}</td>
      <td>{task.hours}</td>
      <td>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${task.progress}%` }}
          ></div>
        </div>
      </td>
    </tr>
  );
}
