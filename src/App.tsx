// import Message from "./Message"

import ListGroup from "./components/ListGroup";

ListGroup;
//we passd parametter from here to ListGroup
let items = ["ABX", "Mymensigh", "Khulna", "Barishal", "Shellyt"];
function App() {
  return (
    <div>
      {/* <Message></Message> */}

      <ListGroup items={items} heading={"Cites"} />
    </div>
  );
}

export default App;
