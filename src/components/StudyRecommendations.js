import React, { useState, useEffect } from 'react';

function StudyRecommendations() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Simulate analyzing study habits (replace with real data from Firebase/ASP.net)
    const tips = [
      'Try 25-minute study sessions with 5-minute breaks (Pomodoro).',
      'Use visual notes for better retention.',
      'Study math in the morning when you’re most focused.'
    ];
    setRecommendations(tips);
  }, []);

  return (
    <div>
      <h2>Your Study Tips</h2>
      <ul>
        {recommendations.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
      <button onClick={() => alert('Learn more about these tips!')}>Learn More</button>
    </div>
  );
}

export default StudyRecommendations;