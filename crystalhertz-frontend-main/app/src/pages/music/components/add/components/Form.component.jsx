// lib
import { useReducer, useRef, useState } from "react";
// styles
import { AddMusic } from "../style/addMusic.style";
import { Button, Checkbox, Divider, Input, Select, Space, notification, } from "antd";
// consts
import { selectMusicOptions } from "../consts";
/**
 * Deep-component for Additional Music component
 * @returns {JSX.Element}
 */
export const AddMusicForm = (props) => {
    const [agreePolicy, setAgreePolicy] = useReducer((v) => !v, false);
    const [data, setData] = useState({});
    const inputRef = useRef(null);
    const onAlbumNameChange = (e) => setData({ ...data, albumName: e.target.value });
    const addAlbumItem = (e) => {
        e.preventDefault();
        if (!data.albumName)
            return;
        setData({ ...data, albumItems: [...data.albumItems, data.albumName] });
        setData({ ...data, albumName: "" });
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };
    const handlerPickFiles = (e) => {
        e.preventDefault();
        if (!agreePolicy)
            return notification.error({ message: "error", duration: 1 });
        props.setModalCb();
    };
    return (<AddMusic.Frame>
      <AddMusic.Container>
        <AddMusic.Form>
          <AddMusic.FormLabel>Введите название трека: </AddMusic.FormLabel>
          <Input value={data.nameTrack} minLength={2} maxLength={16} onChange={(e) => setData({ ...data, nameTrack: e.target.value })} showCount bordered/>

          {/* Временно отключен */}
          <AddMusic.FormLabel>Выберите жанр [disabled]: </AddMusic.FormLabel>
          <Select mode="multiple" style={{ width: "100%" }} placeholder="Доступные жанры" options={selectMusicOptions} disabled/>

          <AddMusic.FormLabel>Привязка к альбому: </AddMusic.FormLabel>
          <Select style={{ width: "100%" }} placeholder="Все альбомы" dropdownRender={(menu) => (<>
                {menu}
                <Divider style={{ margin: "8px 0" }}/>
                <Space style={{ padding: "0 8px 4px" }}>
                  <Input placeholder="Название альбома" ref={inputRef} value={data.albumName} onChange={onAlbumNameChange}/>

                  <Button type="text" onClick={addAlbumItem}>
                    Добавить
                  </Button>
                </Space>
              </>)} options={data.albumItems?.map((item) => ({
            label: item,
            value: item,
        }))}/>

          <AddMusic.FormLabel>Описание трека: </AddMusic.FormLabel>
          {/* FIXME: change to textarea? */}
          <Input value={data.descsTrack} onChange={(e) => setData({ ...data, descsTrack: e.target.value })} maxLength={200} showCount style={{ margin: "0 auto 0 2.5px", maxWidth: "100%" }}/>

          <Checkbox checked={agreePolicy} onChange={setAgreePolicy} style={{ margin: "auto auto -100px auto" }}>
            Согласен с правилами сервиса
          </Checkbox>

          <AddMusic.Button style={{ margin: "auto auto 5px auto" }} onClick={(e) => handlerPickFiles(e)} agreePolicy={agreePolicy}>
            ПРИКРЕПИТЬ ФАЙЛЫ
          </AddMusic.Button>
        </AddMusic.Form>
      </AddMusic.Container>
    </AddMusic.Frame>);
};
