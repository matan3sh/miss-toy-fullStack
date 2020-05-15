import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadToy, saveToy } from '../../store/actions/ToysActions';
import { Spinner } from '../../components/Layout/Spinner';
import { toast } from 'react-toastify';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class ToysEdit extends Component {
  state = {
    name: '',
    price: '',
    type: '',
    inStock: '',
    img: '',
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadToy(id);
    setTimeout(() => {
      this.setState({ ...this.props.toy });
    }, 1000);
  }

  onChange = (e) => {
    let { name, value } = e.target;
    value = e.target.name === 'price' ? parseInt(value) : value;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, img, price } = this.state;
    if (name === '' || price === '' || img === '') {
      toast.error('Please Fill In All Fields');
      return;
    }
    this.props.saveToy(this.state);
    this.props.history.push('/');
    toast.success('Toy Updated Successfully');
  };

  render() {
    const { toy } = this.props;
    return (
      <>
        {!toy ? (
          <Spinner />
        ) : (
          <form
            noValidate
            autoComplete='off'
            className='text-center'
            style={{ width: '100%' }}
            onSubmit={this.onSubmit}
          >
            <div className='my-4 card'>
              <div className='grid-2'>
                <div className='text-center'>
                  <img
                    src={this.state.img}
                    alt='Toy-Thumb'
                    className='toy-img-edit'
                  />
                  <TextField
                    id='filled-name'
                    label='Image Url'
                    name='img'
                    value={this.state.img}
                    onChange={this.onChange}
                    variant='filled'
                    style={{ padding: '15px 0' }}
                  />
                </div>
                <div className='my-3'>
                  <TextField
                    id='filled-name'
                    label='Name'
                    name='name'
                    value={this.state.name}
                    onChange={this.onChange}
                    variant='filled'
                    style={{ marginBottom: '15px', padding: '15px 0' }}
                  />
                  <br />
                  <TextField
                    id='filled-name'
                    label='Price'
                    name='price'
                    value={this.state.price}
                    onChange={this.onChange}
                    variant='filled'
                    style={{ marginBottom: '15px', padding: '15px 0' }}
                  />
                  <br />
                  <FormControl style={{ minWidth: '120px' }}>
                    <InputLabel id='demo-simple-select-label'>Type</InputLabel>
                    <Select
                      value={this.state.type}
                      name='type'
                      onChange={this.onChange}
                      style={{ paddingRight: '20px' }}
                    >
                      <MenuItem value='Funny'>Funny</MenuItem>
                      <MenuItem value='Adult'>Adult</MenuItem>
                      <MenuItem value='Educational'>Educational</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    style={{ marginLeft: '20px', minWidth: '120px' }}
                  >
                    <InputLabel id='demo-simple-select-label'>
                      Available
                    </InputLabel>
                    <Select
                      value={this.state.inStock}
                      name='inStock'
                      onChange={this.onChange}
                      style={{ paddingRight: '50px' }}
                    >
                      <MenuItem value={true}>In Stock</MenuItem>
                      <MenuItem value={false}>Out Of Stock</MenuItem>
                    </Select>
                  </FormControl>
                  <br />
                  <input
                    type='submit'
                    value='Update'
                    className='btn btn-primary'
                    onClick={this.onSubmit}
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </>
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
  saveToy,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToysEdit);
