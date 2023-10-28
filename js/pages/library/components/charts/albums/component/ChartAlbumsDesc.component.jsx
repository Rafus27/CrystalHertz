// styles
import { ChartAlbumDescContainer, ChartAlbumsDescAuthor, ChartAlbumsDescBoxImage, ChartAlbumsDescContainerInner, ChartAlbumsDescDateOfCreate, ChartAlbumsDescImage, ChartAlbumsDescMostPopularTrack, ChartAlbumsDescTitle, } from "./style/chartAlbumsDesc.style";
import { useSelector } from "react-redux";
import { selectAppState } from "store/slices/app.slice";
/**
 * ...
 * @returns {JSX.Element}
 */
export const ChartAlbumsDesc = (props) => {
    const { leftBar } = useSelector(selectAppState);
    return (<ChartAlbumDescContainer>
      <ChartAlbumsDescBoxImage isOpen={leftBar.isOpen}>
        <ChartAlbumsDescImage src={props.img}/>
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
    </ChartAlbumDescContainer>);
};
