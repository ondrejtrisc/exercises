import React, { useState, useEffect } from 'react';


const ddContainer = {
  display: 'flex',
  flexDirection: 'column',
}

const ddHeader = {
  padding: '2px',
  border: '1px solid black',
  boderRadius: '5px',
  backgroundColor: 'lightGray'
}

const getListStyles = (isOpen) => {
  return {
    ...ddContainer,
    display: isOpen ? 'block' : 'none'
  };
}

function Dropdown(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Select Something');

  const handleDropDownClick = () => {
    setIsOpen(!isOpen);
  }

  const handleItemClick = (e) => {
    setSelectedItem(e.target.innerText)
  }

  const listItems = props.children.map(getClickableChildren(handleItemClick));

  return (
    <div style={ddContainer}>
      <div style={ddHeader} onClick={handleDropDownClick}>
        {selectedItem}
      </div>
      <div style={getListStyles(isOpen)}>
        {listItems}
      </div>
    </div>
  );
}

export default Dropdown;

const getClickableChildren = (clickHandler) => {
  return (child, index) => {
    return (
      <div onClick={clickHandler} key={index}>
        {child}
      </div>
    );
  }
}