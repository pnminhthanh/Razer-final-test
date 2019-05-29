import React from 'react';
import './MenuItem.css';

export const MenuItem = props => {
  return (
    <div className="item" onClick={props.clicked}>
      <img src={props.icon} className="icon" />
      <div className="item-text">{props.text}</div>
    </div>
  );
};
