import React from "react";
import * as S from "./styles";

interface AuthenticateTemplateProps {
  children: React.ReactNode;
}

export const AuthenticateTemplate: React.FC<AuthenticateTemplateProps> = ({
  children,
}) => {
  return (
    <S.StyledRegisterWrapper>
      <S.StyledRegisterContent>{children}</S.StyledRegisterContent>
      <S.StyledRegisterRightItem>
        <S.StyledLogoImg />
      </S.StyledRegisterRightItem>
    </S.StyledRegisterWrapper>
  );
};
