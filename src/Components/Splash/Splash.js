import './Splash.css';
import Logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';

import {
  Button,
} from 'evergreen-ui';

function Splash() {    
  return (

    <div className="Splash">
      <img className="Logo" alt="Logo" src={Logo}></img>
      <h1>Welcome to Amazingly Easy Budgeting!</h1>
    
      <Link href="/login">
        <Button marginY={8} marginRight={12}>Sign In</Button>
      </Link>
      <Link href="/login">
        <Button marginY={8} marginRight={12}>Use Offline</Button>
      </Link>
      
    </div>
  );
}

export default Splash;
