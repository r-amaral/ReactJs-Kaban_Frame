import React from "react";

import {
    AuthenticateButton,
    AuthenticateTemplate,
    InputText,
    Loading,
} from "../../Components";

import * as S from "./styles";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, useCollectionRef } from "../../Firebase/firebaseConfig";
import { emailAlreadyInUse, errorType, initialStates } from "./constants";
import { SucessfulRegistration } from "./SuccessfulRegistration";
import { addDoc } from "firebase/firestore";

const Register = () => {
    const [error, setError] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);
    const [successfulRegistration, setSuccessfulRegistration] =
        React.useState<boolean>(false);

    const [fieldControl, setFieldControl] = React.useState(initialStates);

    const [errorStyle, setErrorStyle] = React.useState({
        fullName: false,
        email: false,
        password: false,
        confirmPassword: false,
    });

    const { fullName, email, password, confirmPassword } = fieldControl;

    const validate = () => {
        const regEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
        const regName = /^([A-Za-z\u00C0-\u017F´]\s?){3,40}$/g;

        const ErrorObj = {
            ...errorStyle,
            fullName: !regName.test(fullName),
            email: !regEmail.test(email),
            password: password.length < 5,
            confirmPassword: confirmPassword !== password || !password,
        };

        setErrorStyle(ErrorObj);

        if (
            Object.values(ErrorObj).find(
                (attribute: boolean) => attribute === true
            )
        )
            return setError(errorType.incorrectCredentials);

        createUser();
    };

    const createUser = async () => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                addDoc(useCollectionRef, {
                    fullName,
                    email,
                    password,
                });
                setSuccessfulRegistration(true);
            })
            .catch((error) =>
                error.code === emailAlreadyInUse
                    ? setError(errorType.existingEmail)
                    : setError(errorType.incorrectCredentials)
            )
            .finally(() => setLoading(false));
    };

    return (
        <AuthenticateTemplate>
            <S.StyledRegisterWrapper>
                <S.StyledTitle>Olá,</S.StyledTitle>
                <S.StyledDescription>
                    Para continuar navegando de forma segura, efetue o cadastro
                    na rede.
                </S.StyledDescription>
                <S.StyledFormWrapper>
                    <S.StyledFormTitle>Cadastro</S.StyledFormTitle>
                    <InputText
                        type="text"
                        label="Nome"
                        placeholder="Digite seu nome"
                        error={errorStyle.fullName}
                        value={fieldControl.fullName}
                        onChange={({ target }) =>
                            setFieldControl({
                                ...fieldControl,
                                fullName: target.value,
                            })
                        }
                    />
                    <InputText
                        type="text"
                        label="Email"
                        placeholder="Digite seu email"
                        error={errorStyle.email}
                        value={fieldControl.email}
                        onChange={({ target }) =>
                            setFieldControl({
                                ...fieldControl,
                                email: target.value,
                            })
                        }
                    />
                    <InputText
                        type="password"
                        label="Senha"
                        placeholder="Digite sua senha"
                        error={errorStyle.password}
                        value={fieldControl.password}
                        onChange={({ target }) =>
                            setFieldControl({
                                ...fieldControl,
                                password: target.value,
                            })
                        }
                    />
                    <InputText
                        type="password"
                        label="Confirmar senha"
                        placeholder="Confirme sua senha"
                        value={fieldControl.confirmPassword}
                        error={errorStyle.confirmPassword}
                        onChange={({ target }) =>
                            setFieldControl({
                                ...fieldControl,
                                confirmPassword: target.value,
                            })
                        }
                    />
                    <S.StyledButtonWrapper>
                        {!!error && (
                            <S.StyledMessageError>{error}</S.StyledMessageError>
                        )}
                        <AuthenticateButton
                            text="Cadastrar"
                            onClick={validate}
                        />
                        <S.StyledLink>
                            Caso já possua uma conta{" "}
                            <Link to="/">Clique Aqui</Link>
                        </S.StyledLink>
                    </S.StyledButtonWrapper>
                </S.StyledFormWrapper>
            </S.StyledRegisterWrapper>
            {successfulRegistration && <SucessfulRegistration />}
            <Loading visible={loading} />
        </AuthenticateTemplate>
    );
};

export default Register;
