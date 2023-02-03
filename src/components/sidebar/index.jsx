import React from "react";
import {
    SidebarContainer,
    PhoneNav,
    SidebarLink,
    SidebarFooter,
    SidebarMedia,
} from "./SideBarElements";

const Sidebar = ({ isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <PhoneNav>
                <SidebarLink to="home">Home</SidebarLink>
                <SidebarLink to="midnights">Midnights</SidebarLink>
                <SidebarLink to="music">Music</SidebarLink>
                <SidebarLink to="tour">Tour</SidebarLink>
                <SidebarLink to="contact">Contact</SidebarLink>
            </PhoneNav>
            <SidebarFooter>
                <SidebarMedia href="#">
                    <svg
                        class="h"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 48"
                        aria-labelledby="facebookTitle facebookDesc"
                        role="img"
                    >
                        <title id="facebookTitle">Facebook</title>
                        <desc id="facebookDesc">Facebook logo</desc>
                        <path
                            d="M36,10.27H31.33c-1.86,0-2.26.66-2.26,2.8V17.2H36L35.33,24H29.2V48H18.93V24H12V17.2h6.8V9.33C18.8,3.2,22.13,0,29.33,0H36Z"
                            transform="translate(-12)"
                        ></path>
                    </svg>
                </SidebarMedia>
                <SidebarMedia href="#">
                    <svg
                        class="w"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 47.41"
                        aria-labelledby="instagramTitle instagramDesc"
                        role="img"
                    >
                        <title id="instagramTitle">Instagram</title>
                        <desc id="instagramDesc">Instagram logo</desc>
                        <path
                            d="M23.91.36c3.69,0,7.36-.17,11,0,7.67.43,12.63,5.31,12.89,13,.24,7,.24,14,0,21-.25,7.94-5.22,12.91-13.12,13.17-7.05.24-14.13.25-21.18,0C5.5,47.26.7,42.73.28,34.75a214.41,214.41,0,0,1,0-21.81C.69,5.3,5.41.9,13.12.41c3.6-.22,7.2,0,10.79,0Zm-.08,43v0c3.81,0,7.64.21,11.4-.06,4.75-.33,7.86-3,8.09-7.71.38-7.75.34-15.54,0-23.29a7.38,7.38,0,0,0-7.39-7.41c-7.9-.34-15.82-.36-23.72,0C7.66,5,4.85,8,4.64,12.53,4.3,20,4.23,27.5,4.57,35c.24,5.32,3.37,8,8.68,8.35C16.77,43.49,20.3,43.33,23.83,43.33ZM36.31,24.05A12.32,12.32,0,1,1,24.14,11.78,12.32,12.32,0,0,1,36.31,24.05Zm-4.29,0A7.93,7.93,0,0,0,24.2,16h0A8,8,0,1,0,32,24.09v0ZM36.78,8.42a2.64,2.64,0,0,0-2.7,2.79A2.59,2.59,0,0,0,36.75,14a2.8,2.8,0,1,0,.37-5.58h-.34Z"
                            transform="translate(0 -0.3)"
                        ></path>
                    </svg>
                </SidebarMedia>
                <SidebarMedia href="#">
                    <svg
                        class="h"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 36.07 48"
                        aria-labelledby="tumblrTitle tumblrDesc"
                        role="img"
                    >
                        <title id="tumblrTitle">Tumblr</title>
                        <desc id="tumblrDesc">Tumblr logo</desc>
                        <path
                            d="M39.26,35l-.14-.14H32.46c-.28,0-.28-1-.28-1.39V22.06l.14-.14H40l.14-.14V10.13L40,10H32.18l-.13-.14V.14L31.91,0H17.34a2.51,2.51,0,0,0-2.22,1.94c-.69,5.69-3.74,8.33-8.6,10L6,12.07v9.71l.13.14h5.83V34.27C11.93,43.7,18,48,30,48c4.85,0,10.12-1.66,11.79-3.75L42,43.7C42,43.84,39.26,35,39.26,35Zm.56,8.88a14,14,0,0,1-8,2.63h-.28c-9.71,0-11.37-7.49-11.37-11.93V20.25l-.28-.13H14L13.87,20V13.87l.14-.14A12.47,12.47,0,0,0,22.61,2.5a.3.3,0,0,1,.28-.28h6.94l.14.14v9.71l.13.14h7.77l.14.14V20l-.14.14H30.24l-.14.13v13.6c0,2.91,1.53,4.3,4.17,4.3a9.09,9.09,0,0,0,3.33-.69l.27.14,2,6Z"
                            transform="translate(-5.97)"
                        ></path>
                    </svg>
                </SidebarMedia>
                <SidebarMedia href="#">
                    <svg
                        class="w"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 39.24"
                        aria-labelledby="twitterTitle twitterDesc"
                        role="img"
                    >
                        <title id="twitterTitle">Twitter</title>
                        <desc id="twitterDesc">Twitter logo</desc>
                        <path
                            d="M43.32,14.12A28.24,28.24,0,0,1,16.5,43.56,26.44,26.44,0,0,1,0,39a19.27,19.27,0,0,0,14.58-4.13A10,10,0,0,1,5.23,28a10.18,10.18,0,0,0,4.54-.14,9.78,9.78,0,0,1-8-9.77,10.12,10.12,0,0,0,4.54,1.24A10.15,10.15,0,0,1,3.16,6.15,27.78,27.78,0,0,0,23.38,16.46,9.75,9.75,0,0,1,30.81,4.63,10.21,10.21,0,0,1,40.3,7.52a22.25,22.25,0,0,0,6.32-2.47,9.92,9.92,0,0,1-4.26,5.5A15.72,15.72,0,0,0,48,9,16.21,16.21,0,0,1,43.32,14.12Z"
                            transform="translate(0 -4.38)"
                        ></path>
                    </svg>
                </SidebarMedia>
                <SidebarMedia href="#">
                    <svg
                        id="tiktok_logo"
                        class="h"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-8 -1 79 74.63"
                        aria-labelledby="tiktokTitle tiktokDesc"
                        role="img"
                    >
                        <title id="tiktokTitle">TikTok</title>
                        <desc id="tiktokDesc">TikTok logo</desc>
                        <path d="M46.58,0C47.81,10.59,53.72,16.9,64,17.58V29.49c-6,.58-11.17-1.37-17.24-5V46.73C46.76,75,15.91,83.87,3.5,63.59c-8-13.06-3.09-36,22.48-36.88V39.27a37.46,37.46,0,0,0-5.93,1.46c-5.69,1.92-8.91,5.53-8,11.89,1.73,12.18,24.07,15.78,22.21-8V0H46.58Z"></path>
                    </svg>
                </SidebarMedia>
                <SidebarMedia href="#">
                    <svg
                        class="w"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 34.34"
                        aria-labelledby="youTubeTitle youTubeDesc"
                        role="img"
                    >
                        <title id="youTubeTitle">YouTube</title>
                        <desc id="youTubeDesc">YouTube logo</desc>
                        <g id="YT">
                            <path
                                d="M39.27,7.17c-7.21-.46-23.24-.46-30.45,0C1,7.63-.11,11.41,0,24c0,12.36,1,16.37,8.7,16.83,7.21.46,23.24.46,30.56,0,7.9-.46,8.93-4.47,8.7-16.83S47.06,7.63,39.27,7.17Zm-22.21,25V15.87L34,24Z"
                                transform="translate(0 -6.83)"
                            ></path>
                        </g>
                    </svg>
                </SidebarMedia>
                <SidebarMedia href="#">
                    <svg
                        class="w"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 45.15"
                        aria-labelledby="snapchatTitle snapchatDesc"
                        role="img"
                    >
                        <title id="snapchatTitle">Snapchat</title>
                        <desc id="snapchatDesc">Snapchat logo</desc>
                        <path
                            d="M47.82,36.74a3,3,0,0,1-1.61,1.39,18.06,18.06,0,0,1-4.68,1.23,6,6,0,0,0-.28,1c-.08.36-.17.74-.27,1.12a1.22,1.22,0,0,1-1.23,1,5.8,5.8,0,0,1-1.1-.13,12.53,12.53,0,0,0-2.52-.26,10,10,0,0,0-1.8.16A8.57,8.57,0,0,0,31,44a10.81,10.81,0,0,1-6.62,2.59h-.67A10.81,10.81,0,0,1,17.07,44a8.64,8.64,0,0,0-3.36-1.74,10,10,0,0,0-1.81-.16,12.53,12.53,0,0,0-2.51.28,5.85,5.85,0,0,1-1.1.17,1.24,1.24,0,0,1-1.28-1c-.11-.41-.19-.77-.27-1.13a5.3,5.3,0,0,0-.35-1,18.57,18.57,0,0,1-4.65-1.18A3,3,0,0,1,.15,36.79,1.35,1.35,0,0,1,0,36.26a1.13,1.13,0,0,1,1-1.17,10.64,10.64,0,0,0,4.09-1.6A13.49,13.49,0,0,0,8,30.9a15.87,15.87,0,0,0,2.42-3.74,2,2,0,0,0,.22-1.6A4.19,4.19,0,0,0,8.05,24l-.7-.24a5.81,5.81,0,0,1-1.79-1A1.77,1.77,0,0,1,4.8,21a2,2,0,0,1,1-1.33,2.79,2.79,0,0,1,1.44-.4,1.89,1.89,0,0,1,.81.16,5.29,5.29,0,0,0,2.14.58,2.13,2.13,0,0,0,.79-.15v-1c-.21-3.2-.46-7.3.6-9.7a13.06,13.06,0,0,1,2.88-4.2,12.06,12.06,0,0,1,3.5-2.32,13.88,13.88,0,0,1,5.57-1.17h1a14,14,0,0,1,5.48,1.15A12.16,12.16,0,0,1,33.45,4.9a13.06,13.06,0,0,1,2.92,4.2c1.08,2.4.82,6.39.61,9.7v1.13a1.62,1.62,0,0,0,.65.14,5.49,5.49,0,0,0,2-.57,2.46,2.46,0,0,1,1-.2,2.83,2.83,0,0,1,1,.2,2.05,2.05,0,0,1,1.6,1.79,1.8,1.8,0,0,1-.57,1.31,5.49,5.49,0,0,1-1.92,1.16l-.8.19a4.18,4.18,0,0,0-2.52,1.59,2,2,0,0,0,.22,1.6c.11.29,3,6.87,9.41,8a1.12,1.12,0,0,1,1,1.17A1.57,1.57,0,0,1,47.82,36.74Z"
                            transform="translate(0 -1.43)"
                        ></path>
                    </svg>
                </SidebarMedia>
            </SidebarFooter>
        </SidebarContainer>
    );
};

export default Sidebar;
