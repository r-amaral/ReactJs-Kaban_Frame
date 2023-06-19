import React from "react";
import * as S from "./styles";
import { BoardHeader } from "./BoardHeader";
import { BoardContent } from "./BoardContent";
import { AuthenticateButton } from "../../../../Components";
import useColumnTasks from "../../../../Hooks/useColumnTasks";
import { ColumnType } from "../../../../Utils/enums";

export const Boards: React.FC = () => {
    const { addEmptyTask } = useColumnTasks(ColumnType.TO_DO);
    return (
        <S.BoardWrapper>
            <BoardHeader />
            <S.NewTaskWrapperButton>
                <AuthenticateButton
                    text="Criar nova tarefa"
                    onClick={addEmptyTask}
                />
            </S.NewTaskWrapperButton>
            <BoardContent />
        </S.BoardWrapper>
    );
};
