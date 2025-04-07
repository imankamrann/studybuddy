import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AssignmentTracker from './components/AssignmentTracker';
import StudyScheduler from './components/StudyScheduler';
import StudyRecommendations from './components/StudyRecommendations';
import LearningTrends from './components/LearningTrends';
import TutorDashboard from './components/TutorDashboard';
import Login from './components/Login';
import Navbar from './components/Navbar';
import CreateTask from './components/CreateTask';
import ViewTasks from './components/ViewTasks';
import StudentDashboard from './components/StudentDashboard'; 
import MessagePage from './components/MessagePage';
import './App.css';
import Signup from './components/Signup';
import Home from './components/Home.js';

function App() {
  return (
    <BrowserRouter>
           <Navbar />
      <div className="App">
   
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
          <Route path="/assignments" element={<AssignmentTracker />} />
          <Route path="/schedule" element={<StudyScheduler />} />
          <Route path="/recommendations" element={<StudyRecommendations />} />
          <Route path="/trends" element={<LearningTrends />} />
          <Route path="/tutor" element={<TutorDashboard />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/view-tasks" element={<ViewTasks />} />  {/*  Default to ViewTasks */}
          <Route path="/view-tasks" element={<ViewTasks />} /> {/* New Route */}
          <Route path="/" element={<Login />} /> {/* Removed `exact` - not needed in v6 */}
          <Route path="/student" element={<StudentDashboard />}/>
          <Route path="/messages" element={<MessagePage />}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;