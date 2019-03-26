import React, { Component } from "react";

export default class ListVideoItems extends Component {
    render() {
        return (
            <div>
                <h1>thumbnail of videos here</h1>
                {this.props.video};
            </div>
        );
    }
}
