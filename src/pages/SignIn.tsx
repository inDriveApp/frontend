import { FormEvent ,useState,useEffect} from 'react';

import {FiLock, FiUser} from 'react-icons/fi';
import signInBackground from '../assets/sign-in-background.png';
import logoImg from '../assets/Logo.png';
import Input from '../components/input';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';

import '../styles/SignIn.scss';

export function SignIn() {
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [password, setPasssword] = useState('');

  const { user,signIn } = useAuth();

  useEffect(() => {
    if(user){      
      history.push("/home");
    }
  }, [user])
  async function authUser(event: FormEvent) {
    event.preventDefault();
    await signIn(login,password);    
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

      <div className="content">
        <img src={logoImg} alt="indrive" />
        <form onSubmit={authUser}>
          <h1>Faça seu login</h1>
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
          <button className="button-signin" type='submit'>
            Entrar
          </button>
        </form>
      </div>      
      <div>
        <img src={signInBackground} alt="" />
      </div>
     
    </div>     
   </>
  );
}