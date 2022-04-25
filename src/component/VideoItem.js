import React from "react";
import './VideoItem.css';

const VideoItem = ({vid, onVideoSelect}) => {

    return (
    <div onClick={() => onVideoSelect(vid)} className="item" id="item">
        <img className="ui image" src={vid.snippet.thumbnails.medium.url} alt={vid.snippet.title} />
        <div className="content">
            <div className="header">{`${vid.snippet.title} Test`}</div>
        </div>
    </div>
    )
}

export default VideoItem;

