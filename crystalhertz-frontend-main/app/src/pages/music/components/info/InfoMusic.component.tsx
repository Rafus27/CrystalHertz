// lib
import { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import testLogo from "assets/img/rachmaninov_pianist_color.jpg";

// style
import { InfoMusicMenu } from "./style/infoMusic.style";

// store
import { selectMusicState } from "store/slices/music.store";

export const InfoMusicComponent: FC = (): JSX.Element => {
  const { id, artistName, title, albumName, description, dateRelease } =
    useSelector(selectMusicState);

  return (
    <InfoMusicMenu.Container>
      {id !== "" && (
        <>
          <InfoMusicMenu.Author>{artistName}</InfoMusicMenu.Author>

          <InfoMusicMenu.Logo src={testLogo} />

          <InfoMusicMenu.Album>{title}</InfoMusicMenu.Album>

          <InfoMusicMenu.Description>
            Date release: {dateRelease}
          </InfoMusicMenu.Description>

          <InfoMusicMenu.Description>
            Aльбом:{" "}
            <Link to={"/album/:id"} style={{ color: "#FF6F08" }}>
              {albumName || "null"}
            </Link>
          </InfoMusicMenu.Description>

          <InfoMusicMenu.Description>
            Описание трека [{description?.length}]: {description}
          </InfoMusicMenu.Description>
        </>
      )}
    </InfoMusicMenu.Container>
  );
};
