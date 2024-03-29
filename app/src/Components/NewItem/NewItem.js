import './NewItem.css';
import { CrossIcon, Button, TextInput } from "evergreen-ui";

function NewItem() {    
  return (

    <div className="NewItem">
      <div className="Container">
        <h1>Add an Item</h1>

        <a className="Close" href="/app">
          <Button iconBefore={CrossIcon} intent="danger">Cancel</Button>
        </a>

      </div>
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

        <Button className="btn" appearance="primary">Add Item</Button>


      </form>
    </div>
  );
}

export default NewItem;
