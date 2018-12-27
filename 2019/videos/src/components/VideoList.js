import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });
  // props.videos : our Array of Videos from our API request
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
