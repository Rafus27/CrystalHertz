// styles
import styled from "styled-components";
/**
 * Show music duration & current time
 * @returns {JSX.Element} as deep-sub-component
 */
export const ShowTimeSelectMusic = (props) => {
    return <Time>{props.value}</Time>;
};
const Time = styled.span `
  color: white;
  margin: auto 10px auto 10px;
`;
