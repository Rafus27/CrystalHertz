import styled from "styled-components";

export const LeftBarFrame = styled.section<{ isOpen: boolean }>`
  position: absolute;

  width: ${(props) => (props.isOpen === true ? "360px" : "120px")};
  min-height: 100vh;

  backdrop-filter: blur(5px);
  background: black;

  transition: 0.4s;

  z-index: 1000;
`;

export const LeftBarContainer = styled.div`
  max-height: 100%;

  position: relative;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const LeftBarImage = styled.img`
  width: 80px;
  height: 70px;

  margin: 0 auto;
`;

export const LeftBarTitle = styled.span<{ isOpen: boolean }>`
  font-size: 36px;
  font-variant: small-caps;

  color: white;

  margin: 12px auto;

  scale: 0;
  opacity: 0;

  transition: 0.4s;

  ${(props) =>
    props.isOpen &&
    `
    scale: 1;
    opacity: 1;
  `}
`;

export const LeftBarToggleSwitch = styled.div`
  position: absolute;

  top: 210px;
  right: -20px;

  padding: 2px 0 2px 2px;

  color: white;
  font-size: 38px;
  line-height: 50%;

  text-align: center;

  border-radius: 50%;

  background: linear-gradient(
    90deg,
    transparent 55%,
    rgba(10, 10, 10, 0.65) 63%
  );

  :hover {
    cursor: pointer;
  }
`;

export const LeftBarLogoImg = styled.img<{ isOpen: boolean }>`
  margin: ${(props) =>
    props.isOpen === true ? "0 150px 0 150px" : "0 150px 0 25px"};
  transition: 0.45s;
`;

export const LeftBarLogoText = styled.h3<{ isOpen: boolean }>`
  color: white;

  font-size: 36px;
  font-variant: small-caps;

  margin-top: 12px;

  pointer-events: none;

  scale: 0;
  opacity: 0;

  ${(props) =>
    props.isOpen &&
    `
        scale: 1;
        opacity: 1;
        transition: .4s;
        transition-delay: .5s;
    `}
`;
