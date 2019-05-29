import React from 'react';
import './Item.css';

export const Item = props => {
  let itemElement = null;
  switch (props.elementType) {
    case 'delay':
      itemElement = (
        <div className="item">
          <img className="item-icon" src="" />
          <p className="item-text">{props.value}s</p>
        </div>
      );

      break;
    case 'keyboard':
      itemElement = (
        <div className="item">
          <img className="item-icon" src="" />
          <img className="item-icon" src="" />
          <p className="item-text">{props.value}</p>
        </div>
      );
      break;
    case 'mouse':
      itemElement = (
        <div className="item">
          <img className="item-icon" src="" />
          <img className="item-icon" src="" />
          <p className="item-text">{props.value}</p>
        </div>
      );
      break;
    case 'macro':
      itemElement = (
        <div className="item">
          <img className="item-icon" src="" />
          <p className="item-text">Macro:</p>
          <p className="item-choose">Select a macro</p>
        </div>
      );
      break;
    case 'switchDevice':
      itemElement = (
        <div className="item">
          <img className="item-icon" src="" />
          <p className="item-choose">Switch Device Profile</p>
        </div>
      );
      break;
    case 'switchLighting':
      itemElement = (
        <div className="item">
          <img className="item-icon" src="" />
          <p className="item-text">Switch Lightning:</p>
          <p className="item-choose">Select Chroma Effect</p>
        </div>
      );
      break;
    case 'launch':
      itemElement = (
        <div className="item">
          <img className="item-icon" src="" />
          <p className="item-text">Program or Website</p>
        </div>
      );
      break;
    default:
      break;
  }
  console.log(itemElement);
  return <div className="item-wrapper">{itemElement}</div>;
};
