import React from 'react';
import './Editor.css';
import { Item } from '../../components/Item/Item';
export const Editor = props => {
  console.log(props.listProfiles);
  const itemElementArray = [];
  for (let key in props.listProfiles) {
    console.log(props.listProfiles[key].type);
    itemElementArray.push({ id: key, config: props.listProfiles[key] });
  }

  return (
    <div className="editor">
      {itemElementArray.map(item => (
        <Item elementType={item.config.type} value={item.config.value} />
      ))}
    </div>
  );
};
