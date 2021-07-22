// == Import npm
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'src/pages/Home';
import Detail from 'src/pages/Detail';

// == Composant
const App = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/flag/:codeCountry" component={Detail} />
      </Switch>
    </BrowserRouter>
  </div>
);

// == Export
export default App;
