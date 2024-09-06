function ListGroup() {
  //ctrl+d

  let items = ["Dhaka", "Mymensigh", "Khulna", "Barishal", "Shellyt"];
  items = [];

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>Item is null</p> : null;
  //   };
  return (
    // this is fragment
    <>
      <h1>List Group:</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p>Item is null</p>}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}

        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
