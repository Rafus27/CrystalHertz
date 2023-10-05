import styled from "styled-components";

export const ChartTracksDescContainer = styled.div<{ isOpen: boolean }>`
  display: inline-flex;
  justify-content: start;
  align-items: center;

  width: 200px;
  height: 80px;

  transition: 0.4s;

  margin: ${props => props.isOpen === true ? "2.5px 5px 2.5px 0px" : "2.5px 45px 2.5px 105px"};
`;

export const ChartTracksDescContainerInner = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto auto 80px;
`;

export const ChartTracksDescBoxImage = styled.div`
  width: 60px;
  height: 60px;

  background-color: rgba(255, 111, 8, 1);

  border-radius: 10px;

  margin: 5px auto 5px 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChartTracksDescImage = styled.img`
  max-width: 60px;
  max-height: 60px;
`;

export const ChartTracksDescTitle = styled.span`
  margin: 2.5px auto auto 0px;

  color: black;

  font-size: 20px;
`;

export const ChartTracksDescAuthor = styled.span`
  margin: 15px auto auto 0px;

  color: rgba(0, 0, 0, 0.4);

  font-size: 16px;
`;