import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveToy } from '../../store/actions/ToysActions';
import cloudinaryService from '../../services/cloudinaryService';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../Layout/Error';

import { toast } from 'react-toastify';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class ToysAdd extends Component {
  state = {
    name: '',
    price: '',
    type: '',
    inStock: '',
    img: '',
    createdAt: Date.now(),
  };

  onChange = (e) => {
    let { name, value } = e.target;
    value = name === 'price' ? parseInt(value) : value;
    this.setState({ [name]: value });
  };

  onSubmit = ({ name, price, type, inStock }) => {
    this.setState({ name, price, type, inStock });
    if (this.state.img === '') {
      toast.error('Please Add an Image!');
      return;
    }
    this.props.saveToy(this.state);
    this.props.history.push('/');
    toast.success('Toy Added Successfully');
  };

  uploadImage = ({ target }) => {
    cloudinaryService
      .upload(target.files)
      .then((img) => this.setState({ img: img }));
  };
  validationSchema = () =>
    Yup.object().shape({
      name: Yup.string().required('Toy Must Have a Name'),
      price: Yup.number().required('Toy Must Have a Price'),
      type: Yup.string().required('Toy Must Have a Type'),
      inStock: Yup.bool().required('Must Know Availability'),
    });

  render() {
    return (
      <Formik
        initialValues={{ name: '', price: '', type: '', inStock: '' }}
        validationSchema={this.validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          this.onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            noValidate
            autoComplete='off'
            className='text-center'
            style={{ width: '100%' }}
            onSubmit={handleSubmit}
          >
            <div className='my-4 card'>
              <div className='grid-2'>
                <div className='text-center'>
                  <img
                    src={this.state.img}
                    alt='Toy-Thumb'
                    className='toy-img-edit'
                  />
                  <input
                    type='file'
                    placeholder='Upload Image'
                    onChange={this.uploadImage}
                    name='img'
                  />
                </div>
                <div className='my-3'>
                  <TextField
                    id='name'
                    label='Name'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.name && errors.name ? 'has-error' : null}
                    variant='filled'
                    style={{ paddingTop: '15px' }}
                  />
                  <Error touched={touched.name} message={errors.name} />
                  <TextField
                    id='price'
                    label='Price'
                    name='price'
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      touched.price && errors.name ? 'has-error' : null
                    }
                    style={{ paddingTop: '15px' }}
                    variant='filled'
                  />
                  <Error touched={touched.price} message={errors.price} />
                  <FormControl style={{ minWidth: '120px' }}>
                    <InputLabel id='demo-simple-select-label'>Type</InputLabel>
                    <Select
                      id='type'
                      name='type'
                      value={values.type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.type && errors.type ? 'has-error' : null
                      }
                      style={{ paddingRight: '20px' }}
                    >
                      <MenuItem value='Funny'>Funny</MenuItem>
                      <MenuItem value='Adult'>Adult</MenuItem>
                      <MenuItem value='Educational'>Educational</MenuItem>
                    </Select>
                    <Error touched={touched.type} message={errors.type} />
                  </FormControl>
                  <FormControl
                    style={{ marginLeft: '20px', minWidth: '120px' }}
                  >
                    <InputLabel id='demo-simple-select-label'>
                      Available
                    </InputLabel>
                    <Select
                      id='inStock'
                      name='inStock'
                      value={values.inStock}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.inStock && errors.inStock ? 'has-error' : null
                      }
                      style={{ paddingRight: '50px' }}
                    >
                      <MenuItem value={true}>In Stock</MenuItem>
                      <MenuItem value={false}>Out Of Stock</MenuItem>
                    </Select>
                    <Error touched={touched.inStock} message={errors.inStock} />
                  </FormControl>
                  <br />
                  <input
                    type='submit'
                    value='Add'
                    className='btn btn-primary'
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toy: state.toysApp.toy,
  };
};

const mapDispatchToProps = {
  saveToy,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToysAdd);
