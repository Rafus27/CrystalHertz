// lib
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

// styles
import {
  RegistrationContainer,
  RegistrationForm,
} from "./styles/registration.style";
import { notification } from "antd";

// state
import { selectAppState } from "store/slices/app.slice";

// api
import { regSubmit } from "api/auth/auth";

type FormProps = {
  email: string;
  login: string;
  password: string;
  rpassword: string;
};

export const Registration: FC = (): JSX.Element => {
  const { leftBar } = useSelector(selectAppState);

  const [data, setData] = useState<FormProps>({} as FormProps);

  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    return <Navigate to="/account" replace={false} />;
  }

  const handleSubmit = async () => {
    if (
      data.email.length <= 0 ||
      data.login.length <= 0 ||
      data.password.length <= 0 ||
      data.rpassword.length <= 0 ||
      data.password !== data.rpassword
    )
      return notification.error({
        message: "Введите корректный логин и/или пароль!",
        duration: 1.5,
      });

    await regSubmit(data).then((token: string) => {
      localStorage.setItem("token", token);
      navigate("/profile/profile_create", { replace: false });
    });
  };

  return (
    <RegistrationContainer isOpen={leftBar.isOpen}>
      <RegistrationForm.Container>
        <RegistrationForm.Title>Регистрация</RegistrationForm.Title>

        <RegistrationForm.Input
          placeholder="Введите E-mail"
          autoComplete="off"
          value={data.email}
          maxLength={32}
          type="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <RegistrationForm.Input
          placeholder="Введите логин"
          autoComplete="off"
          value={data.login}
          maxLength={16}
          type="text"
          onChange={(e) => setData({ ...data, login: e.target.value })}
        />
        <RegistrationForm.Input
          placeholder="Введите пароль"
          autoComplete="off"
          value={data.password}
          maxLength={64}
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <RegistrationForm.Input
          placeholder="Повторите пароль"
          autoComplete="off"
          value={data.rpassword}
          maxLength={64}
          type="password"
          onChange={(e) => setData({ ...data, rpassword: e.target.value })}
        />

        <div style={{ display: "flex" }}>
          <RegistrationForm.Button onClick={handleSubmit}>
            Отправить
          </RegistrationForm.Button>
          <Link to="/auth" style={{ margin: "auto auto auto 10px" }}>
            <RegistrationForm.Button>Войти</RegistrationForm.Button>
          </Link>
        </div>
      </RegistrationForm.Container>
    </RegistrationContainer>
  );
};
