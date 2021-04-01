import './BudgetItem.css';
import { Pill, Button, EditIcon, TrashIcon } from 'evergreen-ui'

function BudgetItem() {    
  return (

    <div className="BudgetItem">
      <div className="Header">
        <h1>Budget Item Title</h1>
        <Pill 
        color="neutral"
        display="inline-block" 
        width={100}
        height={30}  
        padding={7} 
        margin={7}
        >
          $5,000
        </Pill>
      </div>

      <div className="BudgetItemDetails">
        <span className="Item ItemDate">
          <h3>Item Created On:</h3>
          <p>April 4th, 2018</p>
        </span>
        <span className="Item ItemType">
          <h3>Item Type:</h3>
          <p>Auto Gas</p>
        </span>
        <span className="Item ItemMethod">
          <h3>Item Transaction Method:</h3>
          <p>American Express</p>
        </span>
        <span className="ItemDescription">
          <h3>Item Description / Comment:</h3>
          <p>There is no comment added for this Transaction Item. To add one, please edit this item.</p>
        </span>
        
        <div className="ActionButtons">
          <Button appearance="primary" intent="warning" marginY={8} marginRight={12} iconBefore={EditIcon}>Edit</Button>

          <Button appearance="primary" intent="danger" marginY={8} marginRight={12} iconBefore={TrashIcon}>Remove</Button>
        </div>
      </div>

      
    </div>
  );
}

export default BudgetItem;
