import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Calendar from './components/pages/Calendar';
import About from './components/pages/About';
import Profile from './components/pages/Profile';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/calendar' component={Calendar} />
            <Route exact path='/about' component={About} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
