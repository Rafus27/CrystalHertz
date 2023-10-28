import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// styles
import { SettingButtonPage } from "../../styles/settings.style";
// hooks
import { selectSettingState, setSelectPage, } from "../../../../store/slices/setting.slice";
/**
 * ...
 * @param props - IButtonPageProps
 * @returns {JSX.Element}
 */
export const SettingButtonsPage = (props) => {
    const { currentPage } = useSelector(selectSettingState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (<>
      {props.map((item, index) => (<SettingButtonPage onClick={() => {
                dispatch(setSelectPage(item));
                navigate(`/settings/${item.key}`);
            }} isActive={item.key === currentPage} key={index}>
          {item.label}
        </SettingButtonPage>))}
    </>);
};
