import "./body-css/landing-kits.css";
import { useEffect } from "react";

import { ParallaxLayer } from "@react-spring/parallax";

import FirstSection from "./containers/landing-kits/first-section";
import SecondSection from "./containers/landing-kits/second-section";
import ThirdSection from "./containers/landing-kits/third-section";
import FourthSection from "./containers/landing-kits/fourth-section";
import FifthSection from "./containers/landing-kits/fifth-section";
import SixthSection from "./containers/landing-kits/sixth-section";

import FooterInfo from "../footer-info";

interface LandingKitsProps {
    innerPosition: any;
}

const LandingKits: React.FC<LandingKitsProps> = ({ innerPosition }) => {
    return (
        <div>
            <SecondSection />

            <ThirdSection />

            <FourthSection />

            <FifthSection />

            <SixthSection />
        </div>
    );
};

export default LandingKits;
