import React from 'react';
import { loadToys, searchToy, removeToy } from '../store/actions/ToysActions';
import { connect } from 'react-redux';

import { Spinner } from '../components/Layout/Spinner';
import { ToysList } from '../components/Toys/ToysList';
import ToysSearch from '../components/Toys/ToysSearch';
import ToysFilter from '../components/Toys/ToysFilter';

class ToysApp extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.loadToys(), 1000);
  }

  onDelete = (id) => {
    this.props.removeToy(id);
  };

  render() {
    const { toys, filtered } = this.props;
    return (
      <div>
        {!toys.length ? (
          <Spinner />
        ) : (
          <div className='grid-1'>
            <div className='filter-search'>
              <div className='grid-1-half-half'>
                <ToysSearch />
                <ToysFilter />
              </div>
            </div>
            {filtered === null ? (
              <ToysList toys={toys} onDelete={this.onDelete} />
            ) : (
              <ToysList toys={filtered} onDelete={this.onDelete} />
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  toys: state.toysApp.toys,
  filtered: state.toysApp.filtered,
});

const mapDispatchToProps = {
  loadToys,
  searchToy,
  removeToy,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToysApp);
