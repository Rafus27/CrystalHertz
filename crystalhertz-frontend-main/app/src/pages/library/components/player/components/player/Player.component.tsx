// lib
import {FC, useReducer} from "react";

import {
  PlayerContainer,
  PlayerContainerInner,
  PlayerPlayButton,
} from "./styles/player.style";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

export const Player: FC = (): JSX.Element => {
  const [isPlay, setPlay] = useReducer((v) => !v, false);

  return (
    <PlayerContainer>
      <PlayerContainerInner>
        <PlayerPlayButton onClick={setPlay}>
          {isPlay ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
        </PlayerPlayButton>
      </PlayerContainerInner>
    </PlayerContainer>
  );
};
