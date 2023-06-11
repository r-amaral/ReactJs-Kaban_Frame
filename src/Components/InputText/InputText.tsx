import React from "react";

import * as S from "./styles";

interface InputTextProps {
    label: string;
    type: string;
    value?: string | number;
    placeholder: string;
    error?: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputText: React.FC<InputTextProps> = ({
    label,
    type,
    value,
    error,
    placeholder,
    onChange,
    ...rest
}) => {
    return (
        <S.InputWrapper value={value} error={error}>
            <S.StyledInputLabel value={value}>{label}</S.StyledInputLabel>
            <S.StyledInput
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...rest}
            />
        </S.InputWrapper>
    );
};
