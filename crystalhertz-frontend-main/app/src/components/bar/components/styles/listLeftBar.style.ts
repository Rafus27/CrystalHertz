import styled from "styled-components";

export const ContainerList = styled.div`
  margin: 50px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftBarList = styled.ul`
  margin: 2.5px auto;

  width: 100%;
  height: auto;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftBarListItem = styled.li<{ isActive: boolean; isOpen: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: ${(props) => (props.isOpen === true ? "65%" : "20px")};
  height: 40px;

  border-radius: 10px;

  margin: 2.5px auto auto auto;
  padding: 5px 10px;

  background: ${(props) => props.isActive && "#ED6B0E"};

  :hover {
    cursor: pointer;
    background: ${props => props.isActive === true ? "#ED6B0E" : "rgba(255, 255, 255, 0.1)"};
  }
`;

export const LeftBarListItemIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;
`;

export const LeftBarListItemLabel = styled.span<{ isOpen: boolean }>`
  font-size: 18px;

  margin-left: 8px;

  opacity: 0;
  pointer-events: none;

  ${(props) =>
    props.isOpen &&
    `
    opacity: 1;
    pointer-events: visible;

    transition: 0.4s;
    transition-delay: 0.4s;
  `}
`;
