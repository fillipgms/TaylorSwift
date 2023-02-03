import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    padding: 15px 20px;
    color: rgb(235, 234, 231);
    font-size: 1.3rem;
    align-items: center;
    backdrop-filter: blur(13px);
    background: ${({ scrolled }) =>
        scrolled ? " rgba(16, 29, 41, 0.7)" : "rgba(255, 255, 255, 0.05)"};
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
    z-index: 99;
    flex-direction: row;
    transition: background 0.5s;
    flex-direction: row;
`;

export const Nav = styled.nav`
    display: flex;
    list-style: none;
    gap: 15px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Midnights = styled.a`
    transition: text-shadow 0.5s;

    :hover {
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
        text-shadow: 0 0 25px rgba(132, 176, 187, 0.733);
    }
`;

export const NavContainer = styled.ul`
    display: flex;
    list-style: none;
    gap: 15px;
`;

export const SocialMedia = styled.a`
    display: block;
    position: relative;
    width: 32px !important;
    height: 32px !important;
    border-radius: 40px;
    max-height: initial !important;
    font-size: 0;
    background: rgb(235, 234, 231);
    svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 16px !important;
        height: 16px !important;
        max-width: 100% !important;
        max-height: 100% !important;
        color: #2e364c !important;
        fill: #2e364c !important;
    }
`;

export const PhoneMenu = styled.div`
    height: 20px;
    width: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    span:nth-child(1) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(135deg)" : "rotate(0)")};
        top: ${({ isOpen }) => (isOpen ? "0.56rem" : "0")};
    }

    span:nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? "0" : "100%")};
    }

    span:nth-child(3) {
        transform: ${({ isOpen }) =>
            isOpen ? "rotate(-135deg)" : "rotate(0)"};
        top: ${({ isOpen }) => (isOpen ? "-0.52rem" : "0")};
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export const MenuBars = styled.span`
    position: relative;
    transition: 0.2s;
    height: 2px;
    width: 100%;
    background-color: rgb(235, 234, 231);
`;
