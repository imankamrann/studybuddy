// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CreateTask = () => {
//   const [task, setTask] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//     priority: "Medium",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTask((prevTask) => ({
//       ...prevTask,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Task Created:", task);
//     // You can add a POST request here to save the task to your backend
//     navigate("/tasks"); // Redirect to the tasks list page after creating a task
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <h2 className="text-2xl font-bold mb-4">Create a New Task</h2>
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
//       >
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Task Title
//           </label>
//           <input
//             type="text"
//             name="title"
//             value={task.title}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Description
//           </label>
//           <textarea
//             name="description"
//             value={task.description}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             rows="4"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Due Date
//           </label>
//           <input
//             type="date"
//             name="dueDate"
//             value={task.dueDate}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Priority
//           </label>
//           <select
//             name="priority"
//             value={task.priority}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           >
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="High">High</option>
//           </select>
//         </div>

//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Create Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;

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
    console.log("Task Created:", task);
    // You can add a POST request here to save the task to your backend
    navigate("/tasks"); // Redirect to the tasks list page after creating a task
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        // justifyContent: "center",
      }}
    >
      <div style={{ width: "500px", maxWidth: "90%" }}>
        <h2 style={{ marginBottom: "40px", marginTop: "40px", textAlign: "center" }}>
          Create a New Task
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Task Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            style={{ fontSize: "16px", padding: "8px", width: "100%", boxSizing: "border-box" }}
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            required
            style={{ fontSize: "16px", padding: "8px", width: "100%", boxSizing: "border-box" }}
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            style={{ fontSize: "16px", padding: "8px", width: "100%", boxSizing: "border-box" }}
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{ fontSize: "16px", padding: "8px", width: "100%", boxSizing: "border-box" }}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <div className="flex items-center justify-center">
            <button
              type="submit"
             className="nav-button"
            style={{ fontSize: '16px', padding: '10px 16px', width: '100%', boxSizing: 'border-box' }}
            >
              Create Task
            </button>

            
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;