import React from "react";

import * as S from "./styles";
import Logo from "../../../assets/logo.png";

export const SucessfulRegistration: React.FC = () => {
    return (
        <S.ModalBlur>
            <S.ModalContainer>
                <S.ModalLogo src={Logo} />
                <S.ModalText>Cadastro efetuado com sucesso</S.ModalText>
                <S.StyledLink to="/">Ir para o login</S.StyledLink>
            </S.ModalContainer>
        </S.ModalBlur>
    );
};
