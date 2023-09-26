import { Route, Routes } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import FooterInfo from '../elements/footer-info';

import NavBar from '../elements/nav-bar';
import LandingKits from '../elements/body/landing-kits';
import KitBienvenida from '../elements/body/kit-bienvenida';
import KitEventos from '../elements/body/kit-eventos';
import KitProyectos from '../elements/body/kit-proyectos';
import KitReconocimiento from '../elements/body/kit-reconocimiento';

import FirstSection from '../elements/body/containers/landing-kits/first-section';

import FirstSectionVideo from '../elements/body/containers/landing-kits/first-section-video';

function App() {
    const [innerPosition, setInnerPosition] = useState(0);
    const innerParallax = useRef(null);

    const handleInnerScroll = () => {
        const position = window.pageYOffset;
        setInnerPosition(position)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleInnerScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleInnerScroll)
        }
    }, [innerPosition]);

    return (
        <div className='bg-black body-parallax overflow-hidden container-parallax-1' ref={innerParallax} >
            <header>
                <NavBar />
            </header>


            <Routes>
                <Route path='/testing-we-love-kits-v20-30fps' element={<FirstSectionVideo innerPosition={innerPosition} />} />
            </Routes>

            <div className='text-white'>
                <div>
                    <Routes>
                        <Route path='/testing-we-love-kits-v20-30fps' element={<LandingKits innerPosition={innerPosition} />} />
                        <Route path='/kit-bienvenida' element={<KitBienvenida />} />
                        <Route path='/kit-eventos' element={<KitEventos />} />
                        <Route path='/kit-proyectos' element={<KitProyectos />} />
                        <Route path='/kit-reconocimiento' element={<KitReconocimiento />} />
                    </Routes>
                </div>
            </div>


            <footer>
                <FooterInfo />
            </footer>

        </div >
    );
}

export default App;
