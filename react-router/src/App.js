import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Contact from "./components/Contact";

class Header extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/contact" exact component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
