import React from 'react';
import { Link } from 'react-router-dom';

export const ToysPreview = ({ toy, onDelete }) => {
  return (
    <Link to={`/${toy._id}`}>
      <article className='card grid-1 text-center pointer'>
        <div className='my-2'>
          <img
            style={{ width: '180px', height: '250px' }}
            src={toy.img}
            alt='Toy-Thumbnil'
            className='toy-img'
          />
        </div>
        <div>
          <h3 className='text-primary'>{toy.name}</h3>
          <ul className='list'>
            <li>
              <span className='text-grey'>{toy.type}</span>
            </li>
            <li className='my-1'>
              <span
                className='badge bg-light price-border'
                style={{ fontSize: '16px' }}
              >
                Price: {toy.price} <i className='fas fa-dollar-sign' />{' '}
              </span>
            </li>
          </ul>
        </div>
      </article>
    </Link>
  );
};
