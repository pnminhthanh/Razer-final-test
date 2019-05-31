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
  const [selected, setSelected] = useState(0);
  const [macroItems, setMacroItems] = useState({
    data: [
      {
        name: 'macro 1',
        choose: 'selected',
        items: [],
      },
      {
        name: 'macro 2',
        choose: '',
        items: [],
      },
      {
        name: 'macro 3',
        choose: '',
        items: [],
      },
      {
        name: 'macro 4',
        choose: '',
        items: [],
      },
      {
        name: 'macro 5',
        choose: '',
        items: [],
      },
    ],
  });

  useEffect(() => console.log(macroItems.data[selected].items));

  const addMacro = props => {
    const list = [...macroItems.data[selected].items];
    let listMacros = [...macroItems.data];
    if (list.find(i => i.type === props) === undefined) {
      var item = null;

      switch (props) {
        case 'keyboard':
          item = { type: 'keyboard', value: 'End' };
          break;
        case 'mouse':
          item = { type: 'mouse', value: 'left' };
          break;
        case 'macro':
          item = { type: 'macro', value: null };
          break;
        case 'switchDevice':
          item = { type: 'switchDevice', value: null };
          break;
        case 'switchLighting':
          item = { type: 'switchLighting', value: null };
          break;
        case 'launch':
          item = { type: 'launch', value: null };
          break;
        case 'command':
          item = { type: 'command', value: null };
          break;
        case 'multimedia':
          item = { type: 'multimedia', value: null };
          break;
        case 'text':
          item = { type: 'text', value: null };
          break;
        case 'loop':
          item = { type: 'loop', value: null };
          break;
        default:
          item = { type: 'delay', value: 0 };
          break;
      }
      list.push(item);
      listMacros[selected].items = list;
      setMacroItems({ data: listMacros });
    }
  };

  const updateMacroItems = item => {
    setMacroItems({ data: item.data });
    setSelected(item.selected);
  };

  const changeItemValue = item => {
    console.log(item);
    var list = [...macroItems.data];
    var index = list[selected].items.findIndex(i => i.type === item.type);
    list[selected].items[index].value = item.value;
    setMacroItems({ data: list });
  };

  return (
    <div className="main-container">
      <ProfileBar
        macroItems={macroItems.data}
        selected={selected}
        updateMacroItems={item => updateMacroItems(item)}
      />
      <div className="body-widgets flex">
        <SideBar listMenuItems={listMenuItems} addMacro={addMacro} />
        <Editor
          listProfiles={macroItems.data[selected].items}
          changeItemValue={item => changeItemValue(item)}
        />
      </div>
    </div>
  );
};

export default LayoutBuilder;
