// import React, { useState } from 'react';

// function TutorDashboard() {
//   const [task, setTask] = useState({ title: '', studentId: '', feedback: '' });
//   const [tasks, setTasks] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTasks([...tasks, task]);
//     setTask({ title: '', studentId: '', feedback: '' });
//     alert('Task assigned and feedback saved!');
//   };

//   return (
//     <div>
//       <h2>Tutor Dashboard</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="Task Title" 
//           value={task.title} 
//           onChange={(e) => setTask({ ...task, title: e.target.value })} 
//         />
//         <input 
//           type="text" 
//           placeholder="Student ID" 
//           value={task.studentId} 
//           onChange={(e) => setTask({ ...task, studentId: e.target.value })} 
//         />
//         <textarea 
//           placeholder="Feedback/Resources" 
//           value={task.feedback} 
//           onChange={(e) => setTask({ ...task, feedback: e.target.value })} 
//         />
//         <button type="submit">Assign Task</button>
//       </form>
//       <h3>Assigned Tasks</h3>
//       <ul>
//         {tasks.map((item, index) => (
//           <li key={index}>
//             {item.title} for Student {item.studentId} - Feedback: {item.feedback}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TutorDashboard;

import React, { useState } from 'react';

function TutorDashboard() {
  const [task, setTask] = useState({ title: '', studentId: '', feedback: '' });
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ title: '', studentId: '', feedback: '' });
    alert('Task assigned and feedback saved!');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        // justifyContent: 'center',
      }}
    >
      <div style={{ width: '500px', maxWidth: '90%' }}>
        <h2 style={{ marginBottom: '40px', marginTop: '40px', textAlign: 'center' }}>
          Tutor Dashboard
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <input
            type="text"
            placeholder="Task Title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <input
            type="text"
            placeholder="Student ID"
            value={task.studentId}
            onChange={(e) => setTask({ ...task, studentId: e.target.value })}
            style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <textarea
            placeholder="Feedback/Resources"
            value={task.feedback}
            onChange={(e) => setTask({ ...task, feedback: e.target.value })}
            style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <button
            type="submit"
            className="nav-button"
            style={{ fontSize: '16px', padding: '10px 16px', width: '100%', boxSizing: 'border-box' }}
          >
            Assign Task
          </button>
        </form>
        <h3 style={{ marginTop: '40px', textAlign: 'center' }}>Assigned Tasks</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Student ID</th>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Feedback/Resources</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.title}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.studentId}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TutorDashboard;