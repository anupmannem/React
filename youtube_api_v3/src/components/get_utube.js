const YTSearch = require("youtube-api-search");

YTSearch(
    { key: "AIzaSyCvFKibaoEGK7gDNsaoBn_WgfhnC78PYSk", term: "elon musk" },
    function(data) {
        // get video links and set state
        let thumbnails = [];
        let videoId = [];
        let title = [];
        const videos = {
            thumbnails: thumbnails,
            videoId: videoId,
            title: title
        };
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            title.push(data[i].snippet.title);
            thumbnails.push(data[i].snippet.thumbnails.medium.url);
            videoId.push(data[i].id.videoId);
        }
        // console.log(videos);
    }
);

module.exports = YTSearch;
