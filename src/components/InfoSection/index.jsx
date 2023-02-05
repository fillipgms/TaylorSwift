import React from "react";
import {
    ErasContainer,
    ErasSelector,
    Era,
    Midnight,
    Icon,
    Eras,
    ErasDescription,
} from "./infoElements";

import Debut from "../../imgs/debut.png";
import Fearless from "../../imgs/fearless.png";
import SpeakNow from "../../imgs/speaknow.png";
import Red from "../../imgs/red.png";
import Nineteen from "../../imgs/nineteen.png";
import Reputation from "../../imgs/reputation.png";
import Lover from "../../imgs/lover.png";
import Folklore from "../../imgs/folklore.png";
import Evermore from "../../imgs/evermore.png";
import Midnights from "../../imgs/midnights.png";

const InfoSection = () => {
    return (
        <>
            <ErasContainer>
                <Eras>
                    <ErasSelector>
                        <Icon
                            Color={"#008080 "}
                            Names={"Taylor Swift"}
                            Font={"Satisfaction"}
                        >
                            <Era src={Debut} />
                        </Icon>
                        <Icon
                            Color={"#f6ed95 "}
                            Names={"Fearless"}
                            Font={"Carla"}
                        >
                            <Era src={Fearless} />
                        </Icon>
                        <Icon
                            Color={"#e2b7ce"}
                            Names={"Speak Now"}
                            Font={"Sudestada"}
                        >
                            <Era src={SpeakNow} />
                        </Icon>
                        <Icon Color={"#a02b48"} Names={"Red"} Font={"Tanohe"}>
                            <Era src={Red} />
                        </Icon>
                        <Icon
                            Color={"#89cff0"}
                            Names={"1989"}
                            Font={"Handwriting"}
                        >
                            <Era src={Nineteen} />
                        </Icon>
                        <Icon
                            Color={"#e3e3e3"}
                            Names={"reputation"}
                            Font={"Optienglish"}
                        >
                            <Era src={Reputation} />
                        </Icon>
                        <Icon
                            Color={"#FFC0CB"}
                            Names={"Lover"}
                            Font={"Soulmate"}
                        >
                            <Era src={Lover} />
                        </Icon>
                        <Icon
                            Color={"#949494"}
                            Names={"Folklore"}
                            Font={"FeNit"}
                        >
                            <Era src={Folklore} />
                        </Icon>
                        <Icon
                            Color={"#cc5500"}
                            Names={"Evermore"}
                            Font={"Imfell"}
                        >
                            <Era src={Evermore} />
                        </Icon>
                        <Midnight
                            Color={"#1e3f66"}
                            Names={"Midnights"}
                            Font={"NueHaas"}
                        >
                            <Era src={Midnights} />
                        </Midnight>
                    </ErasSelector>
                </Eras>
                <ErasDescription></ErasDescription>
            </ErasContainer>
        </>
    );
};

export default InfoSection;
