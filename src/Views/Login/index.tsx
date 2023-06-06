import React from "react";

import {
  AuthenticateButton,
  AuthenticateTemplate,
  InputText,
} from "../../Components";

import * as S from "./styles";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <AuthenticateTemplate>
      <S.StyledRegisterWrapper>
        <S.StyledTitle>Olá,</S.StyledTitle>
        <S.StyledDescription>
          Para continuar navegando de forma segura, efetue o login na rede.
        </S.StyledDescription>
        <S.StyledFormWrapper>
          <S.StyledFormTitle>Login</S.StyledFormTitle>
          <InputText
            type="text"
            label="Email"
            placeholder="Digite seu email"
            onChange={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
          <InputText
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            onChange={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
          <S.StyledButtonWrapper>
            <AuthenticateButton text="Login" />
            <S.StyledLink>
              Caso não possua uma conta <Link to="/register">Clique Aqui</Link>
            </S.StyledLink>
          </S.StyledButtonWrapper>
        </S.StyledFormWrapper>
      </S.StyledRegisterWrapper>
    </AuthenticateTemplate>
  );
};

export default Login;
