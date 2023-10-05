import styled from "styled-components";

export const LibraryPlayerContainer = styled.section<{ isOpen: boolean }>`
  max-height: 150px;
  
  width: 90%;
  height: 100%;

  display: inline-flex;
  align-items: center;

  position: relative;

  background-color: rgba(217, 217, 217, 1);

  margin: ${props => props.isOpen === true ? "15px auto auto 60px" : "15px auto auto 100px"};

  border-radius: 30px;

  transition: 0.4s;
`;

export const LibraryPlayerContainerInner = styled.div`
  display: flex;
  align-items: center;
  
  margin: 10px auto auto 80px;

  position: absolute;
  top: 0;
  left: 0;
`;

export const LibraryPlayerBoxImage = styled.div`
  max-width: 60px;
  max-height: 60px;

  margin: 10px auto auto 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 111, 8, 1);

  border-radius: 20px;
  
  transition: 0.4s;
`;

export const LibraryPlayerImage = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 20px;
`;

export const LibraryPlayerAuthor = styled.span`
  color: rgba(0, 0, 0, 0.4);

  font-size: 22px;
`;

export const LibraryPlayerTrackName = styled.span`
  margin: auto auto auto 10px;
  color: black;

  font-size: 18px;
`;
