import React, { useRef, useEffect } from 'react';
import './Item.css';
import down from '../../assets/icons/download.svg';
import delay from '../../assets/icons/clock-circular-outline.svg';
import keyboard from '../../assets/icons/keyboard.svg';
import mouse from '../../assets/icons/mouse.svg';
import device from '../../assets/icons/repeat.svg';
import lighting from '../../assets/icons/sun.svg';
import macro from '../../assets/icons/macro.JPG';
import launch from '../../assets/icons/youtube.svg';

export const Item = props => {
  let itemElement = null;
  let inputRef = useRef();
  let mouseRef = useRef();
  let macroRef = useRef();
  let keyboardRef = useRef();
  let deviceRef = useRef();
  let lightingRef = useRef();
  let launchRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', clickOutsideHandler);
    return () => document.removeEventListener('mousedown', clickOutsideHandler);
  });

  const clickOutsideHandler = e => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      props.closeDelay();
    } else if (mouseRef.current && !mouseRef.current.contains(e.target)) {
      props.closeMouse();
    } else if (macroRef.current && !macroRef.current.contains(e.target)) {
      props.closeMacro();
    } else if (keyboardRef.current && !keyboardRef.current.contains(e.target)) {
      props.closeKeyboard();
    } else if (deviceRef.current && !deviceRef.current.contains(e.target)) {
      props.closeDevice();
    } else if (lightingRef.current && !lightingRef.current.contains(e.target)) {
      props.closeLighting();
    } else if (launchRef.current && !launchRef.current.contains(e.target)) {
      props.closeLaunch();
    }
  };

  const changeValueHandler = e => {
    props.toggle({
      type: props.elementType,
      show: false,
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
          <img className="item-icon" src={delay} />
          <div
            className="item-text delay"
            onClick={() => {
              props.toggle({
                type: 'delay',
                show: !props.showEditDelay,
              });
            }}
          >
            {props.value}s
          </div>
          <div className="input-edit">
            <input
              id={props.id}
              ref={inputRef}
              type="number"
              className={
                props.showEditDelay ? 'edit-delay show ' : 'edit-delay'
              }
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
        </div>
      );

      break;
    case 'keyboard':
      itemElement = (
        <div className="item">
          <img className="item-icon" src={keyboard} />
          <img className="item-icon" src={down} />
          <div
            id={props.id}
            ref={keyboardRef}
            className="item-text"
            onClick={() => {
              props.toggle({
                type: 'keyboard',
                show: !props.showKeyboardDrpdw,
              });
            }}
          >
            {props.value}
            <div
              className={
                props.showKeyboardDrpdw
                  ? 'mouseDropdown mouse-on'
                  : 'mouseDropdown'
              }
            >
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                key 1
              </div>
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                key 2
              </div>
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                key 3
              </div>
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                key 4
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case 'mouse':
      itemElement = (
        <div className="item">
          <img className="item-icon" src={mouse} />
          <img className="item-icon" src={down} />
          <div
            ref={mouseRef}
            id={props.id}
            className="item-text"
            onClick={() => {
              props.toggle({
                type: 'mouse',
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
                onClick={e => changeValueHandler(e)}
              >
                Left
              </div>
              <div
                className="mouseOpt"
                value="right"
                onClick={e => changeValueHandler(e)}
              >
                Right
              </div>
              <div
                className="mouseOpt"
                value="srcoll"
                onClick={e => changeValueHandler(e)}
              >
                Scroll
              </div>
            </div>
          </div>
        </div>
      );
      console.log(props.elementType);

      break;
    case 'macro':
      itemElement = (
        <div className="item">
          <img className="item-icon" src={macro} />
          <p className="item-title">Macro:</p>
          <div
            id={props.id}
            ref={macroRef}
            className="item-choose"
            onClick={() => {
              props.toggle({
                type: 'macro',
                show: !props.showMacroDrpdw,
              });
            }}
          >
            {props.value !== null ? props.value : 'Select a macro'}
            <div
              className={
                props.showMacroDrpdw
                  ? 'mouseDropdown mouse-on'
                  : 'mouseDropdown'
              }
            >
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                I have no idea 1
              </div>
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                I have no idea 2
              </div>
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                I have no idea 3
              </div>
            </div>
          </div>
        </div>
      );
      console.log(props.elementType);

      break;
    case 'switchDevice':
      itemElement = (
        <div className="item">
          <img className="item-icon" src={device} />
          <div
            id={props.elementType}
            ref={deviceRef}
            className="item-choose"
            onClick={() => {
              props.toggle({
                type: 'switchDevice',
                show: !props.showDeviceDrpdw,
              });
            }}
          >
            {props.value !== null ? props.value : ' Switch Device Profile'}
            <div
              className={
                props.showDeviceDrpdw
                  ? 'mouseDropdown mouse-on'
                  : 'mouseDropdown'
              }
            >
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                Device A
              </div>
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                Device B
              </div>
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                Device C
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case 'switchLighting':
      itemElement = (
        <div className="item">
          <img className="item-icon" src={lighting} />
          <p className="item-title">Switch Lightning:</p>
          <p
            id={props.elementType}
            ref={lightingRef}
            className="item-choose"
            onClick={() => {
              props.toggle({
                type: 'switchLighting',
                show: !props.showLightingDrpdw,
              });
            }}
          >
            {props.value !== null ? props.value : 'Select Chroma Effect'}
            <div
              className={
                props.showLightingDrpdw
                  ? 'mouseDropdown mouse-on'
                  : 'mouseDropdown'
              }
            >
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                Chroma Effect 1
              </div>
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                Chroma Effect 2
              </div>
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                Chroma Effect 3
              </div>
            </div>
          </p>
        </div>
      );
      break;
    case 'launch':
      itemElement = (
        <div className="item">
          <img className="item-icon" src={launch} />
          <div
            id={props.elementType}
            ref={launchRef}
            className="item-text"
            onClick={() => {
              props.toggle({
                type: 'launch',
                show: !props.showLaunchDrpdw,
              });
            }}
          >
            {props.value !== null ? props.value : 'Program or Website'}
            <div
              className={
                props.showLaunchDrpdw
                  ? 'mouseDropdown mouse-on'
                  : 'mouseDropdown'
              }
            >
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                Program
              </div>
              <div className="mouseOpt" onClick={e => changeValueHandler(e)}>
                Website
              </div>
            </div>
          </div>
        </div>
      );
      break;
    default:
      break;
  }
  return <div className="item-wrapper">{itemElement}</div>;
};
