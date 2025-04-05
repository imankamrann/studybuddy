// import React, { useState } from 'react';

// function StudyScheduler() {
//   const [session, setSession] = useState({ subject: '', startTime: '', endTime: '', focus: false });
//   const [sessions, setSessions] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSessions([...sessions, session]);
//     setSession({ subject: '', startTime: '', endTime: '', focus: false });
//     alert('Study session saved!');
//   };

//   return (
//     <div>
//       <h2>Track Study Time</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="Subject" 
//           value={session.subject} 
//           onChange={(e) => setSession({ ...session, subject: e.target.value })} 
//         />
//         <input 
//           type="time" 
//           value={session.startTime} 
//           onChange={(e) => setSession({ ...session, startTime: e.target.value })} 
//         />
//         <input 
//           type="time" 
//           value={session.endTime} 
//           onChange={(e) => setSession({ ...session, endTime: e.target.value })} 
//         />
//         <label>
//           Focused?
//           <input 
//             type="checkbox" 
//             checked={session.focus} 
//             onChange={(e) => setSession({ ...session, focus: e.target.checked })} 
//           />
//         </label>
//         <button type="submit">Save Session</button>
//       </form>
//       <h3>My Study Schedule</h3>
//       <ul>
//         {sessions.map((item, index) => (
//           <li key={index}>
//             {item.subject} - {item.startTime} to {item.endTime} - Focused: {item.focus ? 'Yes' : 'No'}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default StudyScheduler;

import React, { useState } from 'react';

function StudyScheduler() {
  const [session, setSession] = useState({
    subject: '',
    startTime: '',
    endTime: '',
    focus: false,
  });
  const [sessions, setSessions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSessions([...sessions, session]);
    setSession({ subject: '', startTime: '', endTime: '', focus: false });
    alert('Study session saved!');
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
          Track Study Time
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <input
            type="text"
            placeholder="Subject"
            value={session.subject}
            onChange={(e) => setSession({ ...session, subject: e.target.value })}
            style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <input
            type="time"
            value={session.startTime}
            onChange={(e) => setSession({ ...session, startTime: e.target.value })}
            style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <input
            type="time"
            value={session.endTime}
            onChange={(e) => setSession({ ...session, endTime: e.target.value })}
            style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
            Focused?
            <input
              type="checkbox"
              checked={session.focus}
              onChange={(e) => setSession({ ...session, focus: e.target.checked })}
              style={{ marginLeft: '8px' }}
            />
          </label>
          <button
            type="submit"
            className="nav-button"
            style={{ fontSize: '16px', padding: '10px 16px', width: '100%', boxSizing: 'border-box' }}
          >
            Save Session
          </button>
        </form>
        <h3 style={{ marginTop: '40px', textAlign: 'center' }}>My Study Schedule</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Subject</th>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Start Time</th>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>End Time</th>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Focused</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.subject}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.startTime}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.endTime}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.focus ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudyScheduler;