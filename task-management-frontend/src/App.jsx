import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Layout/Sidebar";
import Tasks from "./Pages/Tasks";
import Dashboard from "./Pages/Dashboard";
import Projects from "./Pages/Projects";
import Calendar from "./Pages/Calendar";
import SubmitTask from "./Pages/SubmitTask";
import Settings from "./Pages/Settings";




export default function App() {
  return (
      <div className="layout">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/submit-task" element={<SubmitTask />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
}
