import { useState } from 'react';

function GroceryItem({ name, id, handleCheck, index }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(index) {
    const state = isChecked ? false : true;
    setIsChecked(!isChecked);
    handleCheck(index, state);
  }

  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => handleChange(index)}
      />
      <label
        htmlFor={id}
        style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
      >
        {name}
      </label>
      <br />
    </>
  );
}

export default GroceryItem;
