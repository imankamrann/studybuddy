// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const ViewTasks = () => {
//   // Sample task data (you can replace this with API data later)
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       title: "Math Homework",
//       description: "Complete Chapter 5 exercises",
//       dueDate: "2025-03-10",
//       priority: "High",
//       tags: ["#Math", "#Homework"],
//     },
//     {
//       id: 2,
//       title: "Science Project",
//       description: "Prepare presentation slides",
//       dueDate: "2025-03-12",
//       priority: "Medium",
//       tags: ["#Science", "#Project"],
//     },
//     {
//       id: 3,
//       title: "History Essay",
//       description: "Draft introduction and main points",
//       dueDate: "2025-03-15",
//       priority: "Low",
//       tags: ["#History", "#Essay"],
//     },
//   ]);

//   // Optional: Fetch tasks from an API if needed
//   useEffect(() => {
//     // Example API call
//     // fetch("/api/tasks")
//     //   .then((response) => response.json())
//     //   .then((data) => setTasks(data));
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
//       <table className="min-w-full bg-white shadow-md rounded">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Title</th>
//             <th className="py-2 px-4 border-b">Description</th>
//             <th className="py-2 px-4 border-b">Due Date</th>
//             <th className="py-2 px-4 border-b">Priority</th>
//             <th className="py-2 px-4 border-b">Tags</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task) => (
//             <tr key={task.id}>
//               <td className="py-2 px-4 border-b">{task.title}</td>
//               <td className="py-2 px-4 border-b">{task.description}</td>
//               <td className="py-2 px-4 border-b">{task.dueDate}</td>
//               <td className="py-2 px-4 border-b">
//                 <span
//                   className={`px-2 py-1 rounded ${
//                     task.priority === "High"
//                       ? "bg-red-500 text-white"
//                       : task.priority === "Medium"
//                       ? "bg-yellow-500 text-white"
//                       : "bg-green-500 text-white"
//                   }`}
//                 >
//                   {task.priority}
//                 </span>
//               </td>
//               <td className="py-2 px-4 border-b">{task.tags}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Link
//         to="/create-task"
//         className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         Create New Task
//       </Link>
//     </div>
//   );
// };

// export default ViewTasks;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ViewTasks = () => {
  // Sample task data (you can replace this with API data later)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Math Homework",
      description: "Complete Chapter 5 exercises",
      dueDate: "2025-03-10",
      priority: "High",
      tags: ["#Math", "#Homework"],
    },
    {
      id: 2,
      title: "Science Project",
      description: "Prepare presentation slides",
      dueDate: "2025-03-12",
      priority: "Medium",
      tags: ["#Science", "#Project"],
    },
    {
      id: 3,
      title: "History Essay",
      description: "Draft introduction and main points",
      dueDate: "2025-03-15",
      priority: "Low",
      tags: ["#History", "#Essay"],
    },
  ]);

  // Optional: Fetch tasks from an API if needed
  useEffect(() => {
    // Example API call
    // fetch("/api/tasks")
    //   .then((response) => response.json())
    //   .then((data) => setTasks(data));
  }, []);

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
          Your Tasks
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd", textAlign: "left", fontSize: "16px" }}>
                Title
              </th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd", textAlign: "left", fontSize: "16px" }}>
                Description
              </th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd", textAlign: "left", fontSize: "16px" }}>
                Due Date
              </th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd", textAlign: "left", fontSize: "16px" }}>
                Priority
              </th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd", textAlign: "left", fontSize: "16px" }}>
                Tags
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd", fontSize: "16px" }}>
                  {task.title}
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd", fontSize: "16px" }}>
                  {task.description}
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd", fontSize: "16px" }}>
                  {task.dueDate}
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd", fontSize: "16px" }}>
                  <span
                    className={`px-2 py-1 rounded ${
                      task.priority === "High"
                        ? "bg-red-500 text-white"
                        : task.priority === "Medium"
                        ? "bg-yellow-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {task.priority}
                  </span>
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd", fontSize: "16px" }}>
                  {task.tags}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-center mt-4">
          <Link
            to="/create-task"
             className="nav-button"
            style={{ fontSize: '16px', padding: '10px 16px', width: '100%', boxSizing: 'border-box', marginTop: '40px' }}
          >
            Create New Task
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewTasks;