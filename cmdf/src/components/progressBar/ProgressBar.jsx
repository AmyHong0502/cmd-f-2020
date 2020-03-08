import React from "react";

export default function ProgressBar(props) {
  return (
    <div style={{ display: "flex", margin: "8px 0" }}>
      <div
        style={{
          position: "relative",
          height: 16,
          width: 320,
          background: "rgba(255, 165, 0, 0.5)" /* orange */,
          borderRadius: 50
        }}
      >
        <Bar percentage={props.percentage} />
      </div>
      <span
        style={{ fontSize: "0.8rem", marginLeft: 8 }}
      >{`${props.percentage}/100`}</span>
    </div>
  );
}

const Bar = props => {
  return (
    <div
      style={{
        width: `${props.percentage}%`,
        height: "100%",
        transition: "width .2s ease-in",
        background: "orange",
        borderRadius: "inherit"
      }}
    />
  );
};
