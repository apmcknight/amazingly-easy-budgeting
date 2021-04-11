import React from 'react';
import './GreetingHeader.css';
import { Avatar, Pill } from 'evergreen-ui';

export default function Greeting() {

    const name = JSON.parse(localStorage.getItem("name"))

    return(
        <div className="Greeting">  

        <a href="/profile">    
            <Avatar className="avi" isSolid name={name} size={50} />
        </a>
        
        <h1 className="Header">Hello, {name}</h1>
        <Pill 
        color="yellow"
        display="inline-block" 
        width={250}
        height={30}  
        padding={7} 
        margin={7}
        >
            You have $ un-budgeted.
        </Pill>
    
    </div>
    );
}