import styled from "styled-components";
import BigLogo from "../../assets/BigLogo.png";

const media768 = "@media screen and (max-width: 767px)";

export const StyledRegisterWrapper = styled.section`
  display: flex;
  min-height: 100vh;
  align-items: center;
  background: rgb(24, 24, 27);
`;

export const StyledRegisterRightItem = styled.div`
  width: 50%;
  min-height: calc(100vh - 20px);
  height: calc(100% - 20px);
  background: #7c3aed;
  box-sizing: border-box;
  border-radius: 50px 0 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;

  ${media768} {
    display: none;
  }
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

  ${media768} {
    width: 100%;
  }
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
