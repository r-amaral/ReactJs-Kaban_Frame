import React from "react";
import * as S from "./styles";
import { useLocation } from "react-router-dom";
import { MenuSideBarProps } from "./types";

export const MenuSideBar: React.FC<MenuSideBarProps> = ({
    route,
    name,
    iconOnFocus,
    iconOutFocus,
}) => {
    const { pathname } = useLocation();

    const selected = pathname === route;

    return (
        <S.StyledIcon to={route}>
            <S.StyledMenuContainer>
                <S.SideBarIcon src={selected ? iconOnFocus : iconOutFocus} />
                <S.SideBarText selected={selected}>{name}</S.SideBarText>
            </S.StyledMenuContainer>
        </S.StyledIcon>
    );
};
