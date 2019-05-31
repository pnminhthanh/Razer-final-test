import React from 'react';
import { MenuItem } from '../MenuItem/MenuItem';
import './SiderBar.css';

export const SideBar = props => {
  var menu = props.listMenuItems.map(item => (
    <MenuItem
      icon={item.icon}
      alt={item.alt}
      text={item.text}
      className={props.isChosen ? 'menuItem choose' : 'menuItem'}
      clicked={() => {
        props.addMacro(item.type);
      }}
    />
  ));

  return (
    <div className="sideBar">
      <p className="title">add</p>
      <div className="items-area">{menu}</div>
    </div>
  );
};
