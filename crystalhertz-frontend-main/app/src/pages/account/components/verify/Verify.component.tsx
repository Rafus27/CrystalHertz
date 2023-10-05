// lib
import { FC, useState } from "react";
import { useSelector } from "react-redux";

// style
import {
  VerifyContainer,
  VerifyForm,
  VerifyFrame,
} from "./styles/verify.style";
import { notification } from "antd";

// components
import { Navbar } from "components/bar/Navbar.component";
import { LeftBar } from "components/bar/components/Leftbar.component";

// state
import { selectAppState } from "store/slices/app.slice";

export const Verify: FC = (): JSX.Element => {
  const { leftBar } = useSelector(selectAppState);

  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
    if (email === "" || email.length < 10)
      return notification.error({
        message: "Введите корректную почту!",
        duration: 1.5,
      });

    notification.success({
      message: "Ожидайте ответное письмо на указанной почте.",
      duration: 1.5,
    });
  };

  return (
    <VerifyFrame>
      <Navbar />
      <LeftBar />

      <VerifyContainer isOpen={leftBar.isOpen}>
        <VerifyForm.Container>
          <VerifyForm.Title>Подтверждение почты</VerifyForm.Title>

          <VerifyForm.Input
            value={email}
            minLength={10}
            maxLength={32}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите почту"
          />

          <VerifyForm.Button onClick={handleSubmit}>
            Отправить
          </VerifyForm.Button>
        </VerifyForm.Container>
      </VerifyContainer>
    </VerifyFrame>
  );
};
