import React, { useRef, useState, useEffect } from 'react';
import './Editor.css';
import { Item } from '../../components/Item/Item';
export const Editor = props => {
  const [showEditDelay, setShowEditDelay] = useState(false);
  const [showMouseDrpdw, setShowMouseDrpdw] = useState(false);
  const [showMacroDrpdw, setShowMacroDrpdw] = useState(false);
  const [showKeyboardDrpdw, setShowKeyboardDrpdw] = useState(false);
  const [showDeviceDrpdw, setShowDeviceDrpdw] = useState(false);
  const [showLightingDrpdw, setShowLightingDrpdw] = useState(false);
  const [showLaunchDrpdw, setShowLaunchDrpdw] = useState(false);

  const elementRef = useRef(null);
  const itemElementArray = [];

  for (let key in props.listProfiles) {
    itemElementArray.push({ id: key, config: props.listProfiles[key] });
  }

  const toggle = e => {
    console.log(e);
    switch (e.type) {
      case 'delay':
        setShowEditDelay(e.show);
        break;
      case 'keyboard':
        setShowKeyboardDrpdw(e.show);
        break;
      case 'mouse':
        setShowMouseDrpdw(e.show);
        break;
      case 'macro':
        setShowMacroDrpdw(e.show);
        break;
      case 'switchDevice':
        setShowDeviceDrpdw(e.show);
        break;
      case 'switchLighting':
        setShowLightingDrpdw(e.show);
        break;
      case 'launch':
        setShowLaunchDrpdw(e.show);
        break;
      default:
        break;
    }
  };

  const closeDelay = () => {
    setShowEditDelay(false);
  };

  const closeMouse = () => {
    setShowMouseDrpdw(false);
  };

  const closeMacro = () => {
    setShowMacroDrpdw(false);
  };
  const closeKeyboard = () => {
    setShowKeyboardDrpdw(false);
  };

  const closeDevice = () => {
    setShowDeviceDrpdw(false);
  };

  const closeLighting = () => {
    setShowLightingDrpdw(false);
  };
  const closeLaunch = () => {
    setShowLaunchDrpdw(false);
  };

  return (
    <div className="editor">
      {itemElementArray.map(item => (
        <Item
          id={item.config.type}
          ref={elementRef}
          elementType={item.config.type}
          value={item.config.value}
          toggle={e => toggle(e)}
          showEditDelay={showEditDelay}
          showMouseDrpdw={showMouseDrpdw}
          showMacroDrpdw={showMacroDrpdw}
          showKeyboardDrpdw={showKeyboardDrpdw}
          showDeviceDrpdw={showDeviceDrpdw}
          showLightingDrpdw={showLightingDrpdw}
          showLaunchDrpdw={showLaunchDrpdw}
          changeItemValue={item => props.changeItemValue(item)}
          closeDelay={closeDelay}
          closeMouse={closeMouse}
          closeMacro={closeMacro}
          closeKeyboard={closeKeyboard}
          closeDevice={closeDevice}
          closeLighting={closeLighting}
          closeLaunch={closeLaunch}
        />
      ))}
    </div>
  );
};
