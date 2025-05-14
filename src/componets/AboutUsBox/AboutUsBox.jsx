import React from "react";

export default function AboutUsBox({title, description, svg}) {
  return (
    <div className="col-6">
      <div className="about-us__box">
        <div className="about-us__box-right">
          <i className={svg}></i>
        </div>
        <div className="about-us__box-left">
          <span className="about-us__box-title">{title}</span>
          <span className="about-us__box-text">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
