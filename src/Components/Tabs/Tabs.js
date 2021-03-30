import './Tabs.css';
import { Avatar, Icon, HomeIcon, AddIcon, } from 'evergreen-ui';

function Tabs() {    
  return (

    <div className="Tabs">
      <div className="tabbar">
        <a href="/app">
          <Icon className="Icn" color="muted" icon={HomeIcon} size={40} />
        </a>

        <a href="/new-item">
          <Icon className="Icn" color="muted" icon={AddIcon} size={40} />
        </a>

        <a href="/profile">
          <Avatar isSolid className="Icn" name="John Doe" size={40} />
        </a>
      </div>

    </div>
  );
}

export default Tabs;
