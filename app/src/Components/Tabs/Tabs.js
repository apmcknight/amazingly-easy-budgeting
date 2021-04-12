import './Tabs.css';
import { Icon, HomeIcon, AddIcon, } from 'evergreen-ui';
import Avatar from '../Avatar/Avatar';

function Tabs() {    

  return (

    <div className="Tabs">
      <div className="Bar">
        <a href="/app">
          <Icon className="Icn" color="muted" icon={HomeIcon} size={40} />
        </a>

        <a href="/new-item">
          <Icon className="Icn" color="muted" icon={AddIcon} size={40} />
        </a>

        <a href="/profile">
          <Avatar className="Icn" />
        </a>
      </div>

    </div>
  );
}

export default Tabs;
