// lib
import { ReactNode, useEffect, useState } from "react";

// store
import { DeviceStoreContext } from "../store";

export const DeviceStoreProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  // FIXME: Pick<> & Omit<> get string, but need: mobile | desktop
  const [type, setType] = useState<"mobile" | "desktop">("desktop");

  const setDevice = (type: "mobile" | "desktop") => setType(type);

  // Пробное решение, посмотреть как будет вести себя вся верстка
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
          navigator.userAgent
        )
      ) {
        setDevice("mobile");
      } else {
        setDevice("desktop");
      }
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <DeviceStoreContext.Provider value={{ type, setDevice }}>
      {children}
    </DeviceStoreContext.Provider>
  );
};
