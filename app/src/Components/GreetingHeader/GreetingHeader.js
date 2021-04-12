import React from 'react';
import './GreetingHeader.css';
import Avatar from '../Avatar/Avatar';

export default function Greeting({ headerProps }) {

    return(
        <div className="Greeting">  
            <Avatar nameProps={"Adam Monroe"} className="avi" />
            <h1 className="Header">{headerProps}</h1>
        </div>
    );
}