import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export class DashboardList extends React.Component {
  state = {
    img:
      'https://eralberta.ca/wp-content/uploads/2019/05/placeholder-image-300x200.jpg',
    toyId: '',
    toyName: '',
  };

  render() {
    const { toys, onDelete } = this.props;
    const { img, toyId, toyName } = this.state;
    return (
      <div className='grid-2'>
        <div className='card'>
          <Link to={`/add`}>
            <button className='btn btn-primary btn-block'>Add Toy</button>
          </Link>
          <img src={img} alt='toy-thumb' className='toy-img-dashboard my-1' />
          <h3>{toyName}</h3>
          <div className='text-center'>
            <Link to={`/${toyId}`}>
              <button className='btn btn-success'>
                <i className='fas fa-eye'></i>
              </button>
            </Link>
            <Link to={`/edit/${toyId}`}>
              <button className='btn btn-dark'>
                <i className='fas fa-edit'></i>
              </button>
            </Link>
            <button className='btn btn-danger' onClick={() => onDelete(toyId)}>
              <i className='fas fa-trash'></i>
            </button>
          </div>
        </div>

        <div>
          {toys.map((toy) => (
            <div
              key={toy._id}
              className='item grid-3'
              onClick={() =>
                this.setState({
                  toyId: toy._id,
                  img: toy.img,
                  toyName: toy.name,
                })
              }
            >
              <div>
                <h5 style={{ fontSize: '16px' }}>{toy.name}</h5>
              </div>
              <div className='text-grey'>
                Added in{' '}
                <Moment
                  className='text-bold text-primary'
                  format='MMMM DD YYYY'
                >
                  {toy.createdAt}
                </Moment>
              </div>
              <div>
                {toy.inStock ? (
                  <span
                    className='badge badge-success'
                    style={{
                      display: 'block',
                      width: '40%',
                      fontSize: '12px',
                    }}
                  >
                    Item In Stock
                  </span>
                ) : (
                  <span
                    className='badge badge-danger'
                    style={{
                      display: 'block',
                      width: '40%',
                      fontSize: '12px',
                    }}
                  >
                    Out Of Stock
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
