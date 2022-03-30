import { useAuth } from '../hooks/useAuth';

export function Home() { 
  const { user } = useAuth();
  return (
    
    <div><h1>Olá {user?.name}</h1></div>
  );
}