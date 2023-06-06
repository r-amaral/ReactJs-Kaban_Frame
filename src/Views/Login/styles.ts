import styled from "styled-components";

export const StyledTitle = styled.h2`
  color: #e0e0e0;
  margin: 0;
  font-weight: 400;
  font-size: 60px;
`;

export const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #e0e0e0;
`;

export const StyledFormTitle = styled.h3`
  font-weight: normal;
  font-size: 30px;
  color: #e0e0e0;
  margin: 10px 0;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
  margin-top: 50px;
`;

export const StyledRegisterWrapper = styled.div`
  display: flex;
  max-width: 500px;
  flex: 1;

  justify-content: center;
  flex-direction: column;
  padding: 0 40px 0 50px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const StyledLink = styled.span`
  color: white;
  display: flex;
  align-items: center;
  gap: 4px;

  a {
    margin-top: 2px;
    text-decoration: none;
    color: #7c3aed;
    transition: all 300ms ease-in-out 0s;

    &:hover {
      color: #a579f1;
    }
  }
`;
