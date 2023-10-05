import { ReactNode } from "react";

declare global {
  /**
   * Everything is described in the README file
   */
  interface ImportMetaEnv {
    readonly VITE_IS_DEV: string;
    readonly VITE_IS_PROD: string;
    readonly VITE_API_URL: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  interface CurrentPage {
    key:
      | "home"
      | "subscription"
      | "lib"
      | "account"
      | "music"
      | "subscriptions"
      | "subscribers"
      | "notifications"
      | "settings"
      | "questions"
      | "support";
    label: string;
    status: boolean;
    icon?: ReactNode;
  }

  interface Music {
    id: string;
    soundSrc: string;
    artistName: string;
    title: string;
    albumName: string;
    description?: string;
    dateRelease: string;
    isSelected: boolean;
  }

  interface SettingButton {
    key:
      | "settings"
      | "account_settings"
      | "security_settings"
      | "blackList_settings"
      | "payment_settings";
    label:
      | "Настройки"
      | "Аккаунт"
      | "Безопасность"
      | "Черный список"
      | "Платежные сервисы";
    isActive: boolean;
  }

  interface Device {
    type: "mobile" | "desktop";
    setDevice: (type: Device["type"]) => void;
  }

  interface Sort {
    key: "listen" | "rating" | "release_date";
    label: "Прослушивания" | "Рейтинг" | "Дата выхода";
  }
}

export {};
