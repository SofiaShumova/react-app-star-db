import React from 'react';
import './item-list.css';

const ItemList = ({ data, onItemSelected, renderItem }) => {
  const items = data.map((item) => (
    <li
      key={item.id}
      className="list-group-item"
      onClick={() => onItemSelected(item.id)}
    >
      {renderItem(item)}
    </li>
  ));
  return <ul className="item-list list-group">{items}</ul>;
};

export default ItemList;
