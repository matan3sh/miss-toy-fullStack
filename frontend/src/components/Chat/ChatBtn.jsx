import React from 'react';

export const ChatBtn = ({ onToggle }) => {
  return (
    <div className='gotopbtn pointer' onClick={() => onToggle()}>
      {' '}
      <i className='fas fa-comments'></i>{' '}
    </div>
  );
};
