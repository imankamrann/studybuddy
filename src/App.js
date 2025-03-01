// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AssignmentTracker from './components/AssignmentTracker';
// import StudyScheduler from './components/StudyScheduler';
// import StudyRecommendations from './components/StudyRecommendations';
// import LearningTrends from './components/LearningTrends';
// import TutorDashboard from './components/TutorDashboard';
// import Login from './components/Login';
// import Navbar from './components/Navbar';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Switch>
//           <Route path="/login" component={Login} />
//           <Route path="/assignments" component={AssignmentTracker} />
//           <Route path="/schedule" component={StudyScheduler} />
//           <Route path="/recommendations" component={StudyRecommendations} />
//           <Route path="/trends" component={LearningTrends} />
//           <Route path="/tutor" component={TutorDashboard} />
//           <Route path="/" exact component={Login} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AssignmentTracker from './components/AssignmentTracker';
import StudyScheduler from './components/StudyScheduler';
import StudyRecommendations from './components/StudyRecommendations';
import LearningTrends from './components/LearningTrends';
import TutorDashboard from './components/TutorDashboard';
import Login from './components/Login';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/assignments" element={<AssignmentTracker />} />
          <Route path="/schedule" element={<StudyScheduler />} />
          <Route path="/recommendations" element={<StudyRecommendations />} />
          <Route path="/trends" element={<LearningTrends />} />
          <Route path="/tutor" element={<TutorDashboard />} />
          <Route path="/" element={<Login />} /> {/* Removed `exact` - not needed in v6 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;