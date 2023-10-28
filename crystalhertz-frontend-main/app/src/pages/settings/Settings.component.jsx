// lib
import { useState } from "react";
// styles
import { SettingsSection, SettingsContainer, SettingLine, } from "./styles/settings.style";
import { Main, MainPlayerAlbum, MainPlayerTexture, } from "../main/styles/main.style";
// component
import { SettingButtonsPage } from "./components/buttons/SettingButtonPages.component";
// other
import { dataSettingButtonPage } from "../../constants";
// hook
import { useDeviceStore } from "../../store/hooks/hook";
import background from "../../assets/img/1.png";
import tylerBack from "../../assets/img/tyler.png";
import texture from "../../assets/img/2.png";
export const Settings = () => {
    const [imageSrc] = useState(tylerBack);
    const { type } = useDeviceStore();
    return (<Main imageSrc={background}>
      <MainPlayerAlbum src={imageSrc}/>
      <MainPlayerTexture src={texture}/>

      <SettingsSection isMobile={type === "mobile" ? true : false} className="settings">
        <SettingsContainer isMobile={type === "mobile" ? true : false} className="settings-container">
          <SettingButtonsPage {...[
        {
            key: "settings",
            label: "Настройки",
            isActive: true,
        },
    ]}/>

          <SettingLine width={300}/>

          <div className="settings-container_btns">
            <SettingButtonsPage {...dataSettingButtonPage}/>
          </div>
        </SettingsContainer>

        <div className="settings-container_additional">children::dev</div>
      </SettingsSection>
    </Main>);
};
