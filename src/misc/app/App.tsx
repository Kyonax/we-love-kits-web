import { Route, Routes } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import './App.css';

import FooterInfo from '../elements/footer-info';
import FooterInfoMD from '../elements/footer-info-md';
import FooterInfoSM from '../elements/footer-info-sm';

import NavBar from '../elements/nav-bar';
import NavBarMD from '../elements/nav-bar-md';
import NavBarSM from '../elements/nav-bar-sm';

import LandingKits from '../elements/body/landing-kits';
import LandingKitsMD from '../elements/body/landing-kits-md'
import LandingKitsSM from '../elements/body/landing-kits-sm'

import KitBienvenida from '../elements/body/kit-bienvenida';
import KitEventos from '../elements/body/kit-eventos';
import KitProyectos from '../elements/body/kit-proyectos';
import KitReconocimiento from '../elements/body/kit-reconocimiento';

import FirstSectionMD from '../elements/body/containers/landing-kits-md/first-section-md';
import FirstSectionSM from '../elements/body/containers/landing-kits-sm/first-section-sm';
import FirstSectionVideo from '../elements/body/containers/landing-kits/first-section-video';

function getWindowDimensions () {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height}
}

function App() {
    const [innerPosition, setInnerPosition] = useState(0);
    const [windowSize, setWindowSize] = useState(getWindowDimensions());

    const handleInnerScroll = () => {
        const position = window.pageYOffset;
        setInnerPosition(position)
    };

    useEffect(() => {
        function handleResize() { setWindowSize(getWindowDimensions()); console.log(windowSize) }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [windowSize]);

    
    useEffect(() => {
        window.addEventListener('scroll', handleInnerScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleInnerScroll)
        }
    }, [innerPosition]);

    const navBarRender = () => {
        switch (true) {
                case (windowSize.width > 1200): return <NavBar/>
                case (windowSize.width <= 1200 && windowSize.width > 768): return <NavBarMD/>
                case (windowSize.width <= 768): return <NavBarSM/>
                default: return <NavBar/>
        }
    }

    const firstSectionRender = () => {
        switch (true) {
                case (windowSize.width > 1200): return <FirstSectionVideo innerPosition={innerPosition}/>
                case (windowSize.width <= 1200 && windowSize.width > 768): return <FirstSectionMD innerPosition={innerPosition} windowSize={windowSize}/>
                case (windowSize.width <= 768): return <FirstSectionSM innerPosition={innerPosition} windowSize={windowSize}/>
                default: return <FirstSectionVideo innerPosition={innerPosition}/>
        }
    }

    const landingKitsRender = () => {
        switch (true) {
                case (windowSize.width > 1200): return <LandingKits windowSize={windowSize}/>
                case (windowSize.width <= 1200 && windowSize.width > 768): return <LandingKitsMD windowSize={windowSize}/>
                case (windowSize.width <= 768): return <LandingKitsSM windowSize={windowSize}/>
            default: return <LandingKits windowSize={windowSize} />
        }
    }

    const footerRender = () => {
        switch (true) {
                case (windowSize.width > 1200): return <FooterInfo/>
                case (windowSize.width <= 1200 && windowSize.width > 768): return <FooterInfoMD/>
                case (windowSize.width <= 768): return <FooterInfoSM/>
                default: return <FooterInfo/>
        }
    }

    return (
        <div className='bg-black body-parallax overflow-hidden container-parallax-1'>
            <div className="absolute font-bold z-50 right-5 top-3 text-white">{windowSize.width}x{windowSize.height}</div>

            <header> {navBarRender()} </header>

            <Routes> <Route path='/testing-we-love-kits-v50-24fps' element={firstSectionRender()} /> </Routes>

            <div className='text-white bg-white'>
                <div>
                    <Routes> <Route path='/testing-we-love-kits-v50-24fps' element={landingKitsRender()} /> </Routes>
                </div>
            </div>


            <footer> {footerRender()} </footer>

        </div >
    );
}

export default App;
