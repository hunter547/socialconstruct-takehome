import React, { useContext } from 'react';
import { ItemsContext } from './utilities/ItemsContext';
 
const ItemsList = ({ allInfo }) => {
  const [itemsContext, setItemsContext] = useContext(ItemsContext);

  const flipItem = (name) => {
    const newItemsContext = {...itemsContext};
    const keys = Object.keys(itemsContext);
    keys.forEach(keyName => {
      if (name === keyName) {
        newItemsContext[keyName] = !newItemsContext[keyName];
      }
    })
    setItemsContext(newItemsContext);
  }

  return (
    <div className="itemslist">
      <ul className="itemslist__ul">
        {allInfo.map(item => {
          return(
            <p onClick={() => flipItem(item.name)} key={item.name + new Date()}>{item.name} ({item.coordinates.length})</p>
          )
        })}
      </ul>
    </div>
  );
}
 
export default ItemsList;