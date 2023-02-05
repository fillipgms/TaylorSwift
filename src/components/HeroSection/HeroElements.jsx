import styled from "styled-components";

export const HeroContainer = styled.section`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: -1;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    width: 50%;
    background-color: rgb(235, 234, 231);
    border-radius: 10px 10px 0 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const MvContainer = styled.div`
    width: 100%;
`;

export const MvTittle = styled.h1`
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    color: #101d29;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const MidnightsLogo = styled.span`
    background-image: linear-gradient(
        45deg,
        rgb(80, 98, 137),
        rgb(82, 141, 156),
        rgb(132, 176, 187)
    );
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
`;

export const MvThumbnail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: rgb(235, 234, 231);
    background-image: url(https://i.ytimg.com/vi/h8DLofLM7No/maxresdefault.jpg);
    width: 100%;
    aspect-ratio: 16/9;
    background-size: cover;

    :hover {
        svg {
            opacity: 50%;
        }
    }
`;
