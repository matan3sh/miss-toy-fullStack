import React from 'react';
import Moment from 'react-moment';

import { connect } from 'react-redux';
import { Spinner } from '../components/Layout/Spinner';
import { loadToy } from '../store/actions/ToysActions';

class ToysDetails extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    setTimeout(() => this.props.loadToy(id), 500);
  }

  render() {
    const { toy } = this.props;
    return (
      <div>
        {!toy ? (
          <Spinner />
        ) : (
          <div className='grid-2 my-3'>
            <div className='text-center'>
              <img src={toy.img} alt='Toy-Thumb' className='toy-img' />
              {toy.inStock ? (
                <span
                  className='badge badge-success'
                  style={{ display: 'block', width: '100%', fontSize: '20px' }}
                >
                  Item In Stock
                </span>
              ) : (
                <span
                  className='badge badge-danger'
                  style={{ display: 'block', width: '100%', fontSize: '20px' }}
                >
                  Out Of Stock
                </span>
              )}
            </div>
            <div>
              <h1>{toy.name}</h1>
              <p className='text-grey'>{toy.type}</p>
              <Moment
                className='text-bold text-primary'
                format='MMMM DD YYYY, h:mm:ss a'
              >
                {toy.createdAt}
              </Moment>
              <hr />
              <div className='text-grey'>
                <span style={{ fontSize: '28px' }}>Free Shipping </span>
                <span>
                  <i className='fas fa-shipping-fast mx-1 fa-2x' />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toy: state.toysApp.toy,
  };
};

const mapDispatchToProps = {
  loadToy,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToysDetails);
