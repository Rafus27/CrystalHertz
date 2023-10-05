// lib
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

/**
 * Old provider stores
 * @deprecated as version 1+
 */
import { DeviceStoreProvider } from "./store/providers/device.provider.tsx";

// styles
import "./index.scss";

/**
 * New provider stores
 */
import { store } from "./store/store.ts";

import { router } from "router.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <DeviceStoreProvider>
        <RouterProvider router={router} />
      </DeviceStoreProvider>
    </Provider>
  </React.StrictMode>
);
