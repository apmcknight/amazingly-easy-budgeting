import React, { useState, useEffect } from 'react';
import './NewItem.css';
import { CrossIcon, Button, TextInput, Pane, Spinner } from "evergreen-ui";

function NewItem() {

      const [loading, setLoading] = useState(true);
      const [budgetItem, setBudgetItem] = useState([]);

    
      useEffect(() => {
        setLoading(false)
        localStorage.setItem("budgetItem", JSON.stringify(budgetItem));
      }, [budgetItem])

      if (loading) return (
        <Pane display="flex" alignItems="center" justifyContent="center" height={650}>
          <Spinner style={{marginRight: "10px"}}/>
          We're crunching the numbers...
        </Pane>
      )

      return (
  
        <div className="NewItem">
          <div className="Container">
            <h1>Add an Item</h1>
  
            <a className="Close" href="/app">
              <Button iconBefore={CrossIcon} intent="danger">Cancel</Button>
            </a>
          </div>


          <Button className="btn" appearance="primary" onClick={() => setBudgetItem(["test"])}>
              Add Item
          </Button>
  

          <form>
            <div className="Input">
              <TextInput
                width={325}
                height={70}
                name="text-input-name"
                placeholder="Line Item Title"
              />
            </div>
  
            <div className="Input">
              <TextInput
                width={325}
                height={70}
                name="text-input-name"
                placeholder="$ Amount of Line Item"
              />
            </div>
  
            <div className="Input">
              <TextInput
                width={325}
                height={200}
                name="text-input-name"
                placeholder="Description"
              />
            </div>

              {/* <Button className="btn" appearance="primary" onClick={() => setBudgetItem("test item")}>
                Add Item
              </Button> */}

              
  
  
          </form>
        </div>
      );
}
   
  
export default NewItem;