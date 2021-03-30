import './Profile.css';
import {Avatar} from 'evergreen-ui';

function Profile() {    
  return (

    <div className="Profile">
      <h1>Hello, there!</h1>
      <Avatar isSolid className="Icn" name="John Doe" size={40} />


    </div>
  );
}

export default Profile;
