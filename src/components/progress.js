import React from "react";

const Progress = ({ percentage }) => {
  return (
    <div style={{ display: "flex", width: 600, height: 20 }}>
      <div
        style={{
          backgroundColor: "green",
          width: `${percentage}%`,
          height: 20,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "green",
          borderStyle: "solid",
          width: `${100 - percentage}%`,
          height: 18,
        }}
      ></div>
    </div>
  );
};

export default Progress;
