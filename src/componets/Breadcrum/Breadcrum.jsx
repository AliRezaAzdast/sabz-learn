import React from 'react'
import {Link} from 'react-router-dom'
import './Breadcrum.css'

export default function Breadcrum({links}) {
  return (
      <div className="breadcrumb">
      <div className="container">
        <div className="breadcrumb__content">
          <div className="breadcrumb__home-content-icon">
            <i className="fas fa-home breadcrumb__home-icon"></i>
          </div>
          <ul className="breadcrumb__list">
            {links.map(link => (
            <li key={link.id} className="breadcrumb__item">
              <Link to={link.path} className="breadcrumb__link">
                {link.title}
                {link.id !== links.length ? (<i className="fas fa-angle-left breadcrumb__icon"></i>) : null}
                
              </Link>
            </li>
            ))}
       
          </ul>
        </div>
      </div>
    </div>
  )
}
