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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      
      <div style={{ display: 'flex', alignItems: 'flex-start'}}>
    <h2 style={{ marginBottom: '40px', marginTop: '40px' }}>Login to Study Buddy</h2>
   </div>

      <form onSubmit={handleLogin} style={{ display: 'flex',  flexDirection: 'column',  gap: '20px'}}>

        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
              style={{ fontSize: '16px', padding: '8px',  width: '300px' }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
           style={{ fontSize: '16px', padding: '8px' ,  width: '300px'}}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}     style={{ fontSize: '16px', padding: '8px' }}>
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
        </select>
         <button type="submit" className="nav-button" style={{ fontSize: '16px', padding: '10px 16px' }}>Login</button>

      </form>
    </div>
  );
}

export default Login;