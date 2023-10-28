// lib
import { FC } from "react";

// styles
import { AccountFrame } from "./styles/account.style.ts";

// pages
import { ListenerAccountPage } from "./pages/listener/ListenerAccount.page.jsx";

/**
 * Component as user account
 * @version 0.2
 * @returns {JSX.Element} as page-component
 */
export const Account: FC = (): JSX.Element => {
  return (
    <AccountFrame>
      <ListenerAccountPage />
    </AccountFrame>
  );
};
