import signInBackground from '../assets/sign-in-background.png';
import logoImg from '../assets/Logo.png';
import Input from '../components/input';

import {FiLock, FiMail} from 'react-icons/fi'
import '../styles/SignIn.scss';

export function SignIn() {

  return (
    <div className="container">

      <div className="content">
        <img src={logoImg} alt="indrive" />
        <aside>
          <h1>Faça seu login</h1>
          <Input name="e-mail" type="text" placeholder='E-mail' icon={FiMail}/>
          <Input name="senha" type="password" placeholder='Senha'  icon={FiLock}/>
          <button className="button-signin">
            Entrar
          </button>
        </aside>
      </div>

      <div>
        <img src={signInBackground} alt="" />
      </div>

    </div>
  );
}