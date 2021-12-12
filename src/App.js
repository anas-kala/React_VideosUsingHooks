import './App.css';
import React, { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVedio] = useState(null);

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    setVideos(response.data.items);
    setSelectedVedio(response.data.items[0]);
  }

  const onSelectVideo = (video) => {
    setSelectedVedio(video);
  }

  useEffect(() => {
    onTermSubmit('buildings');
  }, [])


  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onSelectVideo={onSelectVideo} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
