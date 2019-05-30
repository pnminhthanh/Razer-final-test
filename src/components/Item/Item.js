import React from 'react';
import './Item.css';

export const Item = props => {
  let itemElement = null;

  const changeMouseHandler = e => {
    props.toggle({
      type: props.elementType,
      show: !props.showMouseDrpdw,
    });
    props.changeItemValue({
      type: props.elementType,
      value: e.target.textContent,
    });
  };

  switch (props.elementType) {
    case 'delay':
      itemElement = (
        <div className="item">
          <img className="item-icon" src="" />
          <div
            className="item-text delay"
            onClick={() => {
              props.toggle({
                type: props.elementType,
                show: !props.showEditDelay,
              });
            }}
          >
            {props.value}s
          </div>
          <input
            type="number"
            className={props.showEditDelay ? 'edit-delay show ' : 'edit-delay'}
            value={props.value}
            maxLength={3}
            onChange={e =>
              props.changeItemValue({
                type: props.elementType,
                value: e.target.value,
              })
            }
            onBlur={() =>
              props.toggle({
                type: props.elementType,
                show: !props.showEditDelay,
              })
            }
          />
        </div>
      );

      break;
    case 'keyboard':
      itemElement = (
        <div className="item">
          <img className="item-icon" src="" />
          <img className="item-icon" src="" />
          <div className="item-text">{props.value}</div>
        </div>
      );
      break;
    case 'mouse':
      itemElement = (
        <div className="item">
          <img className="item-icon" src="" />
          <img className="item-icon" src="" />
          <div
            className="item-text"
            onClick={() => {
              props.toggle({
                type: props.elementType,
                show: !props.showMouseDrpdw,
              });
            }}
          >
            {props.value}
            <div
              className={
                props.showMouseDrpdw
                  ? 'mouseDropdown mouse-on'
                  : 'mouseDropdown'
              }
            >
              <div
                className="mouseOpt"
                value="left"
                onClick={e => changeMouseHandler(e)}
              >
                Left
              </div>
              <div
                className="mouseOpt"
                value="right"
                onClick={e => changeMouseHandler(e)}
              >
                Right
              </div>
              <div
                className="mouseOpt"
                value="srcoll"
                onClick={e => changeMouseHandler(e)}
              >
                Scroll
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case 'macro':
      itemElement = (
        <div className="item">
          <img className="item-icon" src="" />
          <p className="item-title">Macro:</p>
          <div
            className="item-choose"
            onClick={() => {
              props.toggle({
                type: props.elementType,
                show: !props.showMacroDrpdw,
              });
            }}
          >
            Select a macro
            <div
              className={
                props.showMacroDrpdw
                  ? 'mouseDropdown mouse-on'
                  : 'mouseDropdown'
              }
            >
              <div
                className="mouseOpt"
                onClick={() => {
                  props.toggle({
                    type: props.elementType,
                    show: !props.showMacroDrpdw,
                  });
                  props.changeItemValue({
                    type: props.elementType,
                  });
                }}
              >
                I have no idea 1
              </div>
              <div
                className="mouseOpt"
                onClick={() => {
                  props.toggle({
                    type: props.elementType,
                    show: !props.showMacroDrpdw,
                  });
                  props.changeItemValue({
                    type: props.elementType,
                  });
                }}
              >
                I have no idea 2
              </div>
              <div
                className="mouseOpt"
                onClick={() => {
                  props.toggle({
                    type: props.elementType,
                    show: !props.showMacroDrpdw,
                  });
                  props.changeItemValue({
                    type: props.elementType,
                  });
                }}
              >
                I have no idea 3
              </div>
            </div>
          </div>
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
          <p className="item-title">Switch Lightning:</p>
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
  return <div className="item-wrapper">{itemElement}</div>;
};
