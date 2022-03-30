import { FormEvent ,useState,useEffect} from 'react';

import {FiLock, FiUser} from 'react-icons/fi';
import signInBackground from '../assets/sign-in-background.png';
import logoImg from '../assets/Logo.png';
import Input from '../components/input';
import { toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import api from '../services/Api';

import '../styles/Register.scss';

export function Register() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPasssword] = useState('');
  const [confirmPassword, setConfirmPasssword] = useState('');

  async function registerUser(event: FormEvent) {
    event.preventDefault();
    if(name.trim() === "",login.trim() === "",password.trim() === "",confirmPassword.trim() === ""){
      toast.error("Preecha todos os dados");
      return;
    }
    if(password === confirmPassword){
      api.post("api/user",{
        name: name,
        login: login,
        password: password
      })
      .then((response) =>  {
        toast.success("Cadastro efetuado com sucesso!");
        history.push("/")        
      }).catch((err) => {
        toast.error("Preecha todos os dados");
      });
    }
       
  }

  return (
    <>
    <ToastContainer 
     position="top-right"
     autoClose={5000}
     hideProgressBar={true}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
   />
    <div className="container">
     <div>
        <img src={signInBackground} alt="" />
      </div>
      <div className="content">
      <a href="/">
          Voltar</a>
        <img src={logoImg} alt="indrive" />
        <form onSubmit={registerUser}>
          <h1>Crie uma conta</h1>
          <Input 
          name="nome" 
          type="text" 
          placeholder='Nome' 
          icon={FiUser}
          onChange={event => setName(event.target.value)}
          value={name}/>
          <Input 
          name="login" 
          type="text" 
          placeholder='Login' 
          icon={FiUser}
          onChange={event => setLogin(event.target.value)}
          value={login}/>
          <Input 
          name="senha" 
          type="password" 
          placeholder='Senha'  
          icon={FiLock}
          onChange={event => setPasssword(event.target.value)}
          value={password}/>
          <Input 
          name="confirmPassword" 
          type="password" 
          placeholder='Confirme a Senha'  
          icon={FiLock}
          onChange={event => setConfirmPasssword(event.target.value)}
          value={confirmPassword}/>
          <button className="button-signin" type='submit'>
            Cadastrar
          </button>
        </form>
      </div>      
      
     
    </div>     
   </>
  );
}