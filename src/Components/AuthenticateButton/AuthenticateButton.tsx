import React from "react";
import * as S from "./styles";

interface AuthenticateButtonProps {
  text: string;
}

export const AuthenticateButton: React.FC<AuthenticateButtonProps> = ({
  text,
  ...rest
}) => {
  return <S.StyledButton {...rest}>{text}</S.StyledButton>;
};
