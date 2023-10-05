// lib
import { FC } from "react";
import { useSelector } from "react-redux";

// styles
import {
  LibraryPlayerAuthor,
  LibraryPlayerBoxImage,
  LibraryPlayerContainer,
  LibraryPlayerContainerInner,
  LibraryPlayerImage,
  LibraryPlayerTrackName,
} from "./styles/libraryPlayer.style";

// state
import { selectAppState } from "store/slices/app.slice";

//components
import { Player } from "./components/player/Player.component";

interface Player {
    img: string;
    author: string;
    trackName: string;
}

/**
 * ...
 * @returns {JSX.Element}
 */
export const LibraryPlayer: FC<Player> = (props): JSX.Element => {
  const { leftBar } = useSelector(selectAppState);

  return (
    <LibraryPlayerContainer isOpen={leftBar.isOpen}>
      <LibraryPlayerBoxImage>
        <LibraryPlayerImage src={props.img} />
      </LibraryPlayerBoxImage>

      <LibraryPlayerContainerInner>
        <LibraryPlayerAuthor>{props.author}</LibraryPlayerAuthor>
        <LibraryPlayerTrackName>{props.trackName}</LibraryPlayerTrackName>
      </LibraryPlayerContainerInner>
      
      <Player />
    </LibraryPlayerContainer>
  );
};
