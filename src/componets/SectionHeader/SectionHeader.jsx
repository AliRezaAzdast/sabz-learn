import React from "react";
import "./SectionHeader.css";
import { Link } from "react-router-dom";

export default function SectionHeader({ title, description, button }) {
  return (
    <div className="courses-header">
      <div className="courses-header__right">
        <span className="courses-header__title title">{title}</span>
        <span className="courses-header__text">{description}</span>
      </div>
      <div className="courses-header__left">
        {button ? (
          <Link to="/courses" className="courses-header__link">
            {button}
            <i className="fas fa-arrow-left courses-header__icon"></i>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
