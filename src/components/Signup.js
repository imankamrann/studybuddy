import React, { useState } from 'react';

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
    window.location.href = role === 'student' ? '/assignments' : '/tutor'; // Redirect based on role
  };

  return (
    <div>
      <h2>Sign Up for Study Buddy</h2>
      <form onSubmit={handleSignup}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>
        </label>

        <h3>Personalize Your Quiz Interests:</h3>
        <p>Select topics you'd like to see in your personalized quizzes:</p>
        <div>
          {availableInterests.map((interest) => (
            <label key={interest}>
              <input
                type="checkbox"
                value={interest}
                checked={quizInterests.includes(interest)}
                onChange={() => handleInterestChange(interest)}
              />
              {interest}
            </label>
          ))}
        </div>
        <div>
          <label htmlFor="otherInterest">Other Interest:</label>
          <input
            type="text"
            id="otherInterest"
            placeholder="Enter another interest"
            value={otherInterest}
            onChange={(e) => setOtherInterest(e.target.value)}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Log In</a></p>
    </div>
  );
}

export default Signup;