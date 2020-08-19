import React, { useState } from 'react';
import ItemsList from './ItemsList';
import './App.css';
import StudioInfo from './data/studio_info.json';
import FloorInfo from './data/floor_info.json';
import BluePrint from './BluePrint';
import { ItemsContext } from './context/ItemsContext';

const allInfo = Object.entries(StudioInfo).concat(Object.entries(FloorInfo)).map(item => {
  return {name: item[0], coordinates: item[1]}
});

allInfo.sort((a, b) => a.name.localeCompare(b.name));

const App = () => {

  const [itemsContext, setItemsContext] = useState({
    bathrooms: true,
    closets: true,
    doors: true,
    floors: true,
    generic_rooms: true,
    kitchens: true,
    pucks: true,
    windows: true
  });

  return (
    <div className="App">
      <ItemsContext.Provider value={[itemsContext, setItemsContext]}>
        <ItemsList allInfo={allInfo} />
        <BluePrint 
          bathrooms={allInfo[0]}
          closets={allInfo[1]}
          doors={allInfo[2]}
          floors={allInfo[3]}
          genericRooms={allInfo[4]}
          kitchens={allInfo[5]} 
          pucks={allInfo[6]}
          windows={allInfo[7]} 
        />
      </ItemsContext.Provider>
    </div>
  );
}

export default App;
