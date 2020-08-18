import React from 'react';
import StudioInfo from './data/studio_info.json';
import FloorInfo from './data/floor_info.json';

const allInfo = Object.entries(StudioInfo).concat(Object.entries(FloorInfo)).map(item => {
  return {name: item[0], coordinates: item[1]}
});

allInfo.sort((a, b) => a.name.localeCompare(b.name));

console.log(allInfo);
 
const ItemsList = () => {
  return (
    <div className="itemslist">
      <ul className="itemslist__ul">
        {allInfo.map(item => {
          return(
            <p>{item.name} ({item.coordinates.length})</p>
          )
        })}
        {}
      </ul>
    </div>
  );
}
 
export default ItemsList;