import React from "react";

const Skeleton = ({ className = "", skeletonBg = "", rounded = true }) => {
  return (
    <div
      className={`animate-pulse ${skeletonBg ? skeletonBg : "bg-gray-200"} ${
        rounded ? "rounded" : ""
      } ${className}`}
    />
  );
};

export default Skeleton;
