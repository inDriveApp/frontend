import React from 'react';

import {
  Container
} from './styles';
import { useAuth } from '../../hooks/auth';



export default function Dashboard() {
  const { user,signOut } = useAuth();
  
  return (
    <Container>
      <h1>Seja Bem-vindo(a) {user.name}</h1>
      <button onClick={signOut}>Sair</button>
    </Container>
  );
}