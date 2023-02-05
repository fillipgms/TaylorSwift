import styled from "styled-components";

export const ErasContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 30px;
    max-height: 90vh;
    min-height: fit-content;
    gap: 1rem;
    overflow: hidden;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 10px;
    }
`;

export const Eras = styled.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ErasSelector = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    * {
        min-width: 0;
    }
`;

export const Era = styled.img`
    display: block;
    width: 100%;
`;

export const Icon = styled.button`
    all: unset;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        :after {
            opacity: 1 !important;
        }
    }

    :hover {
        transform: scale(1.1);
        z-index: 3;
        box-shadow: 0px 0px 20px ${(props) => props.Color};

        &:after {
            opacity: 1;
        }
    }

    &:after {
        transition: 0.4s;
        content: "${(props) => props.Names}";
        display: block;
        position: absolute;
        color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        font-family: "${(props) => props.Font}";
        font-size: 1.3rem;
        text-shadow: 0 0 20px ${(props) => props.Color};
    }
`;

export const Midnight = styled(Icon)`
    grid-row: 1 / span 3;
    grid-column: 4;

    &:after {
        writing-mode: vertical-rl;
        text-orientation: upright;
    }
    :hover {
        transform: scale(1.05);
    }
`;

export const ErasDescription = styled.div`
    width: 50%;
    height: 100%;
    background-color: blue;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
