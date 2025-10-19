
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';
// import './adminlogin.css';
// import adminloginimg from '../assets/images/logo.svg';

// function AdminLogin() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await fetch('http://localhost:5000/api/manageuser');
//       const users = await res.json();

//       const matchedUser = users.find(
//         (user) => user.name === username && user.password === password
//       );

//       if (matchedUser) {
//         login(matchedUser); // store full user object
//         navigate('/dashboard'); // or navigate('/manageuser')
//       } else {
//         setError('Invalid username or password. Please try again.');
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="adminlogin-background">
//       <div className="adminlogin-head d-flex">
//         <div className="adminleft">
//           <img src={adminloginimg} alt="Admin Logo" />
//         </div>
//         <form onSubmit={handleLogin} className="adminlogin-form">
//           <h3 className="adminh3 mb-4">
//             Please enter your username and password to login
//           </h3>

//           {error && <p className="error-message">{error}</p>}

//           <input
//             className="adminlogininput"
//             type="text"
//             placeholder="User name"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />

//           <input
//             className="adminlogininput"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button className="adminlogin-btn" type="submit">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;

// AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './adminlogin.css';
import adminloginimg from '../assets/images/logo.svg';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
  e.preventDefault();
  setError('');

  try {
    const res = await fetch('http://localhost:5000/api/manageuser');
    const users = await res.json();

    const matchedUser = users.find(
      (user) => user.email === username && user.password === password
    );

    if (matchedUser) {
      console.log("Logged in user:", matchedUser);
      login(matchedUser);
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  } catch (err) {
    console.error('Login error:', err);
    setError('An error occurred. Please try again later.');
  }
};


  return (
    <div className="adminlogin-background">
      <div className="adminlogin-head d-flex">
        <div className="adminleft">
          <img src={adminloginimg} alt="Admin Logo" />
        </div>
        <form onSubmit={handleLogin} className="adminlogin-form">
          <h3 className="adminh3 mb-4">
            Please enter your username and password to login
          </h3>
          {error && <p className="error-message">{error}</p>}
        <input
  className="adminlogininput"
  type="email"
  placeholder="Email"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  required
/>

          <input
            className="adminlogininput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="adminlogin-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
