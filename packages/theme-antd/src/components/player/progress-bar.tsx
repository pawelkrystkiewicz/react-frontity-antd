import React from "react";
import { Slider } from "antd";
import { formatDuration } from "./helper";

const ProgressBar = ({
  current,
  duration,
  onChange,
  onAfterChange,
  chapters
}) => {
  return (
    <Slider
      marks={createMarksFromChapters(chapters)}
      step={1}
      value={current}
      max={duration}
      onChange={onChange}
      onAfterChange={onAfterChange}
      tipFormatter={formatDuration}
    />
  );
};

export default ProgressBar;

const createMarksFromChapters = chapters => {
  let marks = {};

  chapters.forEach(
    ({ start, title }) => (marks[start] = title.substring(0, 10) + "...")
  );
  return marks;
};
