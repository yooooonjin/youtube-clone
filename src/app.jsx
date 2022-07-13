import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Detail from './components/detail/detail';
import SearchBar from './components/search_bar/search_bar';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selecedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  const onSearch = useCallback((query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  }, []);

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, []);
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <section className={styles.content}>
        {selecedVideo && (
          <div className={styles.detail}>
            <Detail video={selecedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selecedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </>
  );
}

export default App;
