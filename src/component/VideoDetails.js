import React from "react";

const VideoDetails = ({selectedVideo}) => {
    if(!selectedVideo){
        return <div className="defaultDisplay"><img src="../logo512.png" /></div>
    }
    return (
        <div id="videoDetails">
            <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} />
            </div>
            <div className="ui segment">
            <h4>{selectedVideo.snippet.title}</h4>
            <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetails;