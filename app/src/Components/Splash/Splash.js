import './Splash.css';
import Logo from '../../Assets/logo.png';

import {
  Button,
  Text
} from 'evergreen-ui';

function Splash() {    
  return (
      <div className="Splash">
        <img className="Logo" alt="Logo" src={Logo}></img>
        <h1>Welcome to Adam's way of Budgeting!</h1>
        <a href="/login">
          <Button marginY={8} marginRight={12}>Sign In</Button>
        </a>
        <a href="/app">
          <Text marginY={8} marginRight={12}>Use Offline</Text>
        </a>      
      </div>

  );
}

export default Splash;
