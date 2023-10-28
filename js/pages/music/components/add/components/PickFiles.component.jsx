// styles
import { Button, Modal, Upload, message, notification, } from "antd";
// icons
import { InboxOutlined } from "@ant-design/icons";
export const ModalPickFiles = (props) => {
    const fileProps = {
        name: "file",
        multiple: false,
        accept: ".mp3, .wav, .ogg, .wma",
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        onChange(info) {
            console.log("onChange: ", info.file);
            const { status } = info.file;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                message.success(`'${info.file.name}' успешно загружен.`);
            }
            else if (status === "error") {
                message.error(`'${info.file.name}' не удалось загрузить.`);
                notification.error({
                    message: "Приносим извинения, сервер на данный момент недоступен.",
                    duration: 3,
                });
            }
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
        },
        onDownload(file) {
            console.log("download files", file.fileName);
        },
    };
    return (<Modal open={props.open} centered onOk={props.cbOk} onCancel={props.cbCancel} footer={[
            <Button key={"back"} onClick={props.cbCancel}>
          Вернуться
        </Button>,
            <Button key={"submit"} type="primary">
          Загрузить
        </Button>,
        ]}>
      <div style={{ maxWidth: "90%", margin: "20px auto auto auto" }}>
        <Upload.Dragger {...fileProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Нажмите или перетащите необходимый файл
          </p>
        </Upload.Dragger>
      </div>
    </Modal>);
};
