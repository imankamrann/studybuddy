import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const inputStyle = {
    padding: '10px',
    fontSize: '15px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    boxSizing: 'border-box',
    width: '100%',
  };

  const labelStyle = {
    fontSize: '15px',
    fontWeight: '500',
    color: '#374151',
  };

  const handleInterestChange = (interest) => {
    setQuizInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) return alert('Fill in all required fields.');
    if (password !== confirmPassword) return alert('Passwords do not match.');
    if (password.length < 6) return alert('Password must be at least 6 characters.');

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (existingUsers.some((u) => u.email === email)) return alert('Email already registered.');

    const newUser = {
      firstName, lastName, email, password, role,
      quizInterests: [...quizInterests, ...(otherInterest ? [otherInterest] : [])],
    };

    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
    localStorage.setItem('currentUserEmail', email);
    localStorage.setItem('currentUserRole', role);
    localStorage.setItem('currentUserInterests', JSON.stringify(newUser.quizInterests));
    alert('Sign up successful!');
    navigate(role === 'student' ? '/assignments' : '/tutor');
  };

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      minHeight: '100vh', backgroundColor: '#f9fafb', padding: '30px',
    }}>
      <div style={{
        backgroundColor: '#fff', padding: '40px', borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)', width: '100%', maxWidth: '600px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '24px', fontWeight: 600 }}>
          Sign Up for Study Buddy 📚
        </h2>

        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} required />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} required />
          </div>

          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={inputStyle} required />

          <label style={labelStyle}>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)} style={{ ...inputStyle, marginTop: '8px' }}>
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>
          </label>

          <div>
            <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '8px' }}>Quiz Interests</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {availableInterests.map((interest) => (
                <label key={interest} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '15px' }}>
                  <input type="checkbox" value={interest} checked={quizInterests.includes(interest)} onChange={() => handleInterestChange(interest)} />
                  {interest}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="otherInterest" style={labelStyle}>Other Interest:</label>
            <input type="text" id="otherInterest" placeholder="Enter another interest" value={otherInterest} onChange={(e) => setOtherInterest(e.target.value)} style={inputStyle} />
          </div>

          <button type="submit" style={{
            backgroundColor: '#8b5cf6', color: '#fff', padding: '12px',
            fontSize: '16px', fontWeight: '600', borderRadius: '8px',
            marginTop: '10px', cursor: 'pointer', border: 'none',
          }}>
            Sign Up
          </button>
        </form>

        <p style={{ marginTop: '20px', textAlign: 'center' }}>
          Already have an account?
          <Link to="/login" style={{
            marginLeft: '10px', backgroundColor: '#6366f1', color: '#fff',
            padding: '8px 14px', fontSize: '14px', borderRadius: '6px',
            textDecoration: 'none',
          }}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
