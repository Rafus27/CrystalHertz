// lib
import { FC } from "react";
import { useSelector } from "react-redux";

// styles
import {
  ChartTracksDescContainer,
  ChartTracksDescContainerInner,
  ChartTracksDescBoxImage,
  ChartTracksDescImage,
  ChartTracksDescTitle,
  ChartTracksDescAuthor,
} from "./style/chartTracksDesc.style";

// state
import { selectAppState } from "store/slices/app.slice";

interface Props {
  img: string; // ^? ReactNode
  title: string;
  author: string;
}

export const ChartTracksDesc: FC<Props> = (props): JSX.Element => {
  const { leftBar } = useSelector(selectAppState);

  return (
    <ChartTracksDescContainer isOpen={leftBar.isOpen}>
      <ChartTracksDescBoxImage>
        <ChartTracksDescImage src={props.img} />
      </ChartTracksDescBoxImage>
      <ChartTracksDescContainerInner>
        <ChartTracksDescTitle>{props.title}</ChartTracksDescTitle>
        <ChartTracksDescAuthor>{props.author}</ChartTracksDescAuthor>
      </ChartTracksDescContainerInner>
    </ChartTracksDescContainer>
  );
};
