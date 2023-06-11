import React from "react";
import * as S from "./styles";

interface AuthenticateButtonProps {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const AuthenticateButton: React.FC<AuthenticateButtonProps> = ({
    text,
    onClick,
    ...rest
}) => {
    return (
        <S.StyledButton onClick={onClick} {...rest}>
            {text}
        </S.StyledButton>
    );
};
