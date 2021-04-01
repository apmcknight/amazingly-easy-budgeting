import './GreetingHeader.css';
import { Avatar, Pill} from 'evergreen-ui';

function Greeting() {
    return(
        <div className="Greeting">  

        <a href="/profile">    
            <Avatar className="avi" isSolid name="John Doe" size={50} />
        </a>
        
        <h1 className="Header">Hello, John Doe!</h1>
        <Pill 
        color="yellow"
        display="inline-block" 
        width={250}
        height={30}  
        padding={7} 
        margin={7}
        >
            You have $5,000 un-budgeted.
        </Pill>
    
    </div>
    );
}

export default Greeting;