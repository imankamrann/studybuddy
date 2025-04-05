// import React, { useState, useEffect } from 'react';

// function StudyRecommendations() {
//   const [recommendations, setRecommendations] = useState([]);

//   useEffect(() => {
//     // Simulate analyzing study habits (replace with real data from Firebase/ASP.net)
//     const tips = [
//       'Try 25-minute study sessions with 5-minute breaks (Pomodoro).',
//       'Use visual notes for better retention.',
//       'Study math in the morning when you’re most focused.'
//     ];
//     setRecommendations(tips);
//   }, []);

//   return (
//     <div>
//       <h2>Your Study Tips</h2>
//       <ul>
//         {recommendations.map((tip, index) => (
//           <li key={index}>{tip}</li>
//         ))}
//       </ul>
//       <button onClick={() => alert('Learn more about these tips!')}>Learn More</button>
//     </div>
//   );
// }

// export default StudyRecommendations;

import React, { useState, useEffect } from 'react';

function StudyRecommendations() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Simulate analyzing study habits (replace with real data from Firebase/ASP.net)
    const tips = [
      'Try 25-minute study sessions with 5-minute breaks (Pomodoro).',
      'Use visual notes for better retention.',
      'Study math in the morning when you’re most focused.',
    ];
    setRecommendations(tips);
  }, []);

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
          Your Study Tips
        </h2>
        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
          {recommendations.map((tip, index) => (
            <li key={index} style={{ marginBottom: '10px', fontSize: '16px', textAlign: 'left'  }}>
              {tip}
            </li>
          ))}
        </ul>
        <button
          onClick={() => alert('Learn more about these tips!')}
          className="nav-button"
          style={{ fontSize: '16px', padding: '10px 16px', width: '100%', boxSizing: 'border-box', marginTop: '20px' }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default StudyRecommendations;