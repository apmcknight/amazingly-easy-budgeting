import React from 'react';
import './Home.css';
import Greeting from "../GreetingHeader/GreetingHeader";

function Home() {   
  // DONT REMOVE UNTIL SOLVED.
  // const [loading, setLoading] = useState(true);
  // const [budgetItem] = useState([]);
  
  // useEffect(() => {
  //   setLoading(false)
  //   localStorage.setItem("budgetItem", JSON.stringify(budgetItem));
  // }, [budgetItem])

  // if (loading) return (
  //   <Pane display="flex" alignItems="center" justifyContent="center" height={650}>
  //     <Spinner style={{marginRight: "10px"}}/>
  //     We're crunching the numbers...
  //   </Pane>
  // )


 
  
  return (
    <div className="Home">
      <Greeting headerProps={"Hello, John Doe"}/>
      
      
    </div>
  );
}

export default Home;
