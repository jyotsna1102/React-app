import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login page</h1>
        </Route>

        {/*this is default */}
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      </div>
      </Router>
      ); 
    }
    {
    /* we need a React-ROUTER*/
    }

    {
    /*localhost.com*/
    }

    {
    /* localhost.com/checkout*/
    }

    {
    /* localhost.com/login*/
    }


export default App;
