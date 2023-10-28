// lib
import { useState } from "react";
// styles
import styled from "styled-components";
/**
 * Компонент для создания выпадающего меню
 * @returns {JSX.Element}
 */
export const DropdownMenu = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const toggleDropdown = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };
    return (<DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedItem ? selectedItem : "Выберите платежный план"}
      </DropdownButton>
      <DropdownList open={isOpen}>
        {items.map((item) => (<DropdownItem key={item} onClick={() => handleItemClick(item)}>
            {item}
          </DropdownItem>))}
      </DropdownList>
    </DropdownContainer>);
};
const DropdownContainer = styled.div `
  position: relative;
`;
const DropdownButton = styled.button `
  background-color: rgba(255, 111, 8, 0.8);
  box-shadow: 0px 14px 28px 2px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  width: 370px;
  height: 45px;
  color: #fff;
  z-index: 2;
  border: none;

  text-transform: uppercase;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  margin-block: 5px;
  cursor: pointer;
`;
const DropdownList = styled.ul `
  position: absolute;
  margin-top: -10px;
  width: 370px;
  background-color: #464646;
  li:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  li:last-child {
    border-bottom: none;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  font-size: 14px;
  padding: 0;
  margin: 0;
  margin-top: -5px;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.open ? "block" : "none")};
  z-index: 1;
  animation: fadeIn 0.1s ease-in-out;
  box-shadow: 0px 14px 28px 2px rgba(0, 0, 0, 0.2);
`;
const DropdownItem = styled.li `
  padding: 8px 16px;
  border-bottom: 2px solid #d9d9d9;
  cursor: pointer;
  z-index: 1;
  &:hover {
    color: #000;
    background-color: #d9d9d9;
    // border-radius: 12px;
  }
  transition: all 0.1s ease-in-out;
  @keyframes slideDown {
    from {
      transform: translateY(-70%);
    }
    to {
      transform: translateY(0);
    }
  }
  animation: slideDown 0.3s ease-out forwards;
`;
