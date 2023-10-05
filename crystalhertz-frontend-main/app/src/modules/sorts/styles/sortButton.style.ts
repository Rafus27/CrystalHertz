import styled from "styled-components";

export const SortButtonFrame = styled.div`
    position: relative;

    display: inline-flex;

    width: auto;
    height: auto;
`;

export const SortButtonContainer = styled.button<{ isOpen: boolean }>`
    border: none;
    border-radius: ${props => props.isOpen === false && "20px"};

    ${props => props.isOpen === true && `
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: none;
        border-bottom-right-radius: none;    
    `}

    background-color: rgba(57, 57, 57, 1);
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 175px;

    font-size: 16px;

    padding: 4px 25px 4px 25px;

    :hover {
        background-color: rgba(80, 80, 80, 1);
        cursor: pointer;
    }
`;

export const SortButtonArrow = styled.i`
    margin: auto auto auto 5px;

    transition: 0.4s;
`;

export const SortButtonListContainer = styled.div`
    background-color: rgba(57, 57, 57, 1);

    width: 175px;

    position: absolute;
    
    /* Костыль, переделать по нормальному */
    margin: 30px auto;

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    transition: 0.4s ease;
`;

export const SortButtonList = styled.ul<{ isOpen: boolean; }>`
    transition: 0.4s;

    position: relative;

    width: auto;
    height: auto;

    display: flex;
    flex-direction: column;
`;

export const SortButtonListItem = styled.li`
    width: auto;
    height: auto;

    margin: auto auto auto -22.5px;

    :hover {
        background-color: rgba(80, 80, 80, 1);
        cursor: pointer;
    }
`;

/**
 * Type of popularity
 */
export const SortButtonPopularity = styled.button`
    margin: auto auto auto 10px;

    border: none;
    border-radius: 10px;

    background-color: rgba(57, 57, 57, 1);
    color: white;

    font-size: 24px;

    :hover {
        cursor: pointer;
    }
`;