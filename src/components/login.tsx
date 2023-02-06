import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login:React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform authentication logic here
    // For demonstration purposes, let's just say that if the username is "admin" and the password is "password", the user is considered logged in
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isUserAuthinticated', 'true');
      navigate('/schedule');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} placeholder='Provide "admin" as Username' onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} placeholder='Provide "password" as Password' onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
