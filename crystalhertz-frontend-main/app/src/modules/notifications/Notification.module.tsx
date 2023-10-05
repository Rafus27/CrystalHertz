// lib
import { FC } from "react";

/**
 * @param status - В зависимости от него меняется иконка
 * @param message - Сообщение которое должно появится
 * @param duration - Сколько по времени длится уведомление, по дефолту стоит - 2 секунды
 */
type NotificationProps = {
  status: "success" | "error" | "global";
  message: string;
  duration?: number | null;
};

/**
 * Данный модуль должен вызываться когда нужно уведомить одного или мн-во пользователей находящихся на сайте (откладывается в историю уведомлений)
 * @param props - type NotificationProps
 * @returns {JSX.Element}
 */
export const Notification: FC<NotificationProps> = (props) => {
  return (
    <>
      notify: {props.status} / {props.message} / {props?.duration || "2s"}
    </>
  );
};
