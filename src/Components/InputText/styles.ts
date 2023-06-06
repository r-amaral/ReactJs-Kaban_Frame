import styled, { css } from "styled-components";

export const StyledInputLabel = styled.label<{ value?: string | number }>`
  color: white;
  position: absolute;
  left: 10px;
  top: 50%;

  transform: translateY(-50%);
  transition: 300ms;

  padding: 0 8px;
  background: rgb(24, 24, 27);

  ${({ value }) =>
    value &&
    css`
      top: -11px;
      left: 5px;
    `}
`;

export const InputWrapper = styled.div`
  height: 30px;
  position: relative;
  padding: 2.5px 13px;
  box-shadow: 0 0 0 1px white;
  transition: 300ms;
  border-radius: 5px;

  &:hover,
  &:has(input:focus) {
    box-shadow: 0 0 0 2px #7c3aed;

    ${StyledInputLabel} {
      top: -2px;
      left: 5px;
    }
  }
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  background: transparent;
  height: 100%;
  width: 100%;
  color: white;
`;
