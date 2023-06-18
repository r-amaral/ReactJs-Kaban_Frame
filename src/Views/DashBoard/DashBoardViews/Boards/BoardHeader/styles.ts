import styled from 'styled-components'


export const BoardHeader = styled.div`
display: flex;
justify-content: space-between;
gap: 50px;
`;

export const InputTitle = styled.input`
background: transparent;
border: none;
outline: none;
color: white;
font-weight: 700;
font-size: 32px;
`;

export const Pincel = styled.img`
cursor: pointer;
`

export const TitleWrapper = styled.div`
display: flex;
gap: 20px;
`

export const ProfileWrapper = styled.div`
display: flex;
gap: 20px;
align-items: center;
`

export const ImageProfile = styled.img`
border-radius: 100%;
width: 100px;
height: 100px;
`

export const ProfileName = styled.span`
color: white;
text-transform:capitalize;
`

export const ProfileTextContainer = styled.div`
display: flex;
flex-direction: column;
`