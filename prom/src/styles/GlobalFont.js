import { createGlobalStyle } from "styled-components";
import PretendardT from "../asset/font/Pretendard-Thin.ttf";
import PretendardEL from "../asset/font/Pretendard-ExtraLight.ttf";
import PretendardL from "../asset/font/Pretendard-Light.ttf";
import PretendardR from "../asset/font/Pretendard-Regular.ttf";
import PretendardM from "../asset/font/Pretendard-Medium.ttf";
import PretendardS from "../asset/font/Pretendard-SemiBold.ttf";
import PretendardB from "../asset/font/Pretendard-Bold.ttf";
import PretendardEB from "../asset/font/Pretendard-ExtraBold.ttf";
import PretendardBL from "../asset/font/Pretendard-Black.ttf";

export const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: "Pretendard";
        src: local("Pretendard-Thin"),
        url(${PretendardT}) format('ttf');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard";
        src: local("Pretendard-ExtraLight"),
        url(${PretendardEL}) format('ttf');
        font-weight: 200;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard";
        src: local("Pretendard-Light"),
        url(${PretendardL}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard";
        src: local("Pretendard-Regular"),
        url(${PretendardR}) format('ttf');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard";
        src: local("Pretendard-Medium"),
        url(${PretendardM}) format('ttf');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard";
        src: local("Pretendard-SemiBold"),
        url(${PretendardS}) format('ttf');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard";
        src: local("Pretendard-Bold"),
        url(${PretendardB}) format('ttf');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard";
        src: local("Pretendard-ExtraBold"),
        url(${PretendardEB}) format('ttf');
        font-weight: 800;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard";
        src: local("Pretendard-Black"),
        url(${PretendardBL}) format('ttf');
        font-weight: 900;
        font-style: normal;
    }
`;
