// lib
import { FC } from "react";

// styles
import {
  ChartAlbumDescContainer,
  ChartAlbumsDescAuthor,
  ChartAlbumsDescBoxImage,
  ChartAlbumsDescContainerInner,
  ChartAlbumsDescDateOfCreate,
  ChartAlbumsDescImage,
  ChartAlbumsDescMostPopularTrack,
  ChartAlbumsDescTitle,
} from "./style/chartAlbumsDesc.style";
import { useSelector } from "react-redux";
import { selectAppState } from "store/slices/app.slice";

interface Props {
  img: string; // ^? ReactNode
  titleAlbum: string;
  author: string;
  mostPopularTrack: {
    link: string;
    title: string;
  };
  dateOfCreate: string;
}

/**
 * ...
 * @returns {JSX.Element}
 */
export const ChartAlbumsDesc: FC<Props> = (props): JSX.Element => {
  const { leftBar } = useSelector(selectAppState);

  return (
    <ChartAlbumDescContainer>
      <ChartAlbumsDescBoxImage isOpen={leftBar.isOpen}>
        <ChartAlbumsDescImage src={props.img} />
      </ChartAlbumsDescBoxImage>

      <ChartAlbumsDescContainerInner>
        <ChartAlbumsDescTitle>{props.titleAlbum}</ChartAlbumsDescTitle>
        <ChartAlbumsDescAuthor>{props.author}</ChartAlbumsDescAuthor>
        <ChartAlbumsDescMostPopularTrack>
          {props.mostPopularTrack.title}
        </ChartAlbumsDescMostPopularTrack>
        <ChartAlbumsDescDateOfCreate>
          {props.dateOfCreate}
        </ChartAlbumsDescDateOfCreate>
      </ChartAlbumsDescContainerInner>
    </ChartAlbumDescContainer>
  );
};
