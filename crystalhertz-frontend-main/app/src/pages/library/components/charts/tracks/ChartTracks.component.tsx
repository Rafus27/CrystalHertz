// lib
import { FC } from "react";

// styles
import { ChartTracksMenu } from "./styles/chartTracks.style";

/**
 * Отображение треков в чартах
 * @returns {JSX.Element}
 */
export const ChartTracks: FC = (): JSX.Element => {
  const chartProps = [
    {
      img: "",
      title: "Title",
      author: "Author",
    },
    {
      img: "",
      title: "Title",
      author: "Author",
    },
    {
      img: "",
      title: "Title",
      author: "Author",
    },
    {
      img: "",
      title: "Title",
      author: "Author",
    },
    {
      img: "",
      title: "Title",
      author: "Author",
    },
    {
      img: "",
      title: "Title",
      author: "Author",
    },
  ];

  return (
    <ChartTracksMenu.Frame>
      {chartProps.map((el, index) => (
        <ChartTracksMenu.Item key={index}>
          <ChartTracksMenu.ItemImage src={el.img} />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto auto auto 10px",
            }}
          >
            <ChartTracksMenu.ItemTitle>{el.title}</ChartTracksMenu.ItemTitle>
            <ChartTracksMenu.ItemAuthorName>
              {el.author}
            </ChartTracksMenu.ItemAuthorName>
          </div>
        </ChartTracksMenu.Item>
      ))}
    </ChartTracksMenu.Frame>
  );
};
