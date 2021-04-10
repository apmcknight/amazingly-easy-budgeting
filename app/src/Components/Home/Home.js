import React, { useEffect, useState } from 'react';
import './Home.css';
import Greeting from "../GreetingHeader/GreetingHeader";
import Card from '../Card/Card';
import data from '../../Assets/dummy.json'

function Home() {   
 
  const [budgetItem, setBudgetItem] = useState(data);

  useEffect(() => {
    localStorage.setItem("budgetItem", JSON.stringify(budgetItem));
  }, [budgetItem])

  return (

    <div className="Home">
    <Greeting />
    <Card budgetItem={budgetItem}/>    


    </div>
  );
}

export default Home;
