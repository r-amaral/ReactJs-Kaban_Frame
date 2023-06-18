import styled from 'styled-components'

export const SideBarContainer = styled.div`
height: 100%;
padding: 32px;
display: flex;
flex-direction: column;
align-items: center;
max-width: 175px;
background: #7C3AED;
min-height: 100vh;
box-sizing: border-box;
justify-content: space-between;
`

export const StyledLogo = styled.img`
margin-bottom:60px;
`

export const SideBarItensContainer = styled.div`
display: flex;
flex-direction: column;
gap: 36px;
`

export const SideBarMenuWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ProfileSingOut = styled.span`
color:  white;
transition: all 300ms ease-in-out 0s;
cursor: pointer;

`

export const SingOutWrapper = styled.div`
display: flex;
gap: 10px;
align-items: center;
cursor: pointer;
`

export const SingOutImg = styled.img`
width: 15px;
height: 15px;
color: white;
`
