import React from "react";

const ProgressBar = () => {
  return (
    <>
      <div className="progress-bar">
        <li className="list">
          Weak
          <div className="bars">
            <li className="bar orange"></li>
            <li className="bar"></li>
            <li className="bar"></li>
          </div>
        </li>
        <li className="list">
          Average
          <div className="bars">
            <li className="bar yellow"></li>
            <li className="bar yellow"></li>
            <li className="bar">
              <span className="half-yellow yellow"></span>
            </li>
          </div>
        </li>
        <li className="list">
          Improvement
          <div className="bars">
            <li className="bar orange"></li>
            <li className="bar orange"></li>
            <li className="bar"></li>
          </div>
        </li>
        <li className="list">
          CuttOff Level
          <div className="bars">
            <li className="bar blue"></li>
            <li className="bar blue"></li>
            <li className="bar blue"></li>
          </div>
        </li>
      </div>
    </>
  );
};

export default ProgressBar;
