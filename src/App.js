import './App.css';
import React, { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import useVideos from './hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVedio] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVedio(videos[0]);
  }, [videos]);


  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onSelectVideo={(video) => setSelectedVedio(video)} />
            {/* or equivalently, because you are using the same one parameter in the arrow function (in the line above), you can also write it as follows:
            <VideoList videos={videos} onSelectVideo={setSelectedVedio} /> */}

          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
