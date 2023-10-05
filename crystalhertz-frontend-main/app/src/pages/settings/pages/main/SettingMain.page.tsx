// lib
import { FC } from "react";

import {
  SettingButtonContainer,
  SettingMainContainer,
  SettingMainDescriptions,
} from "./styles/settingMain.style";

/**
 * ... 300x420
 * @returns {JSX.Element}
 */
export const SettingMain: FC = (): JSX.Element => {
  return (
    <SettingMainContainer>
      <hr
        style={{
          maxWidth: "68vw",
          margin: "72px 50px 25px 50px",
        }}
      />

      <SettingMainDescriptions>
        При открытии сайта показывать сначала:
      </SettingMainDescriptions>

      <SettingMainDescriptions>
        Автоматически выставлять уровень громкости при проигрывании:
      </SettingMainDescriptions>

      <SettingMainDescriptions>
        Показывать контент с нецензурным содержанием:
      </SettingMainDescriptions>

      <hr
        style={{
          maxWidth: "68vw",
          margin: "45px 50px 45px 50px",
        }}
      />

      <SettingMainDescriptions style={{ margin: "auto 0 auto 50px" }}>
        Звук уведомлений:
      </SettingMainDescriptions>

      <SettingMainDescriptions>
        Уведомлять об обновлениях ваших подписок:
      </SettingMainDescriptions>

      <SettingButtonContainer height={220}>
        
      </SettingButtonContainer>
    </SettingMainContainer>
  );
};
