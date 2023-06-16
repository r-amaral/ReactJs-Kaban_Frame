import React from "react";
import * as S from "./styles";

import { SideBar } from "../SideBar";

interface DashBoardTemplateProps {
    children: React.ReactNode;
}

export const DashBoardTemplate: React.FC<DashBoardTemplateProps> = ({
    children,
}) => {
    return (
        <S.DashBoardTemplateWrapper>
            <SideBar />
            <S.DashBoardContent>{children}</S.DashBoardContent>
        </S.DashBoardTemplateWrapper>
    );
};
