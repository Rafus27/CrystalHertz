// lib
import { useContext } from "react";
// stores
import { DeviceStoreContext } from "../store";
/**
 * @version 0.0.1
 * @returns Hook for work with device store in app
 */
export const useDeviceStore = () => useContext(DeviceStoreContext);
