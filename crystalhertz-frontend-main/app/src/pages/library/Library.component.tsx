// lib
import { FC } from "react";
import { useSelector } from "react-redux";

// styles
import {
  LibraryFrame,
  LibraryContainer,
  LibraryContainerInner,
} from "./styles/library.style";

// components
import { LibrarySearch } from "./components/search/LibrarySearch.component";
import { LibraryCharts } from "./components/charts/LibraryCharts.component";

// state
import { selectAppState } from "store/slices/app.slice";
import { Navbar } from "components/bar/Navbar.component";
import { LeftBar } from "components/bar/components/Leftbar.component";

/**
 * Компонент отвечающий за отображение страницы "Библиотека"
 * @returns {JSX.Element}
 */
export const Library: FC = (): JSX.Element => {
  const { leftBar } = useSelector(selectAppState);

  return (
    <LibraryFrame>
      <Navbar />
      <LeftBar />

      <LibraryContainer>
        <LibraryContainerInner isOpen={leftBar.isOpen}>
          <LibrarySearch />

          <LibraryCharts />
        </LibraryContainerInner>
      </LibraryContainer>
    </LibraryFrame>
  );
};
