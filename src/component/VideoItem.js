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


// const vidBody = props.vid.map(v => {
//         return <a href={`https://www.youtube.com/watch?v=${v.id.videoId}`} key={v.id.videoId} target="_blank" ><img src={v.snippet.thumbnails.default} alt={v.snippet.description} /></a>
//       })

{/* <div className="description">{vid.snippet.description}</div> */}