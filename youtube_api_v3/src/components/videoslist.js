import React, { Component } from "react";

export default class VideoListing extends Component {
    // constructor() {
    // 	super();
    // 	this.state = {
    // 		videos: [],
    // 	}
    // get data from youtube api
    // YTSearch({ key: 'AIzaSyCvFKibaoEGK7gDNsaoBn_WgfhnC78PYSk' , term: 'elon musk'},
    // 	function(data) {
    // 		for(let i=0; i<data.length; i++) {
    // 			this.setState = { video: this.state.videos.push('www.youtube.com/watch?v='+data[i].id.videoId) }
    // 		}
    // 	});
    // }

    render() {
        return (
            <div
                style={{
                    border: "1px solid black",
                    height: "600px",
                    width: "400px"
                }}
            >
                <h1>Listing of videos here</h1>
                {/* <ListVideoItems /> */}
            </div>
        );
    }
}
