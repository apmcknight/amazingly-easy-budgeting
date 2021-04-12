import React, { useState } from 'react';
import './NewItem.css';
import { TextInput, Button, Checkbox } from 'evergreen-ui';
import Greeting from '../GreetingHeader/GreetingHeader';

function NewItem() {

  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isChecked, setChecked] = useState({checked: false});  
  const [onAutopay, setOnAutopay] = useState(false);
 

  return (
    <div className="NewItem">
      <Greeting headerProps={"Add a New Item"}/>


      <form action="">
        <TextInput
          type={"text"}
          value={itemName}
          margin={40}
          height={40}
          onChange={(e) => setItemName(e.target.value)}
          name="text-input-name"
          placeholder="Enter the Amount, Like $123"
        />

       <TextInput
          type={"text"}
          value={amount}
          margin={40}
          height={40}
          onChange={(e) => setAmount(e.target.value)}
          name="text-input-name"
          placeholder="Enter the Amount, Like $123"
        />

        <TextInput
          type={"text"}
          value={paymentMethod}
          margin={40}
          height={40}
          onChange={(e) => setPaymentMethod(e.target.value)}
          name="text-input-name"
          placeholder="Payment Method (AMEX, Visa, Discover)"
        />

        <div>
          <h3>Autopay?</h3>
          <Checkbox 
            value={onAutopay}
            margin={40}  
            checked={isChecked.checked}
            onChange={e => { setOnAutopay(e.target.value); setChecked({checked: true})} }
          />

        </div>

        <Button>
          Add Item
        </Button>
      </form>
    </div>
  )
}
   
  
export default NewItem;