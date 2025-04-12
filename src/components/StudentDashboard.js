import React, { useState } from 'react';

const StudentDashboard = () => {
    // State for managing assignments
    const [assignments, setAssignments] = useState([
        { title: 'Assignment 1', dueDate: '10/25', status: 'Not Started' },
        { title: 'Assignment 2', dueDate: '10/30', status: 'In Progress' },
    ]);

    // State for managing study groups
    const [studyGroups, setStudyGroups] = useState([
        { name: 'Group A', members: ['Alice', 'Bob'] },
        { name: 'Group B', members: ['Charlie', 'Dave'] },
    ]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Student Dashboard</h2>

            {/* Upcoming Assignments */}
            <div style={{ marginBottom: '20px' }}>
                <h3>Upcoming Assignments</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {assignments.map((assignment, index) => (
                        <li key={index} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                            {assignment.title} - Due: {assignment.dueDate} - Status: {assignment.status}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Study Groups */}
            <div style={{ marginBottom: '20px' }}>
                <h3>Study Groups</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {studyGroups.map((group, index) => (
                        <li key={index} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                            <strong>{group.name}</strong> - Members: {group.members.join(', ')}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Quick Actions */}
            <div style={{ marginBottom: '20px'}}>
                <h3>Quick Actions</h3>
           <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <button
                    style={{
                        cursor: 'pointer',
                    }}
                    className='nav-button'
                >
                    Send Message
                </button>
                <button
                  style={{
                        cursor: 'pointer',
                    }}
                     className='nav-button'
                >
                    Create Study Group
                </button>
                <button
               style={{
                        cursor: 'pointer',
                    }}
                     className='nav-button'
                >
                    Share Resources
                </button>
            </div>
            </div> 
        </div> // div for return
    );
};

export default StudentDashboard;