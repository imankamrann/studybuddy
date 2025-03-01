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

  return (
    <div>
      <h2>Add Assignment</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Assignment Title" 
          value={assignment.title} 
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} 
        />
        <input 
          type="date" 
          value={assignment.dueDate} 
          onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} 
        />
        <select 
          value={assignment.status} 
          onChange={(e) => setAssignment({ ...assignment, status: e.target.value })}
        >
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button type="submit">Save</button>
      </form>
      <h3>My Assignments</h3>
      <ul>
        {assignments.map((item, index) => (
          <li key={index}>
            {item.title} - Due: {item.dueDate} - Status: {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssignmentTracker;