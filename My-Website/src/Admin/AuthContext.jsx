// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminInfo, setAdminInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    const storedAdminInfo = localStorage.getItem('adminInfo');
    if (storedLogin === 'true' && storedAdminInfo) {
      setIsLoggedIn(true);
      setAdminInfo(JSON.parse(storedAdminInfo));
    }
    setLoading(false);
  }, []);
  const login = (userData) => {
    if (userData && userData.permissions) {
      setIsLoggedIn(true);
      setAdminInfo(userData);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('adminInfo', JSON.stringify(userData));
    } else {
      console.warn("Login data missing permissions");
      setIsLoggedIn(false);
      setAdminInfo(null);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('adminInfo');
    }
  };
  const logout = () => {
    setIsLoggedIn(false);
    setAdminInfo(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('adminInfo');
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, adminInfo, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
