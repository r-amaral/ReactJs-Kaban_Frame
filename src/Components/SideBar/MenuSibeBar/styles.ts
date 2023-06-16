import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SideBarText = styled.div<{ selected: boolean }>`
display: flex;
gap: 19px;
font-weight: 500;
font-size: 16px;
color: ${({ selected }) => selected ? '#FFFFFF' : '#CAB3FF'} ;
cursor:pointer;
`

export const SideBarIcon = styled.img`
margin-right: 20px;
`

export const StyledMenuContainer = styled.div`
display: flex;
align-items: center;
`

export const StyledIcon = styled(Link)`
text-decoration: none;
`