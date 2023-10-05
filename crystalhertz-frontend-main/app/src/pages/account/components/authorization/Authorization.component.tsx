// lib
import {FC, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

// styles
import {
    AuthorizationTitle,
    AuthorizationInputs,
    AuthorizationSubmitButton,
    AuthorizationContainer,
} from "./styles/authorization.style.ts";
import {notification} from "antd";

// api
//import {authSubmit} from "api/auth/auth.ts";

/**
 * Component as user account -> authorization
 * @version 0.1
 * @returns {JSX.Element}
 */
export const Authorization: FC = (): JSX.Element => {
    const [userData, setUserData] = useState<{
        login: string;
        password: string;
        isRemember: boolean;
    }>({
        login: "",
        password: "",
        isRemember: false,
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token"))
            navigate("/account");
    }, []);

    const handlerSubmit = async () => {
        if (userData.login === "" || userData.password === "")
            return notification.error({
                message: "Введите логин и/или пароль!",
                duration: 1.5,
            });

        // test
        localStorage.setItem("token", "test::token::fab");
        navigate("/account");

//    await authSubmit(userData).then((token: string) => {
//      localStorage.setItem("token", token);
//      return <Navigate to="/account" />;
//    });
    };

    return (
        <AuthorizationContainer>
            <AuthorizationTitle>Авторизация</AuthorizationTitle>

            <AuthorizationInputs.Container>
                <AuthorizationInputs.Input
                    onChange={(e) => setUserData({...userData, login: e.target.value})}
                    value={userData.login}
                    type={"text/email"}
                    placeholder={"Введите логин или почту"}
                    autoComplete={"off"}
                    maxLength={32}
                />

                <AuthorizationInputs.Input
                    onChange={(e) =>
                        setUserData({...userData, password: e.target.value})
                    }
                    value={userData.password}
                    type={"password"}
                    placeholder={"Введите пароль"}
                    autoComplete={"off"}
                    maxLength={32}
                />
            </AuthorizationInputs.Container>

            <div style={{display: "flex", flexDirection: "row"}}>
                <AuthorizationSubmitButton onClick={handlerSubmit}>
                    Войти
                </AuthorizationSubmitButton>
                <AuthorizationSubmitButton style={{margin: "0 auto auto 10px"}}>
                    <Link to="/reg">Зарегистрироваться</Link>
                </AuthorizationSubmitButton>
            </div>
        </AuthorizationContainer>
    );
};
