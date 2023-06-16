import React from "react";
import * as S from "./styles";

import Logo from "../../assets/logo.png";
import { MenuList } from "./constants";
import { MenuSideBar } from "./MenuSibeBar";

export const SideBar: React.FC = () => {
    return (
        <S.SideBarContainer>
            <S.StyledLogo src={Logo} />
            <S.SideBarItensContainer>
                {MenuList.map((menuItem, index) => (
                    <MenuSideBar
                        key={index.toString()}
                        route={menuItem.route}
                        name={menuItem.name}
                        iconOnFocus={menuItem.iconOnFocus}
                        iconOutFocus={menuItem.iconOutFocus}
                    />
                ))}
            </S.SideBarItensContainer>
        </S.SideBarContainer>
    );
};
