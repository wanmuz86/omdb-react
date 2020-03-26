import React from 'react';
import logo from './logo.svg';
import './App.css';
import Film from './components/Film'
import FilmDetail from './components/FilmDetail'

import {Switch, Route, BrowserRouter} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Switch>
          <Route exact path="/">
            <Film />
          </Route>
          <Route path="/films/:id" exact component={FilmDetail}/>
          <Route path="/" render={()=><div>404 not found</div>}/>
        </Switch>
        </BrowserRouter>
  );
}

export default App;
