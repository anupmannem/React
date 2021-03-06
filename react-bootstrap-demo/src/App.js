import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

import { 
	Button, 
	Navbar, 
	Nav, 
	NavItem, 
	NavLink } from "reactstrap";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Contact from "./components/Contact";

class Header extends React.Component {
  render() {
    return (
			<Nav>
				<NavItem>
					<NavLink tag={Link} to="/">Home</NavLink>
					{/* Link - routes to endpoint without reload */}
					{/* <NavLink href="/">Home</NavLink> */}
					{/* href="" routes to endpoint with reload */}
          {/* <Button variant="outline-primary"
						tag={Link} to="/"
					>
						Home
					</Button> */}
				</NavItem>
        <NavItem>
					<NavLink tag={Link} to="/profile">Profile</NavLink>
					{/* <Button variant="outline-primary"
						tag={Link} to="/profile"
					>          	
						Profile
					</Button> */}
        </NavItem>
				<NavItem>
					<NavLink tag={Link} to="/posts">Posts</NavLink>
					{/* <Button variant="outline-primary"
						tag={Link} to="/posts"
					>						
						Posts
					</Button> */}
        </NavItem>
				<NavItem>
					<NavLink tag={Link} to="/contact">Contact</NavLink>
					{/* <Button variant="outline-primary"
						tag={Link} to="/contact"
					>						
						Contact
					</Button> */}
        </NavItem>
			</Nav>
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
