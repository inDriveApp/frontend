import React, { useState, useCallback, useContext, createContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  login: string;
}

interface AuthState {
  user: User;
}

interface SignInCredentials {
  login: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@InDrive:user');

    if (user) {
      return {user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ login, password }) => {
    const reponse = await api.post('api/login', { login, password });
    const reponseUsers = await api.get('api/user');
    for (const userData of reponseUsers.data) {
      if(userData.id === reponse.data.id){
        const userInfo:User = {
          id: userData.id,
          name: userData.name,
          login: login,
        };
        localStorage.setItem('@InDrive:user', JSON.stringify(userInfo));
        setData({ user: userInfo });
      }
     }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@InDrive:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@InDrive:user', JSON.stringify(user));

      setData({
        user,
      });
    },
    [setData],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}