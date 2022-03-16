import signInBackground from '../assets/sign-in-background.png';
import logoImg from '../assets/Logo.png';

import '../styles/SignIn.scss';

export function SignIn() {

  return (
    <div className="container">

      <div className="content">
        <img src={logoImg} alt="indrive" />
        <aside>
          <h1>Faça seu login</h1>
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