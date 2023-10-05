import styled from "styled-components";

export const LibrarySearchContainer = styled.div<{ isOpen: boolean; }>`
    margin: ${props => props.isOpen === true ? "20px auto auto 60px" : "20px auto auto 100px"};

    width: 90%;
    height: 40px;

    border-radius: 30px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    position: relative;

    background-color: rgba(217, 217, 217, 1);

    transition: 0.4s;
`;

export const LibrarySearchInput = styled.input`
    border: none;
    background: none;
    
    font-size: 20px;
    
    position: absolute;

    width: 90%;

    margin: auto 10px auto 55px;

    ::placeholder {
        color: rgba(0, 0, 0, 0.4);
    }
`;