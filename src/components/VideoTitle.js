import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="pt-40 px-12">
      <h1 className="font-bold text-3xl text-red-600">{title}</h1>
      <p className="pt-4 text-lg w-1/2">{overview}</p>
      <div className="my-2">
        <button className="bg-gray-600 text-white p-4 px-16 text-xl opacity-80 rounded-l">
          ▶ Play
        </button>
        <button className="bg-gray-600 text-white p-4 px-16 text-xl opacity-80 rounded-l mx-2">
          More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
