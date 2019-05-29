import React, { useState, useReducer, useEffect } from 'react';
import { SideBar } from '../../components/SideBar/SideBar';
import { ProfileBar } from '../../containers/ProfileBar/ProfileBar';
import { Editor } from '../../containers/Editor/Editor';
import { listMenuItems } from '../../models/SideBarItemModel';
//css
import './Layout.css';
import '../../assets/css/main.css';
import '../../assets/fonts/razerf5.css';
import '../../assets/fonts/roboto.css';
import '../../assets/css/profile-bar.css';
import '../../assets/css/dropdown.css';
// import '../../assets/css/tooltip.css';

const LayoutBuilder = () => {
  const [listProfiles, setListProfiles] = useState([]);

  const addMacro = props => {
    const list = [...listProfiles];

    if (listProfiles.find(i => i.type == props) === undefined) {
      var item = null;

      switch (props) {
        case 'keyboard':
          item = { type: 'keyboard', value: 'End' };
          break;
        case 'mouse':
          item = { type: 'mouse', value: 'left' };
          break;
        case 'macro':
          item = { type: 'macro', value: 0 };
          break;
        case 'switchDevice':
          item = { type: 'switchDevice', value: '' };
          break;
        case 'switchLighting':
          item = { type: 'switchLighting', value: '' };
          break;
        case 'launch':
          item = { type: 'launch', value: 0 };
          break;
        case 'command':
          item = { type: 'command', value: 0 };
          break;
        case 'multimedia':
          item = { type: 'multimedia', value: 0 };
          break;
        case 'text':
          item = { type: 'text', value: 0 };
          break;
        case 'loop':
          item = { type: 'loop', value: 0 };
          break;
        default:
          item = { type: 'delay', value: 0 };
          break;
      }
      list.push(item);
      setListProfiles(list);
    }
  };

  return (
    <div className="main-container">
      <ProfileBar />
      <div className="body-widgets flex">
        <SideBar listMenuItems={listMenuItems} addMacro={addMacro} />
        <Editor listProfiles={listProfiles} />
      </div>
    </div>
  );
};

export default LayoutBuilder;
