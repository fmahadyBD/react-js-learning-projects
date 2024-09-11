import { MouseEvent, useState } from "react";

//

interface Props {
  items: String[];
  heading: String;
  onSelectedItem: (item: String) => void;
}
const handelClick = (event: MouseEvent) => console.log(event);
function ListGroup({ items, heading, onSelectedItem }: Props) {
  //ctrl+d
  //we passed those by app componends

  // let items = ["Dhaka", "Mymensigh", "Khulna", "Barishal", "Shellyt"];
  //   items = [];

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>Item is null</p> : null;
  //   };

  // let SelectIndex = 0;

  //Hook
  let [selectIndex, setSelectIndex] = useState(-1);
  return (
    // this is fragment
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p>Item is null</p>}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}

        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectIndex(index);
              onSelectedItem(item);
            }}
          >
            {/* <li
            className="list-group-item active"
            key={item}
            onClick={handelClick}
          > */}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
