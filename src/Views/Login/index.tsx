import React from "react";

import {
    AuthenticateButton,
    AuthenticateTemplate,
    InputText,
    Loading,
} from "../../Components";
import { auth } from "../../Firebase/firebaseConfig";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [loggedError, setErrorLogged] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);

    const loginUser = async () => {
        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/dashboard/boards");
            })
            .catch(() => setErrorLogged(true))
            .finally(() => setLoading(false));
    };

    return (
        <AuthenticateTemplate>
            <S.StyledRegisterWrapper>
                <S.StyledTitle>Olá,</S.StyledTitle>
                <S.StyledDescription>
                    Para continuar navegando de forma segura, efetue o login na
                    rede.
                </S.StyledDescription>
                <S.StyledFormWrapper>
                    <S.StyledFormTitle>Login</S.StyledFormTitle>
                    <InputText
                        type="text"
                        label="Email"
                        value={email}
                        placeholder="Digite seu email"
                        onChange={({ target }) => setEmail(target.value)}
                    />
                    <InputText
                        type="password"
                        label="Senha"
                        value={password}
                        placeholder="Digite sua senha"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <S.StyledButtonWrapper>
                        {!!loggedError && (
                            <S.StyledMessageError>
                                Ops, email ou senha inválidos. Tente novamente!
                            </S.StyledMessageError>
                        )}
                        <AuthenticateButton text="Login" onClick={loginUser} />
                        <S.StyledLink>
                            Caso não possua uma conta{" "}
                            <Link to="/register">Clique Aqui</Link>
                        </S.StyledLink>
                    </S.StyledButtonWrapper>
                </S.StyledFormWrapper>
            </S.StyledRegisterWrapper>
            <Loading visible={loading} />
        </AuthenticateTemplate>
    );
};

export default Login;
