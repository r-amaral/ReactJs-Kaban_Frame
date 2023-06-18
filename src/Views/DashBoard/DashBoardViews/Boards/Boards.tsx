import React from "react";
import * as S from "./styles";
import { BoardHeader } from "./BoardHeader";

export const Boards: React.FC = () => {
    return (
        <S.BoardWrapper>
            <BoardHeader />
        </S.BoardWrapper>
    );
};
