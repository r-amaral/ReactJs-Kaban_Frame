import styled, { css } from "styled-components";

interface StyleProps {
  value?: string | number;
  error?: boolean;
}

const getColor = (props: StyleProps) => {
  if (props.error) return 'box-shadow: 0 0 0 2px red'
  if (props.value) return 'box-shadow: 0 0 0 2px #7c3aed'

  return 'box-shadow: 0 0 0 1px white'
}

export const StyledInputLabel = styled.label<{ value?: string | number }>`
  color: white;
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 300ms ease-in-out 0s;
  font-size: 13px;
  padding: 0 4px;
  background: rgb(24, 24, 27);

  ${({ value }) =>
    value &&
    css`
      top: -2px;
      left: 5px;
    `}
`;

export const InputWrapper = styled.div`
  height: 40px;
  position: relative;
  padding: 2.5px 9px;

${(props: StyleProps) => getColor(props)};
   
  transition: all 300ms ease-in-out 0s;
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

export const StyledInput = styled.input<{ value?: string | number }>`
  outline: none;
  border: none;
  background: transparent;
  height: 100%;
  width: 100%;
  color: white;
  opacity: ${({ value }) => value ? 1 : 0};
  transition: all 300ms ease-in-out 0s;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
