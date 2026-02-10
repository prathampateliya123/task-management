import Header from "../Components/Layout/Header";
import TaskTable from "../components/tasks/TaskTable";

export default function Tasks() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Header />
        <TaskTable />
      </div>
    </div>
  );
}
