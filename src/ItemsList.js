import React from 'react';
import StudioInfo from './data/studio_info.json';
import FloorInfo from './data/floor_info.json';
import BluePrint from './BluePrint';

const allInfo = Object.entries(StudioInfo).concat(Object.entries(FloorInfo)).map(item => {
  return {name: item[0], coordinates: item[1]}
});

allInfo.sort((a, b) => a.name.localeCompare(b.name));
 
const ItemsList = () => {
  return (
    <div className="itemslist">
      <ul className="itemslist__ul">
        {allInfo.map(item => {
          return(
            <p key={item.name + new Date()}>{item.name} ({item.coordinates.length})</p>
          )
        })}
      </ul>
      <BluePrint pucks={allInfo[6]} />
    </div>
  );
}
 
export default ItemsList;