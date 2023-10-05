import styled from "styled-components";

export const PlayerContainer = styled.section`
  display: inline-flex;
  align-items: center;

  position: relative;
`;

export const PlayerContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlayerPlayButton = styled.button`
  border: none;

  width: 34px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;

  background: none;
  color: rgba(255, 111, 8, 1);
  
  font-size: 34px;

  margin: auto 0 auto auto;

  :hover {
    cursor: pointer;
  }
`;

export const PlayerSwitchTrackContainer = styled.div``;

export const PlayerSwitchTrackForward = styled.button``;

export const PlayerSwitchTrackBack = styled.button``;