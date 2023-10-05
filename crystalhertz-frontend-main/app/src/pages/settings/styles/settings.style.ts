import styled from "styled-components";

export const SettingsSection = styled.section<{ isMobile: boolean }>`
  width: auto;
  height: 90vh;

  transition: 0.4s all ease-in-out;
  transition-delay: 0.4s;
  backdrop-filter: blur(15px);

  padding: 30px;

  z-index: 99;

  position: relative;

`;

export const SettingsContainer = styled.div<{ isMobile: boolean }>`
  display: grid;
  align-items: center;
  justify-content: start;

  max-height: 82.5vh;
`;

export const SettingButtonPage = styled.button<{ isActive: boolean }>`
  width: 300px;
  height: 60px;

  background-color: ${(props) =>
    props.isActive ? "rgba(255, 111, 8, 0.5)" : "rgba(54, 54, 54, 0.8)"};
  color: white;

  border: none;
  border-radius: 20px;

  margin: 0 auto 20px 0;

  font-size: 20px;
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

export const SettingLine = styled.hr<{
  width: number;
  rotate?: "vertically" | "default";
}>`
  width: ${(props) => props.width};
  margin-left: 0;

  /* Test */
  ${props => props.rotate === "vertically" && `transform: rotate(90deg);`}
`;
