import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/lazy";
import ProgressBar from "./progress-bar";
import { formatDuration } from "./helper";

const toInt = n => Math.trunc(n);

const Player = ({ playlist, clip }) => {
  const { title, url, chapters } = clip;
  const [progress, setProgress] = useState({
    playedSeconds: 0,
    played: 0,
    loadedSeconds: 0,
    loaded: 0
  });
  const [duration, setDuration] = useState(0);

  const playerRef = useRef(null);

  const onProgress = e =>
    setProgress({ ...e, current: toInt(e.playedSeconds) });
  const onDuration = e => setDuration(e);
  const onChange = value => {};
  const onAfterChange = value => {
    playerRef.current.seekTo(value)
  };
  const config = {
    ref: playerRef,
    controls: true,
    playbackRate: 1,
    fallback: <span>Loading...</span>,
    onProgress,
    onDuration
  };

  return (
    <div>
      {title && <span>{title}</span>}
      <br />
      <ReactPlayer {...config} url={url} />
      <br />
      <VideoStats {...{ ...progress, duration }} />
      <ProgressBar
        current={progress.current}
        duration={duration}
        chapters={chapters}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </div>
  );
};

const VideoStats = ({ playedSeconds, current, duration }) => {
  return (
    <>
      <span>
        {formatDuration(toInt(playedSeconds))}/{formatDuration(duration)}
      </span>
      <br />
      <span>{current}%</span>
    </>
  );
};

export default Player;
