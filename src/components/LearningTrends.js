// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2'; // Install with: npm install react-chartjs-2 chart.js
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// function LearningTrends() {
//   const [chartData, setChartData] = useState({
//     labels: ['Math', 'Biology', 'History'],
//     datasets: [{
//       label: 'Time Spent (hours)',
//       data: [10, 5, 3],
//       backgroundColor: 'rgba(75, 192, 192, 0.2)',
//       borderColor: 'rgba(75, 192, 192, 1)',
//       borderWidth: 1
//     }]
//   });

//   return (
//     <div>
//       <h2>My Learning Trends</h2>
//       <Bar data={chartData} />
//       <select onChange={(e) => alert(`Showing trends for ${e.target.value}`)}>
//         <option value="week">Last Week</option>
//         <option value="month">Last Month</option>
//         <option value="all">All Time</option>
//       </select>
//       <button onClick={() => alert('Download report!')} className={"nav-button"} style={{marginTop:'40px'}}>Download Report</button>
//     </div>
//   );
// }

// export default LearningTrends;
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function LearningTrends() {
  const [chartData, setChartData] = useState({
    labels: ['Math', 'Biology', 'History'],
    datasets: [{
      label: 'Time Spent (hours)',
      data: [10, 5, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ width: '900px', maxWidth: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
        <h2 style={{ marginBottom: '40px', marginTop: '40px', textAlign: 'center' }}>My Learning Trends</h2>
        <Bar data={chartData} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', width: '300px' }}>
          <select
            onChange={(e) => alert(`Showing trends for ${e.target.value}`)}
            style={{ fontSize: '16px', padding: '10px', boxSizing: 'border-box', width: '100%', marginBottom: '10px' }} 
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="all">All Time</option>
          </select>
          <button
            onClick={() => alert('Download report!')}
            className="nav-button"
            style={{ fontSize: '16px', padding: '10px 16px', boxSizing: 'border-box', width: '100%' }} 
          >
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default LearningTrends;