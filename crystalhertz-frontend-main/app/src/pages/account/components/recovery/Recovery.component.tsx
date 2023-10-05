// lib
import { FC, useState } from "react";
import { useSelector } from "react-redux";

// styles
import {
  RecoveryFrame,
  RecoveryContainer,
  RecoveryForm,
} from "./styles/recovery.style";
import { notification } from "antd";

// state
import { selectAppState } from "store/slices/app.slice";

export const Recovery: FC = (): JSX.Element => {
  const { leftBar } = useSelector(selectAppState);

  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
    if (email === "" || email.length < 10)
      return notification.error({
        message: "Введите корректную почту!",
        duration: 1.5,
      });

    notification.success({
      message: "Скоро вам на почту придет ответное письмо!",
      duration: 1.5,
    });
  };

  return (
    <RecoveryFrame>
      <RecoveryContainer isOpen={leftBar.isOpen}>
        <RecoveryForm.Container>
          <RecoveryForm.Title>Восстановление пароля</RecoveryForm.Title>

          <RecoveryForm.Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            minLength={10}
            maxLength={32}
            placeholder="Введите почту привязанную к аккаунту"
          />

          <RecoveryForm.Button onClick={handleSubmit}>
            Отправить
          </RecoveryForm.Button>
        </RecoveryForm.Container>
      </RecoveryContainer>
    </RecoveryFrame>
  );
};
