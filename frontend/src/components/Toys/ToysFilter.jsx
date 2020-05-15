import React from 'react';
import {
  filterToys,
  sortToys,
  inStock,
  clearFilter,
} from '../../store/actions/ToysActions';
import { connect } from 'react-redux';

class ToysFilter extends React.Component {
  state = { toggle: true };

  onType = (value) => {
    this.props.filterToys(this.props.toys, value);
  };

  onSort = (value) => {
    this.props.sortToys(this.props.toys, value);
  };

  onStock = () => {
    this.setState(({ toggle }) => ({ toggle: !toggle }));
    if (this.state.toggle) this.props.inStock(this.props.toys);
    else this.props.clearFilter();
  };

  render() {
    const types = this.props.toys.map((toy) => toy.type);
    const uniqueTypes = [...new Set(types)];
    return (
      <div className='flex-center'>
        <div className='grid-3'>
          <div className='filter' style={{ marginTop: '25px' }}>
            <input
              type='checkbox'
              value='Stock'
              onChange={(e) => this.onStock()}
            />
            <label style={{ marginLeft: '5px' }}> In Stock</label>
          </div>
          <div>
            <label>Type</label>
            <select onChange={(e) => this.onType(e.target.value)}>
              <option value='All'>All</option>
              {uniqueTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Sort</label>
            <select onChange={(e) => this.onSort(e.target.value)}>
              <option value='Newest'>Newest</option>
              <option value='Name'>Name</option>
              <option value='Price'>Price</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toys: state.toysApp.toys,
  };
};

const mapDispatchToProps = { filterToys, sortToys, inStock, clearFilter };

export default connect(mapStateToProps, mapDispatchToProps)(ToysFilter);
