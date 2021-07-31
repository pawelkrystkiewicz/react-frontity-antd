import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player/lazy'
import SeekerBar from './seeker-bar'
import { formatDuration, toInt } from './helper'
import { PlayerConfig } from '../../models/video'
import { PlayerState, PlayerProgress } from './models'
import { Slider } from 'antd'
import { PauseOutlined, CaretRightOutlined } from '@ant-design/icons'

const initialState: PlayerState = {
  playedSeconds: 0,
  played: 0,
  loadedSeconds: 0,
  loaded: 0,
  current: 0,
  duration: 0,
  playing: true,
  controls: true,
  muted: false,
  playbackRate: 1,
  volume: 1,
  loop: false,
  seeking: false,
}

const Player: React.FunctionComponent<PlayerConfig> = ({
  __mode,
  ...media
}) => {
  const [state, setState] = useState<PlayerState>(initialState)
  const playerRef = useRef(null)

  // handlers
  const onProgress = (progress: PlayerProgress): void => {
    const payload = progress

    if (!state.seeking) {
      payload.current = toInt(progress.playedSeconds)
    }

    setState({ ...state, ...progress })
  }

  const onDuration = (duration: number): void =>
    setState({ ...state, duration })

  const onChange = (seconds: number): void => {
    setState({ ...state, current: toInt(seconds) })
  }

  const onAfterChange = (seconds: number): void => {
    setState({ ...state, seeking: false })
    playerRef.current.seekTo(seconds)
  }

  const onSeekerMouseDown = (): void => setState({ ...state, seeking: true })
  const onTogglePlay = (): void =>
    setState({ ...state, playing: !state.playing })

  const onVolumeChange = (volume: number): void =>
    setState({ ...state, volume })

  //player non mutable config
  const config = {
    ref: playerRef,
    fallback: <span>Loading...</span>,
    onProgress,
    onDuration,
  }

  //render decision tree based on mode Playlist/Clip

  if (__mode === 'playlist') {
    // const urls  =  media.playlist
    return <div>Playlist: TODO</div>
  }

  if (__mode === 'clip' && media.clip) {
    const { title, url, chapters } = media.clip
    return (
      <div>
        {title && <h2>{title}</h2>}
        <ReactPlayer
          {...config}
          url={url}
          playing={state.playing}
          controls={state.controls}
          playbackRate={state.playbackRate}
          volume={state.volume}
          muted={state.muted}
        />
        <br />
        <Controls togglePlay={onTogglePlay} playing={state.playing} />
        <SeekerBar
          current={state.current}
          duration={state.duration}
          chapters={chapters}
          onChange={onChange}
          onAfterChange={onAfterChange}
          onSeekerMouseDown={onSeekerMouseDown}
        />
        <Volume volume={state.volume} setNewVolume={onVolumeChange} />
        <VideoStats {...state} />
      </div>
    )
  }
}

const Controls = ({ togglePlay, playing }) => (
  <div onClick={togglePlay}>
    {playing ? <PauseOutlined /> : <CaretRightOutlined />}
  </div>
)

const Volume = ({ setNewVolume, volume }) => {
  return (
    <Slider
      style={{ display: 'inline-block', height: 50 }}
      vertical
      step={0.01}
      max={1}
      value={volume}
      onChange={setNewVolume}
      tipFormatter={null}
      onAfterChange={setNewVolume}
    />
  )
}

const VideoStats = ({ playedSeconds, current, duration }) => {
  return (
    <>
      <span>
        {formatDuration(toInt(playedSeconds))}/{formatDuration(duration)}
      </span>
      <br />
      <span>{current}%</span>
    </>
  )
}

export default Player
