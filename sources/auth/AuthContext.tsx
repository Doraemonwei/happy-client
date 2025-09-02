import React, { createContext, useContext, ReactNode } from 'react';

// Single-user mode: simplified auth context
interface AuthContextType {
    isAuthenticated: boolean;
    credentials: { token: string; secret: string } | null;
    login: (token: string, secret: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    // Single-user mode: always authenticated
    const contextValue: AuthContextType = {
        isAuthenticated: true,
        credentials: { token: 'single-user-mode', secret: 'single-user-mode' },
        login: async () => {
            console.log('Single-user mode: login not required');
        },
        logout: async () => {
            console.log('Single-user mode: logout not applicable');
        }
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}