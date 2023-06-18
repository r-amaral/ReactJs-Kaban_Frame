import React from "react";
import * as S from "./styles";

import Logo from "../../assets/logo.png";
import { MenuList } from "./constants";
import { MenuSideBar } from "./MenuSibeBar";

import SingOutImg from "../../assets/sairIcon.png";
import { auth } from "../../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export const SideBar: React.FC = () => {
    const navigate = useNavigate();

    const handleDisconect = () => {
        auth.signOut().then(() => navigate("/"));
    };

    return (
        <S.SideBarContainer>
            <S.SideBarMenuWrapper>
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
            </S.SideBarMenuWrapper>
            <S.SingOutWrapper onClick={handleDisconect}>
                <S.SingOutImg src={SingOutImg} />
                <S.ProfileSingOut>Sair</S.ProfileSingOut>
            </S.SingOutWrapper>
        </S.SideBarContainer>
    );
};
