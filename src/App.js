import './assets/scss/global.scss';
import './App.scss';
import Navbar from './cmps/NavBar';
import Home from './pages/Home'
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadData } from './store/actions/userActions';

function _App({loadData}) {

  const HomeRoute = (props) => {
    return <Route {...props} />;
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      startConnection();
      setIsLoaded(true);
    }
  });

  function startConnection() {
    loadData()
  }
  return (
    
    <div className="App">
     <Router>
          <Navbar />
            <Switch>
              <HomeRoute path="/" component={Home} />
            </Switch>
      </Router>
    </div>
  );
}

const mapDispatchToProps = {
  loadData
};

export default connect(null, mapDispatchToProps)(_App);
