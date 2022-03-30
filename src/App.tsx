import { BrowserRouter, Route, Switch } from "react-router-dom";
import {SignIn} from './pages/SignIn';
import {Home} from './pages/Home';

import { AuthContextProvider } from './contexts/Auth';

import '../src/styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
