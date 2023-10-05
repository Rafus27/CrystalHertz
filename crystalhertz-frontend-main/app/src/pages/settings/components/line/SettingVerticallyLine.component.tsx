// lib
import { FC } from "react";

// styles
import styled from "styled-components";

interface Props {
  width: number;
  isVertically: boolean;
}

/**
 * 
 * @param props - @interface Props
 * @returns {JSX.Element} 
 */
export const SettingVerticallyLine: FC<Props> = (props): JSX.Element => {
  return <Line isVertically={props.isVertically} width={props.width} />;
};

const Line = styled.hr<{ width: number; isVertically: boolean }>`
  max-width: ${props => props.isVertically === true ? "" : "68vw"};
  width: ${(props) => props.width};

  ${(props) => props.isVertically === true && `transform: rotate(90deg);`};
`;
