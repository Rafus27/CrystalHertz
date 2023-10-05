// lib
import { FC } from "react";

// style
import { ChartAlbumFrame } from "./styles/chartAlbums.style";
import { ChartAlbumsDesc } from "./component/ChartAlbumsDesc.component";

/**
 * Отображение альбомов в чартах
 * @returns {JSX.Element}
 */
export const ChartAlbums: FC = (): JSX.Element => {
  const albumProps = {
    img: "",
    titleAlbum: "Title album",
    author: "Author album",
    mostPopularTrack: {
      link: "",
      title: "Track123445", /** length <= 10 */
    },
    dateOfCreate: "2023",
  };

  return (
    <ChartAlbumFrame>
      <ChartAlbumsDesc {...albumProps} />
      <ChartAlbumsDesc {...albumProps} />
      <ChartAlbumsDesc {...albumProps} />
    </ChartAlbumFrame>
  );
};
