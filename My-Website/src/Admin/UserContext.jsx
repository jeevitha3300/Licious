import React, { createContext, useState, useContext } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (username, password) => {
    // Hardcoded users with permissions
    const users = {
      thanya: {
        password: "22222222",
        permissions: ["banner", "product", "category"],
      },
      admin: {
        password: "admin123",
        permissions: ["dashboard", "user", "banner", "product", "category", "customer", "order", "testimonial", "setting"],
      },
    };
    if (users[username] && users[username].password === password) {
      setUser({ username, permissions: users[username].permissions });
      return true;
    }
    return false;
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
