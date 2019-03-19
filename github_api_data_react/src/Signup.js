import React, { Component } from "react";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      username: ""
    };

    onchange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="col-4">
          <div className="form-group">
            <label hmtlFor=""> </label>
            <input
              type="text"
              className="form-control"
              name="username"
              id=""
              aria-describedby="helpId"
              placeholder=""
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Signup;
