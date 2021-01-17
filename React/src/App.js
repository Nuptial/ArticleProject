import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import './App.sass';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/detail/:id" render={(props) => <Detail {...props} />} />
        <Route path="*" render={(props) => <Home {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;