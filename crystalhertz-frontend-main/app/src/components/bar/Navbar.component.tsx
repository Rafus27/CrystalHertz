// lib
import { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// styles
import styled from "styled-components";

// store
import { setSelectedPage } from "store/slices/app.slice";

// hooks
import { useDeviceStore } from "store/hooks/hook";
import { dataNavbar } from "../../constants";

export const Navbar: FC = () => {
  const { type } = useDeviceStore();

  const dispatch = useDispatch();

  const data = dataNavbar;

  const typeClassName = type.toLowerCase();

  const pageInfoKey = JSON.parse(
    localStorage.getItem("last_page") as string
  )?.key;

  return (
    <nav className={`navbar-${typeClassName}`}>
      <ul style={{ margin: "auto auto auto 0" }}>
        {data.map((item, index) => (
          <Link
            to={`/${item.key}`}
            key={index}
            className={`navbar-${typeClassName}_list`}
          >
            <NavbarItemSelected
              className={`navbar-${typeClassName}_list-item`}
              onClick={() => {
                dispatch(
                  setSelectedPage({
                    key: item.key,
                    label: item.label,
                    status: true,
                  })
                );
              }}
              status={pageInfoKey === item.key ? true : false}
            >
              {item.label}
            </NavbarItemSelected>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

const NavbarItemSelected = styled.span<{ status: boolean }>`
  background-color: ${(props) => (props.status === true ? "#ff6f08" : "black")};
`;
