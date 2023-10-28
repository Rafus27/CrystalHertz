import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// styles
import { ContainerList, LeftBarList, LeftBarListItem, LeftBarListItemIcon, LeftBarListItemLabel, } from "./styles/listLeftBar.style";
// stores
import { selectAppState, setSelectedPage } from "./../../../store/slices/app.slice";
export const ListLeftBar = (items) => {
    const { leftBar, currentPageData } = useSelector(selectAppState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (<ContainerList style={{ margin: items.margins }}>
      {items.data.map((item, index) => (<LeftBarList key={index}>
          <LeftBarListItem isActive={item.key === currentPageData.key ? true : false} isOpen={leftBar.isOpen} onClick={() => {
                dispatch(setSelectedPage({
                    key: item.key,
                    label: item.label,
                    status: true,
                }));
                if (item.key === "settings") {
                    navigate(`/${item.key}/main`);
                }
                else {
                    navigate(`/${item.key}`);
                }
            }}>
            <LeftBarListItemIcon>{item.icon}</LeftBarListItemIcon>
            <LeftBarListItemLabel isOpen={leftBar.isOpen}>
              {item.label}
            </LeftBarListItemLabel>
          </LeftBarListItem>
        </LeftBarList>))}
    </ContainerList>);
};
