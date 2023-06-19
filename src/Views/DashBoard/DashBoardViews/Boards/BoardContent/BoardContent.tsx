import React from "react";
import * as S from "./styles";
import { Column } from "../../../../../Components";
import { ColumnType } from "../../../../../Utils/enums";

export const BoardContent: React.FC = () => {
    return (
        <S.StyledBoardContent>
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.IN_PROGRESS} />
            <Column column={ColumnType.BLOCKED} />
            <Column column={ColumnType.COMPLETED} />
        </S.StyledBoardContent>
    );
};
