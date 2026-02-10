import "./sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">LOGO</div>

      <nav className="sidebar-menu">
        <NavLink to="/dashboard" end className="menu-item">
          Dashboard
        </NavLink>

        <NavLink to="/projects" className="menu-item">
          Projects
        </NavLink>

        <NavLink to="/tasks" className="menu-item">
          My Tasks
        </NavLink>

        <NavLink to="/calendar" className="menu-item">
          Calendar
        </NavLink>

        <NavLink to="/submit-task" className="menu-item">
          Submit Task
        </NavLink>

        <NavLink to="/settings" className="menu-item">
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
