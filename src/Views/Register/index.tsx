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
            onChange={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
          <InputText
            type="text"
            label="Email"
            onChange={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
          <InputText
            type="text"
            label="Senha"
            onChange={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
          <InputText
            type="text"
            label="Confirmar senha"
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
