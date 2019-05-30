import React, { useState, useRef, useEffect } from 'react';
import './ProfileBar.css';

export const ProfileBar = props => {
  const [showMenuDropdown, setShowMenuDropdown] = useState({ isShow: false });
  const [showMacroDropdown, setShowMacroDropdown] = useState({ isShow: false });
  const [showRename, setShowRename] = useState(false);
  const [tempAddNum, setTempAddNum] = useState(0);
  const [tempName, setTempName] = useState('');
  const inputEl = useRef(null);
  const macroItems = props.macroItems;
  let listMacros = macroItems.map((items, index) => (
    <div
      id={index}
      className={'option ' + items.choose}
      onClick={() => {
        chooseItem(index);
        // setSelected(index);
        setShowMacroDropdown({ iShow: false });
      }}
    >
      {items.name}
    </div>
  ));

  const chooseItem = index => {
    var list = [...macroItems];
    list[props.selected].choose = '';
    list[index].choose = 'selected';
    props.updateMacroItems({ data: list, selected: index });
  };

  const addItem = () => {
    var newMacro;
    var temp = tempAddNum;
    if (temp === 0) {
      newMacro = {
        name: 'New Macro',
        choose: 'selected',
        items: [],
      };
    } else {
      newMacro = {
        name: 'New Macro (' + tempAddNum + ')',
        choose: 'selected',
        items: [],
      };
    }
    temp++;
    var list = [...macroItems];
    list[props.selected].choose = '';
    list.push(newMacro);
    props.updateMacroItems({ data: list, selected: list.length - 1 });

    setTempAddNum(temp);
  };

  const duplicateItem = () => {
    var dupMacro;
    var list = [...macroItems];
    var name = list[props.selected].name;
    var tempDupNum = 1;
    var open = name.lastIndexOf('(');
    var close = name.lastIndexOf(')');
    if (open > 0 && close > 0 && close > open) {
      tempDupNum = parseInt(name.substring(open + 1, close)) + 1;
      name = name.substring(0, open - 1);
    } else {
      tempDupNum = 1;
    }
    dupMacro = {
      name: name + ' (' + tempDupNum + ')',
      choose: 'selected',
      items: [],
    };
    list.push(dupMacro);
    list[props.selected].choose = '';
    props.updateMacroItems({ data: list, selected: list.length - 1 });
  };

  const deleteItem = () => {
    var list = [...macroItems];
    var nextItem;
    var position = parseInt(props.selected);
    if (position === 0) {
      nextItem = position + 1;
    } else {
      nextItem = position - 1;
    }
    list.splice(position, 1);
    if (position === list.length) {
      props.updateMacroItems({ data: list, selected: position - 1 });
    } else {
      props.updateMacroItems({ data: list, selected: position });
    }
  };

  const renameItem = e => {
    var list = [...macroItems];
    list[props.selected].name = tempName;
    props.updateMacroItems({ data: list, selected: props.selected });
    setShowRename(false);
  };

  return (
    <div className="profile-bar flex">
      <div className="loader" tooltip="Syncing Profiles" />
      <div>macro</div>

      <div className="dropdown-area">
        <input
          type="text"
          name="profile"
          id="profileEdit"
          ref={inputEl}
          maxLength={25}
          className={showRename ? 'show' : ''}
          value={tempName}
          onChange={e => setTempName(e.target.value)}
          onBlur={renameItem}
        />
        <div
          id="profileDrop"
          className={
            showMacroDropdown.isShow ? 's3-dropdown expand' : 's3-dropdown'
          }
          onClick={() =>
            setShowMacroDropdown({ isShow: !showMacroDropdown.isShow })
          }
        >
          <div className="selected">{macroItems[props.selected].name}</div>
          <div className="icon expand" />
        </div>
        <div
          id="profileDropOpt"
          className={
            showMacroDropdown.isShow
              ? 's3-options flex expand'
              : 's3-options flex'
          }
        >
          {listMacros}
        </div>
      </div>
      <div
        className="dots3 hover-border"
        id="profileMenuToggle"
        onClick={() =>
          setShowMenuDropdown({ isShow: !showMenuDropdown.isShow })
        }
      >
        <div
          className={
            showMenuDropdown.isShow ? 'profile-act show' : 'profile-act'
          }
          id="profileMenu"
        >
          <div className="act action" onClick={addItem}>
            add
          </div>
          <div className="act action">import</div>
          <div className="act divider" />
          <div
            className="act action"
            onClick={() => {
              setShowRename(true);
              setTempName(macroItems[props.selected].name);
            }}
          >
            rename
          </div>
          <div className="act action" onClick={duplicateItem}>
            duplicate
          </div>
          <div className="act action">export</div>
          <div className="act divider" />
          <div className="act action" id="deleteAction" onClick={deleteItem}>
            delete
          </div>
        </div>
      </div>

      <div className="barrier" />
      <div className="new-macro" onClick={addItem}>
        New Macro
      </div>
    </div>
  );
};
