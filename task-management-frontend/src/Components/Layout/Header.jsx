import "../../styles/layout.css";

export default function Header() {
  return (
    <div className="header">
      <div>
        <h2>Task Management</h2>
        <p style={{ fontSize: "12px", color: "#6b7280" }}>
          Last Update: 31 August 2024
        </p>
      </div>
      <div>
        <button>LOGOUT</button>
      </div>
    </div>
  );
}
