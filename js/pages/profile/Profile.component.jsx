import { Outlet } from "react-router-dom";
// components
import { Navbar } from "components/bar/Navbar.component";
import { LeftBar } from "components/bar/components/Leftbar.component";
/**
 * User profile
 * @returns {JSX.Element} as pages
 */
export const Profile = () => {
    return (<>
      <Navbar />
      <LeftBar />
      <Outlet />
    </>);
};
