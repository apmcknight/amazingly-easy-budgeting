import './Tabs.css';
import { Avatar, Icon, HomeIcon, AddIcon, } from 'evergreen-ui';

function Tabs() {    
  return (

    <div className="Tabs">
      <div className="tabbar">
        <a href="/">
          <Icon className="Icn" color="muted" icon={HomeIcon} size={40} />
        </a>

        <a href="/">
          <Icon className="Icn" color="muted" icon={AddIcon} size={40} />
        </a>

        <Avatar isSolid className="Icn" name="John Doe" size={40} />
      </div>

    </div>
  );
}

export default Tabs;
