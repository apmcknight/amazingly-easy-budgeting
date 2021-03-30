import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Tabs from './Components/Tabs/Tabs';
import Splash from './Components/Splash/Splash';
import Home from './Components/Home/Home.js';
import Profile from './Components/Profile/Profile';
import BudgetItem from './Components/BudgetItem/BudgetItem.js';

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* Tabs component should be called above other components. */}
        <Tabs />
        
        <Route path="/" exact="true" component={Splash} />
        <Route path="/app" exact="true" component={Home}/>
        <Route path="/profile" exact="true" component={Profile}/>
        <Route path="/budget-item" exact="true" component={BudgetItem}/>

         

      </div>
    </Router>
    
  );
}
