import styled from "styled-components";
import BigLogo from "../../assets/BigLogo.png";

export const StyledRegisterWrapper = styled.section`
  display: flex;
  min-height: 100vh;
  background: rgb(24, 24, 27);
`;

export const StyledRegisterRightItem = styled.div`
  width: 50%;
  min-height: 100vh;
  background: #7c3aed;
  box-sizing: border-box;
  border-radius: 50px 0 0 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export const StyledRegisterContent = styled.div`
  background: rgb(24, 24, 27);
  width: 50%;
  height: 100%;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const StyledLogoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${BigLogo});
  background-repeat: no-repeat;

  background-size: contain;
  background-position: center;
  width: 100%;
  min-height: 210px;
`;
