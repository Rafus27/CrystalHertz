import styled from "styled-components";
export const LibraryFrame = styled.section `
  width: 100vw;
  height: 100vh;

  background: linear-gradient(to right, #ff6f08, #000000);
`;
export const LibraryContainer = styled.div `
  width: 100%;
  height: 100%;

  display: flex;

  position: relative;
`;
export const LibraryContainerInner = styled.div `
  max-width: ${(props) => (props.isOpen === true ? "75vw" : "85vw")};
  width: 100%;

  // FIXME
  margin: ${(props) => props.isOpen === true ? "20px 50px auto 350px" : "20px 100px auto 175px"};

  transition: 0.4s;
`;
