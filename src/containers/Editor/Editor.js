import React, { useRef, useState } from 'react';
import './Editor.css';
import { Item } from '../../components/Item/Item';
export const Editor = props => {
  const [showEditDelay, setShowEditDelay] = useState(false);
  const [showMouseDrpdw, setShowMouseDrpdw] = useState(false);
  const [showMacroDrpdw, setShowMacroDrpdw] = useState(false);

  const elementRef = useRef(null);
  const itemElementArray = [];

  for (let key in props.listProfiles) {
    itemElementArray.push({ id: key, config: props.listProfiles[key] });
  }

  const toggle = e => {
    switch (e.type) {
      case 'delay':
        setShowEditDelay(e.show);
        break;
      case 'keyboard':
        break;
      case 'mouse':
        setShowMouseDrpdw(e.show);
        break;
      case 'macro':
        setShowMacroDrpdw(e.show);
        break;
      case 'switchDevice':
        break;
      case 'switchLighting':
        break;
      case 'launch':
        break;
      default:
        break;
    }
  };

  return (
    <div className="editor">
      {itemElementArray.map(item => (
        <Item
          ref={elementRef}
          elementType={item.config.type}
          value={item.config.value}
          toggle={e => toggle(e)}
          showEditDelay={showEditDelay}
          showMouseDrpdw={showMouseDrpdw}
          showMacroDrpdw={showMacroDrpdw}
          changeItemValue={item => props.changeItemValue(item)}
        />
      ))}
    </div>
  );
};
