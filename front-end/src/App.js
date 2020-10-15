import React from 'react';
import Home from './pages/Home';
import OneProduct from './pages/OneProduct';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={OneProduct} />
      </Switch>
    </Router>
  );
}

export default App;
