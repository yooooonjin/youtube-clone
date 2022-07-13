import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({ video: { snippet }, video, onVideoClick, display }) => {
    console.log('아이템');
    return (
      <li
        className={`${styles.container} ${
          display === 'list' ? styles.list : styles.grid
        }`}
        onClick={() => onVideoClick(video)}
      >
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
