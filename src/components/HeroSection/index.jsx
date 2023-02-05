import React from "react";
import Video from "../../videos/video.mp4";
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    MvContainer,
    MvTittle,
    MidnightsLogo,
    MvThumbnail,
} from "./HeroElements";
import { AiOutlinePlayCircle } from "react-icons/ai";

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <MvContainer>
                    <MvTittle>
                        <MidnightsLogo>Midnights</MidnightsLogo>
                        Lavender Haze
                    </MvTittle>
                    <a
                        href="https://www.youtube.com/watch?time_continue=1&v=h8DLofLM7No&ab_channel=TaylorSwiftVEVO"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MvThumbnail>
                            <AiOutlinePlayCircle />
                        </MvThumbnail>
                    </a>
                </MvContainer>
            </HeroContent>
            <HeroBg>
                <VideoBg src={Video} autoPlay loop muted type="video/mp4" />
            </HeroBg>
        </HeroContainer>
    );
};

export default HeroSection;
