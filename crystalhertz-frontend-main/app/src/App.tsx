// lib
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// component
import { Navbar } from "./components/bar/Navbar.component";
import { LeftBar } from "./components/bar/components/Leftbar.component";

// modules
import { ApplicationIsDev } from "./modules/errors/ApplicationIsDev.module";

// hooks
import { useDeviceStore } from "./store/hooks/hook";

// state
import { selectAppState } from "./store/slices/app.slice";

// styles
import { RenderingPagesChildren } from "./app.style";

/**
 * Root application comppnent
 * @returns {JSX.Element}
 */
const App: FC = (): JSX.Element => {
  const { leftBar } = useSelector(selectAppState);
  const { type } = useDeviceStore();

  return (
    <div className="app">
      {import.meta.env.VITE_IS_DEV === "true" ? (
        <ApplicationIsDev />
      ) : (
        <>
          {type === "mobile" && (
            <span
              style={{
                color: "white",
                fontSize: 26,
              }}
            >
              Извините, но мобильной версии - не существует.
            </span>
          )}
          {type === "desktop" && (
            <>
              <Navbar />
              <LeftBar />
              <RenderingPagesChildren isOpen={leftBar.isOpen}>
                <Outlet />
              </RenderingPagesChildren>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
