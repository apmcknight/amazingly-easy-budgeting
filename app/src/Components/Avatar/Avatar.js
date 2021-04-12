import React from 'react';
//import './GreetingHeader.css';
import { Avatar } from 'evergreen-ui';

export default function Avi({nameProps}) {

    const name = {nameProps}

    return(
        <div>
                <Avatar className="avi" isSolid name={name} size={40} />
        </div>
    );
}