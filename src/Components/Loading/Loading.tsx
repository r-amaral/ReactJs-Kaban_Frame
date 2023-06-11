import React from "react";
import * as S from "./styles";

interface LoadingProps {
    visible: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ visible }) => {
    if (!visible) return <></>;

    return (
        <S.LoadingContainer>
            <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContainer>
    );
};
