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
    <div>
      <h2>Tutor Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Task Title" 
          value={task.title} 
          onChange={(e) => setTask({ ...task, title: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Student ID" 
          value={task.studentId} 
          onChange={(e) => setTask({ ...task, studentId: e.target.value })} 
        />
        <textarea 
          placeholder="Feedback/Resources" 
          value={task.feedback} 
          onChange={(e) => setTask({ ...task, feedback: e.target.value })} 
        />
        <button type="submit">Assign Task</button>
      </form>
      <h3>Assigned Tasks</h3>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item.title} for Student {item.studentId} - Feedback: {item.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TutorDashboard;