import GroceryItem from './GroceryItem';
import GROCERY_LIST from './data';
import { useState } from 'react';

function GroceryList() {
  const [groceryList, setGroceryList] = useState(GROCERY_LIST);

  function handleCheck(index, state) {
    const updatedItem = groceryList.splice(index, 1)[0];

    let updatedGroceryList = groceryList
      .slice(0, index)
      .concat(groceryList.slice(index));
    console.log(updatedGroceryList);

    if (state === true) {
      updatedGroceryList.push(updatedItem);
    } else if (state === false) {
      updatedGroceryList.unshift(updatedItem);
    }

    setGroceryList(updatedGroceryList);
  }

  return (
    <>
      {groceryList.map((item) => (
        <GroceryItem
          key={item.id}
          name={item.name}
          id={item.id}
          handleCheck={handleCheck}
          index={groceryList.indexOf(item)}
        />
      ))}
    </>
  );
}

export default GroceryList;
