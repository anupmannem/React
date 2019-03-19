import React, { Component } from "react";
import Signup from "./Signup";
import Table from "./Table";

class App extends Component {
  render() {
    return (
      <div className="row">
        <Signup> </Signup>
        <Table> </Table>
      </div>
    );
  }
}

export default App;
