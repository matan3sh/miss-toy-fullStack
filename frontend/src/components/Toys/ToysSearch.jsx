import React from 'react';

import { searchToy } from '../../store/actions/ToysActions';

import { connect } from 'react-redux';

class ToysSearch extends React.Component {
  state = { name: '' };

  onChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () =>
      this.props.searchToy(this.state.name)
    );
  };

  onSumbit = (e) => {
    e.preventDefault();
    this.props.searchToy(this.state.name);
  };

  render() {
    return (
      <div className='grid-2-op ' style={{ marginTop: '25px' }}>
        <form onSubmit={this.onSumbit} style={{ width: '100%' }}>
          <input
            type='text'
            name='name'
            placeholder='Search Toy...'
            value={this.state.name}
            onChange={this.onChange}
          />
        </form>
        <input
          type='submit'
          value='Search'
          className='btn btn-primary'
          onClick={this.onSumbit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toys: state.toysApp.toys,
  };
};

const mapDispatchToProps = {
  searchToy,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToysSearch);
