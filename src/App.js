import React from 'react';
import logo from './logo.svg';
import './App.css';
import CheckIn from './components/CheckIn';
import Navbar from './components/Navbar';
import CheckOut from './components/CheckOut';
import About from './components/About';
import Stay from './components/Stay';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/checkin" component={CheckIn}/>
          <Route path="/stayover" component={Stay}/>
          <Route path="/checkout" component={CheckOut}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
