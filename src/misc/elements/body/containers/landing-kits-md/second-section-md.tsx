import {useEffect, useRef} from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {motion} from "framer-motion";
import { useViewAnimation } from "../../../../hooks/useViewAnimation";

import '../landing-kits/sections.css';
import '../landing-kits/second-section.css';

import WeLoveKits from '../../../../assets/we-love-kits.webp';
import PersonH from '../../../../assets/person-h.webp';
import PersonK from '../../../../assets/person-k.webp';
import PersonL from '../../../../assets/person-l.webp';
import PersonW from '../../../../assets/person-w.webp';
import H from "../../../../assets/H.svg";
import K from "../../../../assets/K.svg";
import L from "../../../../assets/L.svg";
import W from "../../../../assets/W.svg";

interface SecondSectionProps { windowSize: any }

const SecondSection: React.FC<SecondSectionProps> = ({ windowSize }) => {
    const ref = useRef(null), ref_2 = useRef(null), ref_cards_one = useRef(null),
          ref_cards_two = useRef(null), ref_cards_three = useRef(null), ref_cards_fourth = useRef(null);

    const firstAnimation = useViewAnimation(ref, "visible", "hidden");
    const secondAnimation = useViewAnimation(ref_2, "visible", "hidden");

    const cardsAnimationOne = useViewAnimation(ref_cards_one, "visible", "hidden");
    const cardsAnimationTwo = useViewAnimation(ref_cards_two, "visible", "hidden");
    const cardsAnimationThree = useViewAnimation(ref_cards_three, "visible", "hidden");
    const cardsAnimationFourth = useViewAnimation(ref_cards_fourth, "visible", "hidden");

    return (
        <div className='container'>
            <div  id="to-blur" className='container-inner'>
                <div className='flex'>
                    <div className="motion-text-separators" />
                    <motion.div ref={ref}
                        variants={{ hidden: {opacity: 0}, visible: {opacity: 1} }}
                        initial="hidden"
                        animate={firstAnimation.mainControls}
                        transition={{duration: 0.75, delay: 0.25}}

                        className="motion-text">
                        <p>DISEÑAMOS KITS PERSONALIZADOS<br/>
                            <a>QUE CREAN EXPERIENCIAS QUE</a><br/>
                            <a>PERDURAN EN EL TIEMPO</a></p>
                    </motion.div>
                    <div className="motion-text-separators" />
                </div>

                <motion.div ref={ref_2}
                    variants={{ hidden: {opacity: 0}, visible: {opacity: 1} }}
                    initial="hidden"
                    animate={secondAnimation.mainControls}
                    transition={{duration: 0.75, delay: 0.25}}

                    className="motion-image">
                    <LazyLoadImage alt="We Love Kits - Illustration" src={WeLoveKits} placeholderSrc={WeLoveKits}
                        width={windowSize.width} effect="blur"/>
                </motion.div>

                <div className="second-container">
                    <div className="card-text"><p>¿CÓMO LO</p><a>HACEMOS?</a></div>
                    <div className="container-cards">
                        <motion.div variants={{ hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0} }}
                                    initial="hidden" animate={cardsAnimationOne.mainControls} transition={{ duration: 0.75, delay: 0.25 }}
                                    className="card bg-[#AB94FF]" ref={ref_cards_one}>
                            <div className="letter-card w"><LazyLoadImage alt="W Letter" src={W} placeholderSrc={W} effect="blur" /></div>
                            <div className="person-card pw"><LazyLoadImage alt="W Person" src={PersonW} placeholderSrc={PersonW} effect="blur" /></div>
                        </motion.div>
                        <motion.div variants={{ hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0} }}
                                    initial="hidden" animate={cardsAnimationTwo.mainControls} transition={{ duration: 0.75, delay: 0.50 }}
                                    className="card bg-[#79A3FF]" ref={ref_cards_two}>
                            <div className="letter-card l"><LazyLoadImage alt="L Letter" src={L} placeholderSrc={L} effect="blur" /></div>
                            <div className="person-card pl"><LazyLoadImage alt="L Person" src={PersonL} placeholderSrc={PersonL} effect="blur" /></div>
                        </motion.div>
                        <motion.div variants={{ hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0} }}
                                    initial="hidden" animate={cardsAnimationThree.mainControls} transition={{ duration: 0.75, delay: 0.75 }}
                                    className="card bg-[#FF7878]" ref={ref_cards_three}>
                            <div className="letter-card k"><LazyLoadImage alt="K Letter" src={K} placeholderSrc={K} effect="blur" /></div>
                            <div className="person-card pk"><LazyLoadImage alt="K Person" src={PersonK} placeholderSrc={PersonK} effect="blur" /></div>
                        </motion.div>
                        <motion.div variants={{ hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0} }}
                                    initial="hidden" animate={cardsAnimationFourth.mainControls} transition={{ duration: 0.75, delay: 1 }}
                                    className="card bg-[#7BEC94]" ref={ref_cards_fourth}>
                            <div className="letter-card h" ><LazyLoadImage alt="H Letter" src={H} placeholderSrc={H} effect="blur" /></div>
                            <div className="person-card ph"><LazyLoadImage alt="H Person" src={PersonH} placeholderSrc={PersonH} effect="blur" /></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection
