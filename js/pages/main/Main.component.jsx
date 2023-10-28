// lib
import { useState } from "react";
import background from "assets/img/1.png";
import tylerBack from "assets/img/tyler.png";
import texture from "assets/img/2.png";
// styles
import { Main, MainPlayerAlbum, MainPlayerTexture } from "./styles/main.style";
import { Navbar } from "components/bar/Navbar.component";
import { LeftBar } from "components/bar/components/Leftbar.component";
/**
 * Главная страница, встречающая пользователей.
 * @returns {JSX.Element}
 */
export const MainComponent = () => {
    // временное решение
    const [imageSrc] = useState(tylerBack);
    return (<>
      <Navbar />
      <LeftBar />
      <Main imageSrc={background}>
        <MainPlayerAlbum src={imageSrc}/>
        <MainPlayerTexture src={texture}/>
      </Main>
    </>);
};
