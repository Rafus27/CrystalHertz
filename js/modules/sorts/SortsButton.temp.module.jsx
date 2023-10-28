// lib
import { useSelector } from "react-redux";
// styles
import { Dropdown, Space, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
// state
import { selectSortState, } from "store/slices/sorting.slice";
/**
 *
 * @returns {JSX.Element}
 */
export const SortsButtonTemp = ({ props }) => {
    const { label } = useSelector(selectSortState);
    const items = [
        {
            key: "listen",
            label: "Прослушивания",
        },
        {
            key: "rating",
            label: "Рейтинг",
        },
        {
            key: "release_date",
            label: "Дата выхода",
        },
    ];
    return (<div style={{ margin: props }}>
      <Dropdown disabled={true} menu={{ items, selectable: true, defaultSelectedKeys: ["listen"] }}>
        <Typography.Link style={{ color: "white" }}>
          <Space>
            {label}
            <DownOutlined />
          </Space>
        </Typography.Link>
      </Dropdown>
    </div>);
};
