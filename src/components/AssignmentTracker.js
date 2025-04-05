import React, { useState } from 'react';

function AssignmentTracker() {
  const [assignment, setAssignment] = useState({ title: '', dueDate: '', status: 'not started' });
  const [assignments, setAssignments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAssignments([...assignments, assignment]);
    setAssignment({ title: '', dueDate: '', status: 'not started' });
    // Simulate Firebase save (replace with real Firebase logic)
    alert('Assignment saved!');
  };

  // return (
  
  //      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      
  //     <div style={{ display: 'flex', alignItems: 'flex-start'}}>
  //   <h2 style={{ marginBottom: '40px', marginTop: '40px' }}>Add Assignment</h2>
  //       </div>
        

  //     {/* <h2>Add Assignment</h2> */}
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         placeholder="Assignment Title"
  //         value={assignment.title}
  //         onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
  //       />
  //       <input
  //         type="date"
  //         value={assignment.dueDate}
  //         onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
  //       />
  //       <select
  //         value={assignment.status}
  //         onChange={(e) => setAssignment({ ...assignment, status: e.target.value })}
  //       >
  //         <option value="not started">Not Started</option>
  //         <option value="in progress">In Progress</option>
  //         <option value="done">Done</option>
  //       </select>
  //       <button type="submit">Save</button>
  //     </form>
  //     <h3>My Assignments</h3>
  //     <ul>
  //       {assignments.map((item, index) => (
  //         <li key={index}>
  //           {item.title} - Due: {item.dueDate} - Status: {item.status}
  //         </li>
  //       ))}
  //       </ul>
  //       </div>
  
  // );
  
  //new

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        // justifyContent: 'center',
        // Added: Vertical centering
      }}
    >
       <div style={{ width: '500px', maxWidth: '90%' }}> 
        <h2 style={{ marginBottom: '40px', marginTop: '40px', textAlign: 'center' }}>
          Add Assignment
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <input
            type="text"
            placeholder="Assignment Title"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
            style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <input
            type="date"
            value={assignment.dueDate}
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
            style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <select
            value={assignment.status}
            onChange={(e) =>
              setAssignment({ ...assignment, status: e.target.value })
            }
            style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          >
            <option value="not started">Not Started</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button
            type="submit"
            className="nav-button"
            style={{ fontSize: '16px', padding: '10px 16px', width: '100%', boxSizing: 'border-box' }}
          >
            Save
          </button>
        </form>
        <h3 style={{ marginTop: '40px', textAlign: 'center' }}>My Assignments</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Due Date</th>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.title}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.dueDate}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssignmentTracker;