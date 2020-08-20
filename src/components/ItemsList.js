import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ItemsContext } from '../context/ItemsContext';
import '../style/ItemsList.scss';
 
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
    <div className="itemslist__container">
      <div className="itemslist">
        <div className="itemslist__header">
          <h3>Elements</h3>
        </div>
        <ul className="itemslist__ul">
          {allInfo.map(item => {
            return(
              <div className="itemslist__li-div" key={item.name + new Date()}>
                <input type="checkbox" className="itemslist__input" checked={itemsContext[item.name]} onChange={() => flipItem(item.name)} />
                <p onClick={() => flipItem(item.name)}>{item.name} ({item.coordinates.length})</p>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
 
export default ItemsList;

ItemsList.propTypes = {
  allInfo: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      coordinates: PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.arrayOf(
            PropTypes.number.isRequired
          )
        )
      )
    })
  )
}