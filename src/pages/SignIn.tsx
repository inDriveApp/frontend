import signInBackground from '../assets/sign-in-background.png';
import logoImg from '../assets/Logo.png';

import '../styles/SignIn.scss';

export function SignIn() {

  return (
    <div className="container">     

    <div className="content">
        <img src={logoImg} alt="indrive" />
        <h1>Faça seu login</h1>
        <input type="email" placeholder='E-mail'/>
        <input type="password"  placeholder='Senha' />

        <div className='button-container'>
            <button type='submit'>Entrar</button>
      </div>
      </div>
      
       <div className="background">
        <img src={signInBackground} alt="" />
      </div>
    </div>
  );
}