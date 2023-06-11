import styled from 'styled-components'
import { Link } from "react-router-dom";

export const ModalBlur = styled.div`
position: fixed;
width: 100%;
height: 100%;
left: 0;
top: 0;
background: rgba(0,0,0,0.5);
display: flex;
align-items: center;
justify-content: center;
`

export const ModalContainer = styled.div`
background: rgb(24, 24, 27);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
border-radius: 10px;
padding: 30px;
`

export const ModalText = styled.h3`
color: white;
`

export const StyledLink = styled(Link)`
 text-decoration: none;
 color: #7c3aed;
 transition: all 300ms ease-in-out 0s;
 
 &:hover {
    color: #a579f1;
}
`

export const ModalLogo = styled.img``
