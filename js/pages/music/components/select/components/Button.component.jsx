// styles
import styled from "styled-components";
// icons
import { Play, Pause } from "@gravity-ui/icons";
export const ButtonSelectMusic = (props) => {
    return (<Button onClick={props.callback}>
      {props.state === true ? <Pause /> : <Play />}
    </Button>);
};
const Button = styled.button `
  background-color: white;

  width: 40px;
  height: 40px;

  border: none;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto 20px auto 0;
`;
