// lib
import { FC, useState } from "react";
import { useSelector } from "react-redux";

// styles
import {
  LibrarySearchContainer,
  LibrarySearchInput,
} from "./styles/librarySearch.style";

// icons
import { SearchOutlined } from "@ant-design/icons";

// state
import { selectAppState } from "store/slices/app.slice";

/**
 * Компонент отвечающий за поиск в компоненте "Библиотека"
 * @returns {JSX.Element}
 */
export const LibrarySearch: FC = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");

  const { leftBar } = useSelector(selectAppState);

  return (
    <LibrarySearchContainer isOpen={leftBar.isOpen}>
      <SearchOutlined
        style={{
          color: "black",
          fontSize: 34,
          position: "absolute",
          margin: "auto auto auto 10px",
        }}
      />

      <LibrarySearchInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Поиск"
      />
    </LibrarySearchContainer>
  );
};