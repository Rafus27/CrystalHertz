// lib
import { FC } from "react";

// styles
import styled from "styled-components";

interface Props {
  value: string;
}

/**
 * Show music duration & current time
 * @returns {JSX.Element} as deep-sub-component
 */
export const ShowTimeSelectMusic: FC<Props> = (props): JSX.Element => {
  return <Time>{props.value}</Time>;
};

const Time = styled.span`
  color: white;
  margin: auto 10px auto 10px;
`;
