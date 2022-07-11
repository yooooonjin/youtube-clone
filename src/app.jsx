import React, { useEffect, useState } from 'react';
import './app.css';
import SearchBar from './components/search_bar/search_bar';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  const onSearch = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
