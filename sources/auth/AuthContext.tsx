// Single-user mode: simplified AuthContext stub
import React, { createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { id: string } | null;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: true,
  user: { id: 'default-user' }
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const value = {
    isAuthenticated: true,
    user: { id: 'default-user' }
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}