import React, { useState, useReducer, useEffect } from 'react';
import './ProfileBar.css';

export const ProfileBar = () => {
  const [showMenuDropdown, setShowMenuDropdown] = useState({ isShow: false });
  const [showMacroDropdown, setShowMacroDropdown] = useState({ isShow: false });
  const [macroItems, updateMacroItems] = useState({
    iShow: false,
    data: [
      {
        name: 'macro 1',
        choose: 'selected',
      },
      {
        name: 'macro 2',
        choose: '',
      },
      {
        name: 'macro 3',
        choose: '',
      },
      {
        name: 'macro 4',
        choose: '',
      },
      {
        name: 'macro 5',
        choose: '',
      },
    ],
  });

  const [selected, setSelected] = useState(0);

  let listMacros = macroItems.data.map((items, index) => (
    <div
      id={index}
      className={'option ' + items.choose}
      onClick={() => {
        chooseItem(index);
        setSelected(index);
        setShowMacroDropdown({ iShow: false });
      }}
    >
      {items.name}
    </div>
  ));

  const chooseItem = index => {
    var list = [...macroItems.data];
    list[selected].choose = '';
    list[index].choose = 'selected';
    updateMacroItems({ data: list });
  };

  return (
    <div className="profile-bar flex">
      <div className="loader" tooltip="Syncing Profiles" />
      <div>macro</div>
      <div className="dropdown-area">
        <div
          id="profileDrop"
          className={
            showMacroDropdown.isShow ? 's3-dropdown expand' : 's3-dropdown'
          }
          onClick={() =>
            setShowMacroDropdown({ isShow: !showMacroDropdown.isShow })
          }
        >
          <div className="selected">{macroItems.data[selected].name}</div>
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
          <div className="act action">add</div>
          <div className="act action">import</div>
          <div className="act divider" />
          <div className="act action">rename</div>
          <div className="act action" o>
            duplicate
          </div>
          <div className="act action">export</div>
          <div className="act divider" />
          <div className="act action" id="deleteAction">
            delete
          </div>
        </div>
      </div>
    </div>
  );
};
