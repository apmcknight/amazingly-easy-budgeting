import './NewItem.css';
import { TextInput } from "evergreen-ui";

function NewItem() {    
  return (

    <div className="NewItem">
      <div className="Container">
        <h1>Add an Item</h1>
      </div>

      <div className="Input">
            <TextInput
        name="text-input-name"
        placeholder="Text input placeholder..."
      />
    </div>
    </div>
  );
}

export default NewItem;
