import './Profile.css';
import {Avatar} from 'evergreen-ui';

function Profile() {    
  return (

    <div className="Profile">
      <div className="HeaderContainer">
        <a href="/profile">    
              <Avatar className="avi" isSolid name="John Doe" size={50} />
        </a>
        <h1 className="Header">Profile &amp; Settings</h1>
      </div>
    </div>
  );
}

export default Profile;
