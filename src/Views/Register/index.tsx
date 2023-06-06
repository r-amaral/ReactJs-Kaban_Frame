import React from "react";

import {
  AuthenticateButton,
  AuthenticateTemplate,
  InputText,
} from "../../Components";

import * as S from "./styles";

const Register = () => {
  return (
    <AuthenticateTemplate>
      <S.StyledRegisterWrapper>
        <S.StyledTitle>Olá,</S.StyledTitle>
        <S.StyledDescription>
          Para continuar navegando de forma segura, efetue o cadastro na rede.
        </S.StyledDescription>
        <S.StyledFormWrapper>
          <S.StyledFormTitle>Cadastro</S.StyledFormTitle>
          <InputText
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
            onChange={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
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
          <InputText
            type="password"
            label="Confirmar senha"
            placeholder="Confirme sua senha"
            onChange={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
          <AuthenticateButton text="Cadastrar" />
        </S.StyledFormWrapper>
      </S.StyledRegisterWrapper>
    </AuthenticateTemplate>
  );
};

export default Register;
