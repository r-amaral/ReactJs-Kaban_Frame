import React, { useContext } from "react";
import * as S from "./styles";
import PincelIcon from "../../../../../assets/pincel.svg";
import { AuthContext } from "../../../../../Context/AuthContext";
import { profileImage } from "./profileImage";

export const BoardHeader: React.FC = () => {
    const { userName } = useContext(AuthContext);

    const titleRef = React.useRef<HTMLInputElement>(null);

    const [img, setImg] = React.useState<string>();
    const [titleDisabled, setTitleDisabled] = React.useState(true);

    const handleChangeTitle = () => {
        setTitleDisabled(false);
    };

    const getRandomImageProfile = () => {
        const ramdomImage =
            profileImage[Math.floor(Math.random() * profileImage.length)];

        setImg(ramdomImage);
    };

    React.useEffect(() => {
        if (!titleDisabled) {
            titleRef.current?.focus();
        }
    }, [titleDisabled]);

    React.useEffect(() => {
        getRandomImageProfile();
    }, []);

    return (
        <S.BoardHeader>
            <S.TitleWrapper>
                <S.Pincel src={PincelIcon} onClick={handleChangeTitle} />
                <S.InputTitle
                    ref={titleRef}
                    defaultValue="Menu Kanban"
                    disabled={titleDisabled}
                    onBlur={() => setTitleDisabled(true)}
                />
            </S.TitleWrapper>
            <S.ProfileWrapper>
                <S.ProfileTextContainer>
                    <S.ProfileName>{userName?.split(" ")[0]}</S.ProfileName>
                </S.ProfileTextContainer>
                <S.ImageProfile src={img} />
            </S.ProfileWrapper>
        </S.BoardHeader>
    );
};
