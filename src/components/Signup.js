// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Signup() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [role, setRole] = useState('student');
//   const [quizInterests, setQuizInterests] = useState([]);
//   const [otherInterest, setOtherInterest] = useState('');
//   const availableInterests = ['Math', 'Science', 'History', 'Literature', 'Programming'];

//   const handleInterestChange = (interest) => {
//     if (quizInterests.includes(interest)) {
//       setQuizInterests(quizInterests.filter((item) => item !== interest));
//     } else {
//       setQuizInterests([...quizInterests, interest]);
//     }
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if (!firstName || !lastName || !email || !password) {
//       alert('Please fill in all required fields.');
//       return;
//     }
//     if (password !== confirmPassword) {
//       alert('Passwords do not match.');
//       return;
//     }
//     if (password.length < 6) {
//       alert('Password must be at least 6 characters long.');
//       return;
//     }

//     const signupData = {
//       firstName,
//       lastName,
//       email,
//       password,
//       role,
//       quizInterests: [...quizInterests, ...(otherInterest ? [otherInterest] : [])],
//     };

//     // **Simulating Backend - Storing user data in localStorage (NOT SECURE)**
//     const existingUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
//     const isEmailTaken = existingUsers.some(user => user.email === email);

//     if (isEmailTaken) {
//       alert('This email address is already registered.');
//       return;
//     }

//     existingUsers.push(signupData);
//     localStorage.setItem('users', JSON.stringify(existingUsers));
//     localStorage.setItem('currentUserEmail', email); // Simulate login
//     localStorage.setItem('currentUserRole', role);
//     localStorage.setItem('currentUserInterests', JSON.stringify(signupData.quizInterests));

//     alert('Sign up successful! User data stored in browser (localStorage - NOT SECURE).');
//     window.location.href = role === 'student' ? '/assignments' : '/tutor'; // Redirect based on role
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         minHeight: '100vh',
//         justifyContent: 'center',
//       }}
//     >
//       <div style={{ width: '500px', maxWidth: '90%' }}>
//         <h2 style={{ marginBottom: '40px', marginTop: '40px', textAlign: 'center' }}>
//           Sign Up for Study Buddy
//         </h2>
//         <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//           <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
//             <input
//               type="text"
//               placeholder="First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               required
//               style={{ fontSize: '16px', padding: '8px', width: '50%', boxSizing: 'border-box' }}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               required
//               style={{ fontSize: '16px', padding: '8px', width: '50%', boxSizing: 'border-box' }}
//             />
//           </div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
//           />
//           <label style={{ fontSize: '16px' }}>
//             Role:
//             <select value={role} onChange={(e) => setRole(e.target.value)} style={{ fontSize: '16px', padding: '8px', marginLeft: '8px', boxSizing: 'border-box' }}>
//               <option value="student">Student</option>
//               <option value="tutor">Tutor</option>
//             </select>
//           </label>

//           <h3 style={{ marginTop: '20px', fontSize: '18px', textAlign: 'center' }}>Personalize Your Quiz Interests:</h3>
//           <p style={{ textAlign: 'center', fontSize: '16px' }}>Select topics you'd like to see in your personalized quizzes:</p>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
//             {availableInterests.map((interest) => (
//               <label key={interest} style={{ fontSize: '16px', display: 'flex', alignItems: 'center' }}>
//                 <input
//                   type="checkbox"
//                   value={interest}
//                   checked={quizInterests.includes(interest)}
//                   onChange={() => handleInterestChange(interest)}
//                   style={{ marginRight: '8px' }}
//                 />
//                 {interest}
//               </label>
//             ))}
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
//             <label htmlFor="otherInterest" style={{ fontSize: '16px' }}>
//               Other Interest:
//             </label>
//             <input
//               type="text"
//               id="otherInterest"
//               placeholder="Enter another interest"
//               value={otherInterest}
//               onChange={(e) => setOtherInterest(e.target.value)}
//               style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
//             />
//           </div>

//           <button type="submit" className="nav-button" style={{ fontSize: '16px', padding: '10px 16px', width: '100%', boxSizing: 'border-box', marginTop: '20px' }}>
//             Sign Up
//           </button>
//         </form>
//         <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '16px' }}>
//           Already have an account? <Link to="/login">Log In</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const [quizInterests, setQuizInterests] = useState([]);
  const [otherInterest, setOtherInterest] = useState('');
  const availableInterests = ['Math', 'Science', 'History', 'Literature', 'Programming'];

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInterestChange = (interest) => {
    if (quizInterests.includes(interest)) {
      setQuizInterests(quizInterests.filter((item) => item !== interest));
    } else {
      setQuizInterests([...quizInterests, interest]);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      alert('Please fill in all required fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    const signupData = {
      firstName,
      lastName,
      email,
      password,
      role,
      quizInterests: [...quizInterests, ...(otherInterest ? [otherInterest] : [])],
    };

    // **Simulating Backend - Storing user data in localStorage (NOT SECURE)**
    const existingUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    const isEmailTaken = existingUsers.some(user => user.email === email);

    if (isEmailTaken) {
      alert('This email address is already registered.');
      return;
    }

    existingUsers.push(signupData);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    localStorage.setItem('currentUserEmail', email); // Simulate login
    localStorage.setItem('currentUserRole', role);
    localStorage.setItem('currentUserInterests', JSON.stringify(signupData.quizInterests));

    alert('Sign up successful! User data stored in browser (localStorage - NOT SECURE).');
    navigate(role === 'student' ? '/assignments' : '/tutor'); // Redirect based on role
  };

  const handleLoginClick = () => { // Function to handle login navigation
    navigate('/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '500px', maxWidth: '90%' }}>
        <h2 style={{ marginBottom: '40px', marginTop: '40px', textAlign: 'center' }}>
          Sign Up for Study Buddy
        </h2>
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{ fontSize: '16px', padding: '8px', width: '50%', boxSizing: 'border-box' }}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{ fontSize: '16px', padding: '8px', width: '50%', boxSizing: 'border-box' }}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <label style={{ fontSize: '16px' }}>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)} style={{ fontSize: '16px', padding: '8px', marginLeft: '8px', boxSizing: 'border-box' }}>
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>
          </label>

          <h3 style={{ marginTop: '20px', fontSize: '18px', textAlign: 'center' }}>Personalize Your Quiz Interests:</h3>
          <p style={{ textAlign: 'center', fontSize: '16px' }}>Select topics you'd like to see in your personalized quizzes:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            {availableInterests.map((interest) => (
              <label key={interest} style={{ fontSize: '16px', display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  value={interest}
                  checked={quizInterests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                  style={{ marginRight: '8px' }}
                />
                {interest}
              </label>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <label htmlFor="otherInterest" style={{ fontSize: '16px' }}>
              Other Interest:
            </label>
            <input
              type="text"
              id="otherInterest"
              placeholder="Enter another interest"
              value={otherInterest}
              onChange={(e) => setOtherInterest(e.target.value)}
              style={{ fontSize: '16px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
            />
          </div>

          <button type="submit" className="nav-button" style={{ fontSize: '16px', padding: '10px 16px', width: '100%', boxSizing: 'border-box', marginTop: '20px' }}>
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '16px' }}>
          Already have an account?
          <button type="button" onClick={handleLoginClick} className="nav-button" style={{ fontSize: '16px', padding: '10px 16px', boxSizing: 'border-box', marginLeft: '10px' }}>
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;