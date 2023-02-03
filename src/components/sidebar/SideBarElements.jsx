import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    backdrop-filter: blur(13px);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    top: 56px;
    right: 0;
    height: 93.3vh;
    align-items: center;
    transition: 0.4s ease-in-out;
    padding: 30px 0;
    transform: ${({ isOpen }) =>
        isOpen ? "translateX(0%)" : "translateX(100%)"};
`;

export const PhoneNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`;

export const SidebarLink = styled(LinkS)`
    text-decoration: none;
    color: rgb(235, 234, 231);
    font-size: 1.2rem;
    cursor: pointer;
`;

export const SidebarFooter = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 60px 30px;
`;

export const SidebarMedia = styled.a`
    display: block;
    position: relative;
    width: 32px !important;
    height: 32px !important;
    border-radius: 40px;
    max-height: initial !important;
    font-size: 0;
    background: rgb(177, 177, 177);
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
