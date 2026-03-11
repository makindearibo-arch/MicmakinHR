import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStoredSession, restoreSession, clearSession, setSession } from '../lib/auth';

interface AppContextType {
  currentUser: any;
  setCurrentUser: (user: any) => void;
  currentSubsidiary: string;
  setCurrentSubsidiary: (sub: string) => void;
  logout: () => void;
  sessionLoading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUserState] = useState<any>(null);
  const [currentSubsidiary, setCurrentSubsidiary] = useState<string>('All');
  const [sessionLoading, setSessionLoading] = useState(true);

  useEffect(() => {
    const stored = getStoredSession();
    if (stored) {
      restoreSession(stored.id, stored.email)
        .then(user => {
          if (user) setCurrentUserState(user);
          else clearSession();
        })
        .catch(() => clearSession())
        .finally(() => setSessionLoading(false));
    } else {
      setSessionLoading(false);
    }
  }, []);

  const setCurrentUser = (user: any) => {
    setCurrentUserState(user);
    if (user) setSession(user);
    else clearSession();
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser, currentSubsidiary, setCurrentSubsidiary, logout, sessionLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
