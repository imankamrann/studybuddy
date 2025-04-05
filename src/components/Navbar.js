// import { color } from 'chart.js/helpers';
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   // Check if user is logged in (simplified, using localStorage as before)
//   const isLoggedIn = localStorage.getItem('role'); // Returns 'student', 'tutor', or null

//   return (
//     <nav>
//       <div className="nav-container">
//         <div className="logo">
//           <Link to="/home">
//             <img src="/studyBuddyLogo.svg" alt="Study Buddy Logo" className="logo-img" />
//             Study Buddy
//           </Link>
//         </div>

//         {/* Navigation links or sign options */}
//         <ul>
//           {!isLoggedIn ? (
//             // Show Sign In/Sign Up if not logged in
//             <>
//               <li><Link to="/signup">Sign up</Link></li>
//               <li id="login-btn" ><Link to="/login">Log in</Link></li>
//             </>
//           ) : (
//             // Show app features if logged in
//             <>
//               <li><Link to="/assignments">Assignments</Link></li>
//               <li><Link to="/schedule">Schedule</Link></li>
//               <li><Link to="/recommendations">Study Tips</Link></li>
//               <li><Link to="/trends">Trends</Link></li>
//               <li><Link to="/create-task">Create Task</Link></li> {/* New Link for Create Task */}
//               <li><Link to="/view-tasks">View Tasks</Link></li> {/* New Link for View Tasks */}
//               {localStorage.getItem('role') === 'tutor' && (
//                 <li><Link to="/tutor">Tutor Dashboard</Link></li>
//               )}
//               {/* Logout option */}
           
//             <li><Link to="/student">Student Dashboard</Link></li> 
//                 <li><Link to="/messages">Messages</Link></li> 
//             <li id="login-btn"><Link to="/login" onClick={() => localStorage.removeItem('role')}>Logout</Link></li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // Check if user is logged in (simplified, using localStorage)
  const isLoggedIn = localStorage.getItem('role');

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link to="/home">
            <img src="/studyBuddyLogo.svg" alt="Study Buddy Logo" className="logo-img" />
            Study Buddy
          </Link>
        </div>

        {/* Navigation links or sign options */}
        <ul>
          {!isLoggedIn ? (
            // Show Sign In/Sign Up if not logged in
            <>
              <li><Link to="/signup">Sign up</Link></li>
              <li className="nav-button"><Link to="/login">Log in</Link></li>
            </>
          ) : (
            // Show app features if logged in
            <>
              <li><Link to="/assignments">Assignments</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/recommendations">Study Tips</Link></li>
              <li><Link to="/trends">Trends</Link></li>
              <li><Link to="/create-task">Create Task</Link></li>
              <li><Link to="/view-tasks">View Tasks</Link></li>
              {localStorage.getItem('role') === 'tutor' && (
                <li><Link to="/tutor">Tutor Dashboard</Link></li>
              )}
              <li><Link to="/student">Student Dashboard</Link></li>
              <li><Link to="/messages">Messages</Link></li>
              <li className="nav-button"><Link to="/login" onClick={() => localStorage.removeItem('role')}>Logout</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;