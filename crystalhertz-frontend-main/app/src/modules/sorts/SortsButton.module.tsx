// lib
import { FC, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";

// styles
import {
  SortButtonFrame,
  SortButtonContainer,
  SortButtonArrow,
  SortButtonListContainer,
  SortButtonList,
  SortButtonListItem,
  SortButtonPopularity,
} from "./styles/sortButton.style";

// icons
import {
  LeftOutlined,
  RightOutlined,
  UpOutlined,
  DownOutlined,
  RiseOutlined,
  FallOutlined,
} from "@ant-design/icons";

// other
import { dataDefaultSortingValue } from "constants.tsx";

// state
import {
  selectSortState,
  setSelectedSortParams,
} from "store/slices/sorting.slice";
import { Popover } from "antd";

/**
 * @param margin - ...
 * @param rotate - ...
 */
interface Props {
  margin: string;
  rotate: "vertically" | "horizontally";
}

/**
 * Кнопка принимающая в себя некоторые параметры для взаимодействия с сортировкой (нужна дальнейшая привязка к глобальному состоянию)
 * ! Сделать возможным скрытие появляющегося меню через нажатие на любое место экрана
 * @returns {JSX.Element}
 */
export const SortButton: FC<Props> = (props): JSX.Element => {
  const { label } = useSelector(selectSortState);
  const [isClicked, setIsClicked] = useReducer((v) => !v, false);

  /**
   * false => is fall; true => is rise
   * TODO: change to state sorting
   */
  const [popularityIsRise, setPopularityIsRise] = useReducer((v) => !v, false);

  const dispatch = useDispatch();

  return (
    <SortButtonFrame style={{ margin: props.margin }}>
      <SortButtonContainer isOpen={isClicked} onClick={setIsClicked}>
        {label}
        <SortButtonArrow>
          {props.rotate === "vertically" && (
            <>{isClicked === false ? <UpOutlined /> : <DownOutlined />}</>
          )}

          {props.rotate === "horizontally" && (
            <>{isClicked === false ? <LeftOutlined /> : <RightOutlined />}</>
          )}
        </SortButtonArrow>
      </SortButtonContainer>

      {isClicked === true && (
        <SortButtonListContainer>
          {dataDefaultSortingValue.map((item, index) => (
            <SortButtonList isOpen={isClicked} key={index}>
              <SortButtonListItem
                onClick={() =>
                  dispatch(
                    setSelectedSortParams({
                      key: item.key,
                      label: item.label,
                    })
                  )
                }
              >
                {item.label}
              </SortButtonListItem>
            </SortButtonList>
          ))}
        </SortButtonListContainer>
      )}

      <SortButtonPopularity onClick={setPopularityIsRise}>
        {/* Popover - тестовый вариант заместо привычных title-ов */}
        <Popover
          overlayStyle={{ maxWidth: "250px", maxHeight: 100 }}
          trigger="hover"
          content={
            <p>
              {label} по{" "}
              {popularityIsRise === true ? "убыванию" : "возрастанию"}
            </p>
          }
        >
          {popularityIsRise === true ? <FallOutlined /> : <RiseOutlined />}
        </Popover>
      </SortButtonPopularity>
    </SortButtonFrame>
  );
};
