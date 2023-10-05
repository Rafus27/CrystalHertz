// lib
import { FC } from "react";
import { useSelector } from "react-redux";

// styles
import {
  SubscriptionFrame,
  SubscriptionContainer,
  SubscriptionContainerInner,
} from "./styles/subs.style";

// state
import { selectAppState } from "store/slices/app.slice";
import { SubDisplayName } from "./components/sub/SubDisplayName.component";
import { SubForm } from "./components/sub/SubForm.component";
import { Navbar } from "components/bar/Navbar.component";
import { LeftBar } from "components/bar/components/Leftbar.component";

/**
 * Rомпонент для оформления Crystal+
 * @returns {JSX.Element}
 */
export const Subscription: FC = (): JSX.Element => {
  const { leftBar } = useSelector(selectAppState);

  // FIXME
  return (
    <>
      <Navbar />
      <LeftBar />
      <SubscriptionFrame>
        <SubscriptionContainer>
          <SubscriptionContainerInner isOpen={leftBar.isOpen}>
            <SubDisplayName />

            <SubForm />
          </SubscriptionContainerInner>
        </SubscriptionContainer>
      </SubscriptionFrame>
    </>
  );
};
