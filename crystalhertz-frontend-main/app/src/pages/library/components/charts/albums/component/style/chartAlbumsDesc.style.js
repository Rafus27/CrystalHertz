import styled from "styled-components";
export const ChartAlbumDescContainer = styled.div `
  flex: 0 0 32%;                       

  display: flex;
  flex-direction: row;
  align-items: center;

  width: auto;
  height: 220px;
`;
export const ChartAlbumsDescBoxImage = styled.div `
  max-width: 200px;
  max-height: 200px;

  background-color: rgba(255, 111, 8, 1);

  border-radius: 20px;
  
  transition: 0.4s;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ChartAlbumsDescImage = styled.img `
  width: 10vw;
  height: 18vh;

  border-radius: 20px;
`;
export const ChartAlbumsDescContainerInner = styled.div `
  display: flex;
  flex-direction: column;
  margin: 40px auto auto 5px;

  height: 18vh;
`;
export const ChartAlbumsDescTitle = styled.span `
  margin: 0 auto;

  color: black;

  font-size: 20px;
`;
export const ChartAlbumsDescAuthor = styled.span `
  margin: 5px auto auto auto;

  color: rgba(0, 0, 0, 0.4);

  font-size: 16px;
`;
export const ChartAlbumsDescMostPopularTrack = styled.span `
  margin: 0 auto auto auto;
  color: rgba(0, 0, 0, 0.4);

  font-size: 16px;
`;
export const ChartAlbumsDescDateOfCreate = styled.span `
  margin: auto auto 5px 2px;

  color: rgba(0, 0, 0, 0.4);

  font-size: 16px;
`;
