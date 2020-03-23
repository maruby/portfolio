import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './Components/Home'
import Menu from './Components/Menu'
import Page from './Components/Page'

function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path="/Menu" component={Menu}/>
        <Route path="/:url" children={<Page />} />
      </Switch>
    </div>
  );
}

export default App;
