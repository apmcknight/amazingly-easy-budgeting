import './Home.css';
import {Pane,Heading,Avatar} from 'evergreen-ui';

function Home() {    
  return (

    <div className="Home">
    
    <div className="greeting">  
      <a href="/profile">
        <Avatar className="avi" isSolid name="John Doe" size={50} />
      </a>
      <h1>Hello, John Doe!</h1>
    </div>
    
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
