import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const userLocal = localStorage.getItem('empleado');
    if (userLocal) {
      setUser({ name: userLocal });
    }
  }, []);

  const login = (username) => {
    setUser({ name: username })
  };

  const logout = () => {
    localStorage.clear()
    setUser(null)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAuth = () => useContext(AuthContext);
