import "./body-css/landing-kits.css";
import { useEffect } from "react";

import { ParallaxLayer } from "@react-spring/parallax";

import FirstSection from "./containers/landing-kits/first-section";
import SecondSection from "./containers/landing-kits-sm/second-section-sm";
import ThirdSection from "./containers/landing-kits-sm/third-section-sm";
import FourthSection from "./containers/landing-kits-sm/fourth-section-sm";
import FifthSection from "./containers/landing-kits-sm/fifth-section-sm";
import SixthSection from "./containers/landing-kits-sm/sixth-section-sm";

import FooterInfo from "../footer-info";

interface LandingKitsProps {
   windowSize: any;
}

const LandingKits: React.FC<LandingKitsProps> = ({ windowSize }) => {
    return (
        <div>
            <SecondSection windowSize={windowSize} />

            <ThirdSection />

            <FourthSection />

            <FifthSection />

            <SixthSection />
        </div>
    );
};

export default LandingKits;
