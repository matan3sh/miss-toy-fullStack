import React from 'react';
import { ToysPreview } from './ToysPreview.jsx';

export const ToysList = ({ toys, onDelete }) => {
  return (
    <div className='grid-4'>
      {toys.map((toy) => (
        <ToysPreview key={toy._id} toy={toy} onDelete={onDelete} />
      ))}
    </div>
  );
};
