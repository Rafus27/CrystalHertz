import { useDispatch, useSelector } from "react-redux";
// styles
import { LeftBarFrame, LeftBarContainer, LeftBarImage, LeftBarTitle, } from "../styles/leftBar.styled";
// icons
import logoImg from "./../../../assets/img/leftbar/logo-crystalhertz.svg";
// components
import { ListLeftBar } from "./ListLeftBar.component";
// data
import { dataLeftbarList, dataLeftbarListFooter } from "./../../../constants.jsx";
// state
import { selectAppState, setBarIsOpen } from "./../../../store/slices/app.slice";
/**
 * A component that is always on the left in the user's screen, with which you can go to some pages / components.
 * @version 1.0.2 at 24.07.2023
 * TODO: Rechange icons, margins, some layout styled-components...
 * @returns {JSX.Element}
 */
export const LeftBar = () => {
    const { leftBar } = useSelector(selectAppState);
    const dispatch = useDispatch();
    return (<LeftBarFrame isOpen={leftBar.isOpen}>
      <LeftBarContainer>
        <LeftBarImage onClick={() => dispatch(setBarIsOpen())} src={logoImg} alt="logo_white"/>

        <LeftBarTitle isOpen={leftBar.isOpen}>CrystalHertz</LeftBarTitle>

        <ListLeftBar data={dataLeftbarList}/>

        <footer>
          <ListLeftBar margins={"20px auto 0 auto"} data={dataLeftbarListFooter}/>
        </footer>
      </LeftBarContainer>
    </LeftBarFrame>);
};
