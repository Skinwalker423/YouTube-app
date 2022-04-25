import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({vidList, onVideoSelect}) => {

    const renderedList = vidList.map(video => {
        return <VideoItem onVideoSelect={onVideoSelect} vid={video} key={video.id.videoId} />
    })

    return <div className="ui celled list">
        {renderedList}
        </div>
}

export default VideoList;