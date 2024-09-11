// import Message from "./Message"

import ListGroup from "./components/ListGroup";

ListGroup;
//we passd parametter from here to ListGroup
let items = ["ABX", "Mymensigh", "Khulna", "Barishal", "Shellyt"];
const handleSelectItem = (item: String) => {
  console.log(item);
};

function App() {
  return (
    <div>
      {/* <Message></Message> */}

      <ListGroup
        items={items}
        heading={"Cites"}
        onSelectedItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
