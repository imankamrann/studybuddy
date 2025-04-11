import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('role');
  const location = useLocation();

  const navLinks = [
    { to: '/assignments', label: 'Assignments' },
    { to: '/schedule', label: 'Schedule' },
    { to: '/recommendations', label: 'Study Tips' },
    { to: '/trends', label: 'Trends' },
    { to: '/create-task', label: 'Create Task' },
    { to: '/view-tasks', label: 'View Tasks' },
    { to: '/student', label: 'Student Dashboard' },
    { to: '/messages', label: 'Messages' },
  ];

  if (localStorage.getItem('role') === 'tutor') {
    navLinks.splice(5, 0, { to: '/tutor', label: 'Tutor Dashboard' });
  }

  return (
    <nav
      style={{
        backgroundColor: '#ffffff',
        padding: '14px 32px',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo + Title */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/studyBuddyLogo.svg"
            alt="Study Buddy Logo"
            style={{ height: '40px', marginRight: '12px' }}
          />
          <span style={{ fontWeight: 700, fontSize: '20px', color: '#111827' }}>Study Buddy</span>
        </Link>

        {/* Navigation Links */}
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
          {!isLoggedIn ? (
            <>
              <li>
                <Link
                  to="/signup"
                  style={navLinkStyle}
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login" style={loginButtonStyle}>Log In</Link>
              </li>
            </>
          ) : (
            <>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      ...navLinkStyle,
                      backgroundColor: location.pathname === link.to ? '#f3f4f6' : 'transparent',
                      borderRadius: '6px',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/login"
                  onClick={() => localStorage.removeItem('role')}
                  style={logoutButtonStyle}
                >
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

// ✨ Link styles
const navLinkStyle = {
  textDecoration: 'none',
  color: '#374151',
  fontWeight: '500',
  padding: '10px 18px', // more spacing around each link
  borderRadius: '6px',
  transition: 'all 0.3s ease',
  display: 'inline-block',
};


const loginButtonStyle = {
  backgroundColor: '#8b5cf6',
  color: '#ffffff',
  padding: '8px 16px',
  borderRadius: '6px',
  fontWeight: '600',
  textDecoration: 'none',
  transition: 'background 0.3s ease-in-out',
};

const logoutButtonStyle = {
  ...loginButtonStyle,
  backgroundColor: '#ef4444', // 🔴 logout = red vibe
};

export default Navbar;
