import {useEffect, useRef} from "react";
import {motion} from "framer-motion";

import { Images, useSizeImages } from './imports';
import { useViewAnimation } from "../../components/hooks/view_animation/hook";

import LoadImage from '../../components/elements/image_load/component';
import './sections.css'; import './second-section.css';

const SecondSection = () => {
    const { illustrationSize, letterWSize, letterLSize, letterKSize, letterHSize,
    personWSize, personLSize, personKSize, personHSize } = useSizeImages();

    const ref = useRef(null), ref_2 = useRef(null), ref_cards_one = useRef(null),
          ref_cards_two = useRef(null), ref_cards_three = useRef(null), ref_cards_fourth = useRef(null), ref_text = useRef(null);

    const firstAnimation = useViewAnimation(ref, "visible", "hidden");
    const secondAnimation = useViewAnimation(ref_2, "visible", "hidden");
    const textAnimation = useViewAnimation(ref_text, "visible", "hidden");

    const cardsAnimationOne = useViewAnimation(ref_cards_one, "visible", "hidden");
    const cardsAnimationTwo = useViewAnimation(ref_cards_two, "visible", "hidden");
    const cardsAnimationThree = useViewAnimation(ref_cards_three, "visible", "hidden");
    const cardsAnimationFourth = useViewAnimation(ref_cards_fourth, "visible", "hidden");

    return (
        <div className='container overflow-hidden'>
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
                    <LoadImage alt="We Love Kits Illustration" w={illustrationSize.sizeResponsive.width} h={illustrationSize.sizeResponsive.height}
                               instantLoad={true} image={Images["we-love-kits-illustration"]} />
                </motion.div>

                <div className="second-container">
                    <motion.div ref={ref_text}
                                variants={{ hidden: {opacity:0, x: -100}, visible: {opacity: 1, x: 0} }}
                                initial="hidden"
                                animate={textAnimation.mainControls}
                                transition={{duration: 0.75, delay: 0.25}}

                        className="card-text"><p>¿CÓMO LO</p><a>HACEMOS?</a></motion.div>
                    <div className="container-cards">
                        <motion.div variants={{ hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0} }}
                                    initial="hidden" animate={cardsAnimationOne.mainControls} transition={{ duration: 0.75, delay: 0.25 }}
                                    className="card bg-[#AB94FF]" ref={ref_cards_one}>
                            <div className="letter-card w" style={{width: letterWSize.sizeResponsive.width, height: letterWSize.sizeResponsive.height}}>
                                <LoadImage alt="Letter W" w={letterWSize.sizeResponsive.width} h={letterWSize.sizeResponsive.height} instantLoad={true} image={Images['letter-w']} />
                            </div>
                            <div className="person-card pw" style={{width: personWSize.sizeResponsive.width, height: personWSize.sizeResponsive.height}}>
                                <LoadImage alt="Person W" w={personWSize.sizeResponsive.width} h={personWSize.sizeResponsive.height} instantLoad={true} image={Images['person-w']} />
                            </div>
                            <div className="text-card-inner w"><p className="font-bold text-[#FFE661]">HABLAMOS <p className="font-normal text-white">para entender a fondo tus necesidades,<p className="font-bold">cada kit es único</p></p></p></div>
                        </motion.div>
                        <motion.div variants={{ hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0} }}
                                    initial="hidden" animate={cardsAnimationTwo.mainControls} transition={{ duration: 0.75, delay: 0.50 }}
                                    className="card bg-[#79A3FF]" ref={ref_cards_two}>
                            <div className="letter-card l" style={{width: letterLSize.sizeResponsive.width, height: letterLSize.sizeResponsive.height}}>
                                <LoadImage alt="Letter L" w={letterLSize.sizeResponsive.width} h={letterLSize.sizeResponsive.height} instantLoad={true} image={Images['letter-l']} />
                            </div>
                            <div className="person-card pl" style={{width: personLSize.sizeResponsive.width, height: personLSize.sizeResponsive.height}}>
                                <LoadImage alt="Person L" w={personLSize.sizeResponsive.width} h={personLSize.sizeResponsive.height} instantLoad={true} image={Images['person-l']} />
                            </div>
                        <div className="text-card-inner l"><p className="font-bold">Creamos un diseño <p className="font-bold text-[#044FEA]">PERSONALIZADO <p className="font-normal text-white">para cumplir con la visión de tu Kit</p></p></p></div>
                        </motion.div>
                        <motion.div variants={{ hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0} }}
                                    initial="hidden" animate={cardsAnimationThree.mainControls} transition={{ duration: 0.75, delay: 0.75 }}
                                    className="card bg-[#FF7878]" ref={ref_cards_three}>
                            <div className="letter-card k" style={{width: letterKSize.sizeResponsive.width, height: letterKSize.sizeResponsive.height}}>
                                <LoadImage alt="Letter K" w={letterKSize.sizeResponsive.width} h={letterKSize.sizeResponsive.height} instantLoad={true} image={Images['letter-k']} />
                            </div>
                            <div className="person-card pk" style={{width: personKSize.sizeResponsive.width, height: personKSize.sizeResponsive.height}}>
                                <LoadImage alt="Person K" w={personKSize.sizeResponsive.width} h={personKSize.sizeResponsive.height} instantLoad={true} image={Images['person-k']} />
                            </div>
                        <div className="text-card-inner k"><p>Construimos con los mejores materiales de alta calidad</p></div>
                        </motion.div>
                        <motion.div variants={{ hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0} }}
                                    initial="hidden" animate={cardsAnimationFourth.mainControls} transition={{ duration: 0.75, delay: 1 }}
                                    className="card bg-[#7BEC94]" ref={ref_cards_fourth}>
                            <div className="letter-card h" style={{width: letterHSize.sizeResponsive.width, height: letterHSize.sizeResponsive.height}} >
                                <LoadImage alt="Letter H" w={letterHSize.sizeResponsive.width} h={letterHSize.sizeResponsive.height} instantLoad={true} image={Images['letter-h']} />
                            </div>
                            <div className="person-card ph" style={{width: personHSize.sizeResponsive.width, height: personHSize.sizeResponsive.height}}>
                                <LoadImage alt="Person H" w={personHSize.sizeResponsive.width} h={personHSize.sizeResponsive.height} instantLoad={true} image={Images['person-h']} />
                            </div>
                        <div className="text-card-inner h"><p>Experimenta la emoción de recibir tu kit personalizado, listo para hacer realidad tus sueños</p></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection;
