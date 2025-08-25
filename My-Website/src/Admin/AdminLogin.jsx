import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminlogin.css';
import adminloginimg from '../assets/images/logo.svg';
function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); 
    const validUsername = 'admin';
    const validPassword = 'admin@1234';

    if (username === validUsername && password === validPassword) {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="adminlogin-background">
     
      <div className="adminlogin-head d-flex">
         <div className="adminleft">
        <img src={adminloginimg} alt="" />
      </div>
        <form onSubmit={handleLogin} className="adminlogin-form ">
          <h3 className=' adminh3 mb-4'>Please enter your username and password to login</h3>

          {error && <p className="error-message">{error}</p>}

          <input className='adminlogininput'
            type="text"
            placeholder="User name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />

          <input className='adminlogininput'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          <button className='adminlogin-btn' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
