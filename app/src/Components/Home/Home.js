import React from 'react';
import './Home.css';
import Greeting from "../GreetingHeader/GreetingHeader";
import {Pane,Heading} from 'evergreen-ui';

function Home() {   
 
  return (

    <div className="Home">
    <Greeting />
    


    <a href="/budget-item">
      <Pane
      elevation={2}
      float="left"
      width={345}
      height={120}
      margin={25}
      padding={30}
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection="column"
      >
        <Heading size={800}>$1,000.00</Heading>
        <Heading style={{marginTop: "10px"}} size={500}>Budget Item Title</Heading>
      </Pane>
  </a>
    <Pane
    elevation={2}
    float="left"
    width={345}
    height={120}
    margin={25}
    padding={30}
    display="flex"
    justifyContent="center"
    alignItems="flex-start"
    flexDirection="column"
    >
      <Heading size={800}>$1,000.00</Heading>
      <Heading style={{marginTop: "10px"}} size={500}>Budget Item Title</Heading>
    </Pane>

    <Pane
    elevation={2}
    float="left"
    width={345}
    height={120}
    margin={25}
    padding={30}
    display="flex"
    justifyContent="center"
    alignItems="flex-start"
    flexDirection="column"
    >
      <Heading size={800}>$1,000.00</Heading>
      <Heading style={{marginTop: "10px"}} size={500}>Budget Item Title</Heading>
    </Pane>

    <Pane
    elevation={2}
    float="left"
    width={345}
    height={120}
    margin={25}
    padding={30}
    display="flex"
    justifyContent="center"
    alignItems="flex-start"
    flexDirection="column"
    >
      <Heading size={800}>$1,000.00</Heading>
      <Heading style={{marginTop: "10px"}} size={500}>Budget Item Title</Heading>
    </Pane>

    <Pane
    elevation={2}
    float="left"
    width={345}
    height={120}
    margin={25}
    padding={30}
    display="flex"
    justifyContent="center"
    alignItems="flex-start"
    flexDirection="column"
    >
      <Heading size={800}>$1,000.00</Heading>
      <Heading style={{marginTop: "10px"}} size={500}>Budget Item Title</Heading>
    </Pane>

    <Pane
    elevation={2}
    float="left"
    width={345}
    height={120}
    margin={25}
    padding={30}
    display="flex"
    justifyContent="center"
    alignItems="flex-start"
    flexDirection="column"
    >
      <Heading size={800}>$1,000.00</Heading>
      <Heading style={{marginTop: "10px"}} size={500}>Budget Item Title</Heading>
    </Pane>


    </div>
  );
}

export default Home;
