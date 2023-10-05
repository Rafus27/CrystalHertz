// lib
import { FC } from "react";
import { useSelector } from "react-redux";

// styles
import {
  LibraryChartsContainer,
  LibraryChartsNavbar,
} from "./styles/libraryCharts.style";

// state
import { selectAppState } from "store/slices/app.slice";

// modules
import { SortsButtonTemp } from "modules/sorts/SortsButton.temp.module";

// componemts
import { ChartTracks } from "./tracks/ChartTracks.component";
import { ChartAlbums } from "./albums/ChartAlbums.component";

export const LibraryCharts: FC = (): JSX.Element => {
  const { leftBar } = useSelector(selectAppState);

  return (
    <LibraryChartsContainer isOpen={leftBar.isOpen}>
      <LibraryChartsNavbar>
        <SortsButtonTemp props={"auto auto auto 25px"} />
      </LibraryChartsNavbar>

      <ChartTracks />
      <ChartAlbums />
    </LibraryChartsContainer>
  );
};
