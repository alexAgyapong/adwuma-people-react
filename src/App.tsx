import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import useGet from './shared/hooks/useGet';
import EmployeeDetail from './employee-detail/EmployeeDetail';
import EmployeeEdit from './employee-edit/EmployeeEdit';

function App() {
  const deptUrl = 'http://localhost:3001/departments';
  const { data } = useGet(deptUrl);
  let res = localStorage.getItem('departments') as string;
  if (!JSON.parse(res)) { localStorage.setItem('departments', JSON.stringify(data)) }
  // const getDeptsFromLocalStorage = () => {
  //   let res = localStorage.getItem('departments') as string;
  //   if (!res) { localStorage.setItem('departments', JSON.stringify(data)) }
  // }
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/edit/:id"><EmployeeEdit/></Route>
          <Route path="/detail/:id"><EmployeeDetail/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
