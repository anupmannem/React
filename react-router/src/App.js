import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
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
