import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
