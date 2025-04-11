import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage (for demo purposes)
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = [...existingTasks, task];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Reset form
    setTask({
      title: "",
      description: "",
      dueDate: "",
      priority: "Medium",
    });

    // Redirect
    navigate("/task-confirmation");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h2
          style={{
            marginBottom: "24px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
          }}
        >
          📝 Create a New Task
        </h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <label htmlFor="title" style={labelStyle}>Task Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label htmlFor="description" style={labelStyle}>Description</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            rows="4"
            required
            style={{ ...inputStyle, resize: "vertical" }}
          />

          <label htmlFor="dueDate" style={labelStyle}>Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label htmlFor="priority" style={labelStyle}>Priority</label>
          <select
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#7c3aed")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#8b5cf6")}
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

// 🎨 Styles
const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  boxSizing: "border-box",
  width: "100%",
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#374151",
};

const buttonStyle = {
  backgroundColor: "#8b5cf6",
  color: "#fff",
  padding: "12px 16px",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
};

export default CreateTask;
