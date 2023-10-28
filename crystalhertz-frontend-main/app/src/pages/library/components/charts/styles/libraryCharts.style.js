import styled from "styled-components";
export const LibraryChartsContainer = styled.section `
    width: 90%;
    height: auto;

    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;

    position: relative;

    background-color: rgba(217, 217, 217, 1);

    margin: ${props => props.isOpen === true ? "15px auto auto 60px" : "15px auto auto 100px"};

    border-radius: 30px;

    transition: 0.4s;
`;
export const LibraryChartsNavbar = styled.div `
    background-color: rgba(34, 34, 34, 1);

    display: flex;
    align-items: center;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    width: 100%;
    height: 54px;
`;
