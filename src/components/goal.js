import React, { useMemo } from "react";
import Progress from "./progress";

const Goal = ({ name, goalProgress, goalTarget, bankName }) => {
  const progress = useMemo(
    () => Math.round((100 * goalProgress) / goalTarget),
    [goalProgress, goalTarget]
  );
  return (
    <div style={{ borderWidth: 1, borderColor: "black", borderStyle: "solid" }}>
      <h4>{name}</h4>
      <div>
        <p>Target: ${goalTarget.toLocaleString()}</p>
        <p>Progress: ${goalProgress.toLocaleString()}</p>
      </div>
      <div>
        <p>Receiving Account</p>
        <p>Account Bank: {bankName}</p>
      </div>
      <div>Progress: {progress}%</div>
      <Progress percentage={progress} />
    </div>
  );
};

export default Goal;
