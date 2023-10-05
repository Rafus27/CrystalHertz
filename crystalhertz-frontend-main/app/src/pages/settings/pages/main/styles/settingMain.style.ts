import styled from "styled-components";

export const SettingMainContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;
`;

export const SettingMainDescriptions = styled.span`
    font-size: 20px;

    margin: 25px 0 auto 50px;
`;

export const SettingButtonContainer = styled.span<{ height: 220 | 140 }>`
    max-width: 300px;
    max-height: ${props => `${props.height}px`};
`;