import React from "react";

import * as S from "./styles";

interface InputTextProps {
  label: string;
  type: string;
  value?: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  type,
  value,
  onChange,
  ...rest
}) => {
  return (
    <S.InputWrapper>
      <S.StyledInputLabel value={value}>{label}</S.StyledInputLabel>
      <S.StyledInput type={type} value={value} onChange={onChange} {...rest} />
    </S.InputWrapper>
  );
};
