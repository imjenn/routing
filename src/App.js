import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Param from './components/Param';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:param/:color1?/:color2?">
          <Param />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
