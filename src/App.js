import React from 'react';
import DiscoveryUi from './components/DiscoveryHome';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SideImage from '../src/components/SideImage';

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/" exact component={DiscoveryUi} />
    <Route path="/discoveryHome" exact component={DiscoveryUi} />
    <Route path="/side" exact component={SideImage} />
    <Route path="*" component={DiscoveryUi} />
    </Switch>
  </Router>
  );
}

export default App;
