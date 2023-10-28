import styled from "styled-components";
export const Main = styled.div `
    background-image: ${props => `url(${props.imageSrc})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;

    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;

    z-index: -2;

    margin: 0;
    padding: 0;
`;
export const MainPlayerTexture = styled.img `
    z-index: 1;
    animation: move 9s infinite linear;
    position: absolute;
    margin: auto auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
`;
export const MainPlayerAlbum = styled.img `
    max-width: 700px;
    max-height: 700px;

    height: auto;

    background-size: cover;
    background-position: 50%;

    z-index: -99;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

    transform: scale(0.9);
    animation: move 9s infinite linear;

    border-radius: 50%;
`;
