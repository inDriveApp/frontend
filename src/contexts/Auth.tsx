import { createContext, useState,useEffect, ReactNode } from 'react';
import { toast } from 'react-toastify';
import api from '../services/Api';

type User = {
  id:string,
  name: string,
}

type AuthContextType = {
  user: User | undefined;
  signIn: (login:string,password:string) => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  
  async function getUser(id:string){
    api.get("api/user")
      .then((response) => {
        for (const user of response.data) {
         if(user.id === id){
           setUser({
             id: user.id,
             name: user.name
           })
         }
        }
      })
      .catch((err) => {
        toast.error("Usuário não encontrado");
      });
  }
  async function signIn(login:string,password:string) {    
      api.post("api/login",{
              login: login,
              password: password
        })
        .then((response) =>       
        getUser(response.data.id))

        .catch((err) => {
          toast.error("Usuário ou Senha incorretos");
        });
  }
  async function signOut() {    
  }


  return (
    <AuthContext.Provider value={{ user, signIn,signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}