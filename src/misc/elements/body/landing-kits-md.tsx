import "./body-css/landing-kits.css";
import { useEffect } from "react";

import { ParallaxLayer } from "@react-spring/parallax";

import FirstSection from "./containers/landing-kits/first-section";
import SecondSection from "./containers/landing-kits-md/second-section-md";
import ThirdSection from "./containers/landing-kits-md/third-section-md";
import FourthSection from "./containers/landing-kits-md/fourth-section-md";
import FifthSection from "./containers/landing-kits-md/fifth-section-md";
import SixthSection from "./containers/landing-kits-md/sixth-section-md";

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
