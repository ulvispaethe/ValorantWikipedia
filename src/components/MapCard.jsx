import React from 'react';

const MapCard = ({ map }) => {
  return (
    <div className='flex flex-col gap-3 w-[450px] rounded-lg shadow-md items-center'>
      <div>
        <img className='overflow-hidden w-[100%]' src={map?.listViewIcon} alt="" />
      </div>
      <div>
        <img className='overflow-hidden w-[100%]' src={map?.displayIcon} alt="" />
      </div>
      <h2 className='font-extrabold text-2xl'>{map?.displayName}</h2>
      {map?.narrativeDescription ? (
        <p className='font-bold text-medium p-2'>{map.narrativeDescription}</p>
      ) : (
        <p className='font-bold text-medium p-2'>There is no information about this map</p>
      )}
    </div>
  );
};

export default MapCard;
