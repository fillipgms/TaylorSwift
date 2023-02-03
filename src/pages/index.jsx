import { useState } from "react";
import Eras from "../components/ErasSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";

const Home = () => {
    const [scrolled, setScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const scrollNavbar = () => {
        if (window.scrollY > 10) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    window.addEventListener("scroll", scrollNavbar);

    return (
        <>
            <Navbar toggle={toggle} scrolled={scrolled} isOpen={isOpen} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <Eras />
        </>
    );
};

export default Home;
