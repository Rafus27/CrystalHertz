// styles
import { AccountFrame } from "./styles/account.style.js";
// pages
import { ListenerAccountPage } from "./pages/listener/ListenerAccount.page.jsx";
/**
 * Component as user account
 * @version 0.2
 * @returns {JSX.Element} as page-component
 */
export const Account = () => {
    return (<AccountFrame>
      <ListenerAccountPage />
    </AccountFrame>);
};
