// lib
import { FC, useReducer } from "react";

// styles
import { notification } from "antd";
import { AddMusic } from "./style/addMusic.style";

// deep-components
import { ModalPickFiles } from "./components/PickFiles.component";
import { AddMusicForm } from "./components/Form.component";

/**
 * @returns {JSX.Element}
 */
export const AddMusicComponent: FC = (): JSX.Element => {
  const [showAddMenu, setShowAddMenu] = useReducer((v: boolean) => !v, false);
  const [modalOpen, setModalOpen] = useReducer((v: boolean) => !v, false);

  return (
    <>
      {showAddMenu === false ? (
        <AddMusic.Button
          style={{ background: "#ff6f08" }}
          onClick={setShowAddMenu}
        >
          ДОБАВИТЬ
        </AddMusic.Button>
      ) : (
        <AddMusicForm setModalCb={setModalOpen} />
      )}
      <ModalPickFiles
        open={modalOpen}
        cbOk={() => {
          notification.info({ message: "addmusic:modal:ok", duration: 1 });
          setModalOpen();
        }}
        cbCancel={setModalOpen}
      />
    </>
  );
};
