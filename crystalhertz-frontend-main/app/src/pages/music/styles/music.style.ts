import styled from "styled-components";

/**
 *
 */
export const Music = styled.div`
  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;

  position: relative;
`;

/**
 *
 */
export const MusicContainer = styled.div`
  width: 100vw;
  height: 100vh;

  backdrop-filter: blur(7.5px);

  display: flex;
  flex-direction: column;

  position: relative;
`;

/**
 *
 */
export const MusicContainerSecond = styled.div<{ leftBarisOpen: boolean }>`
  margin: ${(props) =>
    props.leftBarisOpen === true
      ? "20px auto auto 360px"
      : "20px auto auto 180px"};

  max-width: ${(props) => (props.leftBarisOpen === true ? "75vw" : "85vw")};
  max-height: 80vh;

  display: flex;
  justify-content: center;

  // костыль
  transform: ${(props) =>
    props.leftBarisOpen === true ? "scale(0.92)" : "none"};
  transition: 0.4s;
`;

/**
 *
 */
export const MusicContainerLeft = styled.div`
  width: 400px;
  height: 600px;

  background-color: rgba(10, 10, 10, 0.65);

  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 *
 */
export const MusicContainerCenter = styled.div`
  width: 760px;
  height: 600px;

  background-color: rgba(10, 10, 10, 0.65);

  margin: 0 2.5px 0 2.5px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
`;

/**
 *
 */
export const MusicContainerRight = styled.div`
  width: 420px;
  height: 600px;

  background-color: rgba(10, 10, 10, 0.65);

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;
