import styled from "styled-components";

export const SubscriptionFrame = styled.section`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;

  background: linear-gradient(
    90deg,
    rgba(12, 53, 116, 1) 0%,
    rgba(46, 22, 99, 1) 20%,
    rgba(72, 24, 120, 1) 40%,
    rgba(80, 20, 116, 1) 60%,
    rgba(114, 9, 110, 1) 80%,
    rgba(101, 1, 73, 1) 100%
  );
`;

export const SubscriptionContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  z-index: 2;
  position: relative;
`;

export const SubscriptionContainerInner = styled.div<{ isOpen: boolean }>`
  max-width: ${(props) => (props.isOpen === true ? "75vw" : "100vw")};
  min-height: 100vh;

  margin: ${(props) =>
    props.isOpen === true ? "40px 35%" : "40px 35%"};

  transform: ${(props) => (props.isOpen === true ? "scale(0.95)" : "none")};
  transition: 0.4s;
`;
