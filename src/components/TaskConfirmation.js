import React from "react";
import { useNavigate } from "react-router-dom";

const TaskConfirmation = () => {
  const navigate = useNavigate();

  const handleViewTasks = () => {
    navigate("/view-tasks");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f6",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#10b981" }}>
          ✅ Task Added Successfully!
        </h2>
        <p style={{ marginBottom: "30px", fontSize: "16px", color: "#374151" }}>
          Your task has been saved. You can now view all your tasks.
        </p>
        <button
          onClick={handleViewTasks}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.2s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#4f46e5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#6366f1")}
        >
          View All Tasks
        </button>
      </div>
    </div>
  );
};

export default TaskConfirmation;
