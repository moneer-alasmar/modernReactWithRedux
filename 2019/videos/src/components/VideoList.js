import React from "react";

const VideoList = props => {
  // props.videos : our Array of Videos from our API request
  return <div>{props.videos.length}</div>;
};

export default VideoList;
