import styled from "styled-components";

export const AccountFrame = styled.section`
    background: linear-gradient(90deg, #2C1301 50%, #ED6B0E 100%);

    width: 100%;
    height: auto;

    margin: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AccountContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
  
    position: relative;
`;

export const AccountContainerInner = styled.div<{ isOpen: boolean }>`
    max-width: ${props => props.isOpen === true ? "75vw" : "85vw"};

    transform: ${props => props.isOpen === true ? "scale(0.92)" : "none"};
    transition: 0.4s;
`;