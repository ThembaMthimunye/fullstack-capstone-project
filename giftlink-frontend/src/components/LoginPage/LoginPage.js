import React, { useState, useEffect } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Login</h2>

      Email
      <input
        id="email"
        type="text"
        className="form-control"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      Password
      <input
        id="password"
        type="password"
        className="form-control"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Include appropriate error message if login is incorrect */}

      <button onClick={handleLogin}>Login</button>

      <p>New here? <a href="/register">Register Here</a></p>
    </div>
  );
}

export default LoginPage;