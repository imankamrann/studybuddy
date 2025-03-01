import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // 'student' or 'tutor'

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate Firebase auth (replace with real Firebase logic)
    if (email && password) {
      localStorage.setItem('role', role);
      window.location.href = role === 'student' ? '/assignments' : '/tutor';
    } else {
      alert('Please enter email and password!');
    }
  };

  return (
    <div>
      <h2>Login to Study Buddy</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;