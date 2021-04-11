import React, { useState, useEffect } from 'react';
import './Profile.css';
import { Avatar, Pane, Spinner, Button } from 'evergreen-ui';

function Profile() {   

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState([]);

  useEffect(() => {
    setLoading(false)
    localStorage.setItem("name", JSON.stringify(name));
  }, [name])

  if (loading) return (
    <Pane display="flex" alignItems="center" justifyContent="center" height={650}>
      <Spinner style={{marginRight: "10px"}}/>
      We're crunching the numbers...
    </Pane>
  )

  return (

    <div className="Profile">
      <div className="HeaderContainer">
        <a href="/profile">    
              <Avatar className="avi" isSolid name="John Doe" size={50} />
        </a>
        <h1 className="Header">Profile &amp; Settings</h1>
      </div>

      <Button className="btn" appearance="primary" onClick={() => setName("Adam Monroe")}>
              Add Item
      </Button>

    </div>
  );
}

export default Profile;
