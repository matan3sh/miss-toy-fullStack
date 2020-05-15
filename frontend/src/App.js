import React from 'react';
import store from './store/store';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Layout/Navbar';
import { About } from './pages/About';
import Chat from './components/Chat/Chat';
import { Info } from './pages/Info';
import Dashboard from './pages/Dashboard';
import ToysApp from './pages/ToysApp.jsx';
import ToysDetails from './pages/ToysDetails';
import ToysEdit from './components/Toys/ToysEdit';
import ToysAdd from './components/Toys/ToysAdd';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import './style/global.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='container'>
          <ToastContainer />
          <Switch>
            <Route exact path='/' component={ToysApp} />
            <Route exact path='/add' component={ToysAdd} />
            <Route exact path='/about' component={About} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/info' component={Info} />
            <Route exact path='/:id' component={ToysDetails} />
            <Route exact path='/edit/:id' component={ToysEdit} />
          </Switch>
        </div>
        <Chat />
      </Router>
    </Provider>
  );
};

export default App;
