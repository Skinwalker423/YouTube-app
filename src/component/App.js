import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import './App.css';
import useVideo from "../hooks/SearchVideo";


const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [vidList, search] = useVideo('trending');

  useEffect(() => {
       setSelectedVideo(vidList[0])
  }, [vidList])


  return (
      <div className="ui container">
        <h1>YouTube API</h1>
        <SearchBar
          onSubmitApiCall={search}
        />
        <div>{vidList.length} results found</div>
        <div id="videoDisplay" className="ui grid">
          <div className="ui row" id="vidContent">
            <div className="eleven wide column">
              <VideoDetails
                selectedVideo={selectedVideo}
                vidList={vidList}
              />
            </div>
            <div className="5 wide column">
              <VideoList 
                vidList={vidList} 
                onVideoSelect={setSelectedVideo}
                // (video) => setSelectedVideo(video) is the same as setSelectedVideo if the parameter is the same as the setter value
              />
            </div>  
          </div>
        </div>
      </div>
    )


}


export default App;



