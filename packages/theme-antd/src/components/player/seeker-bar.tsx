import React from 'react'
import { Slider } from 'antd'
import { formatDuration, createChapterMarks } from './helper'

const SeekerBar = ({
  current,
  duration,
  onChange,
  onAfterChange,
  onSeekerMouseDown,
  chapters,
}) => {
  return (
    <Slider
      marks={createChapterMarks(chapters)}
      step={1}
      value={current}
      max={duration}
      onChange={onChange}
      onAfterChange={onAfterChange}
      tipFormatter={formatDuration}
      onMouseDown={onSeekerMouseDown}
    />
  )
}

export default SeekerBar
