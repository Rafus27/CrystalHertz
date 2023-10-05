import styled from "styled-components";

export const RenderingPagesChildren = styled.div<{
  isOpen: boolean;
}>`
  margin: ${(props) => (props.isOpen === true ? "0px 360px" : "0px 120px")};

  position: relative;

  color: white;

  height: 100%;
  width: 100%;

  transition: 0.4s ease-in-out;

  ${(props) =>
    props.isOpen &&
    `
      transition: .4s ease-in-out;
  `}
`;
