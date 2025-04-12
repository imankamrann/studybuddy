import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('role', role);
      localStorage.setItem('currentUserEmail', email);
      alert('Login successful!');
      navigate(role === 'student' ? '/assignments' : '/tutor');
    } else {
      alert('Please enter email and password!');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '24px',
            fontWeight: '600',
            color: '#111827',
          }}
        >
          Login to <span style={{ color: '#8b5cf6' }}>Study Buddy</span>
        </h2>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={inputStyle}
          >
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>

          <button
            type="submit"
            className="nav-button"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#7c3aed')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#8b5cf6')}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '15px' }}>
          Don’t have an account?
          <Link to="/signup" style={{ color: '#8b5cf6', fontWeight: '500', marginLeft: '6px', textDecoration: 'none' }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  fontSize: '15px',
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  boxSizing: 'border-box',
  width: '100%',
};

const buttonStyle = {
  backgroundColor: '#8b5cf6',
  color: '#ffffff',
  padding: '12px',
  fontSize: '16px',
  fontWeight: '600',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.2s ease',
};

export default Login;
