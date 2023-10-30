import {useEffect, useRef, useState} from "react"

import disableScroll from 'disable-scroll';
import Modal from '../../../items/modal_kits';

import KitBienvenida from '../../../../assets/modal-images/kit-bienvenida-one.png'
import KitEventos from '../../../../assets/modal-images/kit-eventos-one.png'
import KitProyectos from '../../../../assets/modal-images/kit-proyectos-one.png'
import KitReconocimiento from '../../../../assets/modal-images/kit-reconocimiento-one.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import HeartText from '../../../../assets/hearts-text.webp'
import HeartGirl from '../../../../assets/heart-girl.webp'

import {motion, useInView, useAnimation} from "framer-motion";

interface FourthSectionProps {}

const FourthSection: React.FC<FourthSectionProps> = ({}) => {
    const [isModal, setIsModal] = useState(false), [whichCard, setWhichCard] = useState(0);

    const refText = useRef(null), refHearts = useRef(null), refGirl = useRef(null),
          refCardOne = useRef(null), refCardTwo = useRef(null), refCardThree = useRef(null),
          refCardFourth = useRef(null);

    const isInViewText = useInView(refText), isInViewHearts = useInView(refHearts), isInViewGirl = useInView(refGirl),
          isInViewCardOne = useInView(refCardOne), isInViewCardTwo = useInView(refCardTwo), isInViewCardThree = useInView(refCardThree),
          isInViewCardFourth = useInView(refCardFourth);

    const textControls = useAnimation(), heartsControls = useAnimation(), girlControls = useAnimation(),
          cardOneControls = useAnimation(), cardTwoControls = useAnimation(), cardThreeControls = useAnimation(),
          cardFourthControls = useAnimation();

    useEffect(() => {
        if (isInViewText) textControls.start("visible");
            else textControls.start("hidden");

        if (isInViewHearts) heartsControls.start("visible");
            else heartsControls.start("hidden");

        if (isInViewGirl) girlControls.start("visible");
            else girlControls.start("hidden");

        if (isInViewCardOne) cardOneControls.start("visible");
            else cardOneControls.start("hidden");

        if (isInViewCardTwo) cardTwoControls.start("visible");
            else cardTwoControls.start("hidden");

        if (isInViewCardThree) cardThreeControls.start("visible");
            else cardThreeControls.start("hidden");

        if (isInViewCardFourth) cardFourthControls.start("visible");
            else cardFourthControls.start("hidden");

    }, [isInViewText, isInViewHearts, isInViewGirl, isInViewCardOne, isInViewCardTwo, isInViewCardThree, isInViewCardFourth])

    useEffect(() => {
        const BackElements = document.querySelectorAll('[id=to-blur]');

        BackElements.forEach(element => {
            if (isModal) {element?.classList.add('blur-class'); disableScroll.on()}
                else {element?.classList.remove('blur-class'); disableScroll.off()}
        } );
        console.log(isModal)
    }, [isModal]);

    return (
        <div className='m-auto w-screen flex justify-center bg-white'>
            <div className={isModal ? 'flex' : 'hidden'}><Modal number_of_card={whichCard} is_showing={isModal} setIsShowing={setIsModal}/></div>

            <div id="to-blur" className='m-auto mt-[10rem] flex w-screen min-w-[1200px] max-w-[1200px]'>
                <div className="w-4/12 block py-10 px-0 text-6xl text-black font-light">
                    <motion.div

                        variants={{
                            hidden: {opacity: 0, x: -75},
                            visible: {opacity: 1, x: 0}
                        }}
                        initial="hidden"
                        animate={textControls}
                        transition={{duration: 0.75, delay: 0.25}}

                        ref={refText}>
                        <p className="font-bold">CADA KIT</p>
                        <p className="font-bold flex">ES UNA <a className="ml-3 font-light"> OBRA</a></p>
                        <p>DE ARTE</p>
                    </motion.div>
                    <motion.p
                        variants={{
                            hidden: {opacity: 0, x: -75},
                            visible: {opacity: 1, x: 0}
                        }}
                        initial="hidden"
                        animate={heartsControls}
                        transition={{duration: 0.75, delay: 0.25}}

                        className="px-[10rem] mt-4 pl-0" ref={refHearts}><LazyLoadImage src={HeartText} /></motion.p>
                    <motion.p
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visible: {opacity: 1, y: 0}
                        }}
                        initial="hidden"
                        animate={girlControls}
                        transition={{duration: 0.75, delay: 0.50}}

                        className="px-[10rem] mt-6 pl-0" ref={refGirl}><LazyLoadImage src={HeartGirl} /></motion.p>
                </div>
                <div className='w-2/12'></div>
                <div className="w-6/12 px-6 pl-0 font-bold">
                    <motion.div
                        variants={{
                            hidden: {opacity: 0},
                            visible: {opacity: 1}
                        }}
                        initial="hidden"
                        animate={cardOneControls}
                        
                        whileHover={{ scale: [null, 1.02, 1.02] }}
                        transition={{duration: 0.3, delay: 0.0}}


                        onClick={event => {setIsModal(true); setWhichCard(1)}}

                        style={{ backgroundImage: `url(${KitBienvenida})` }} className="relative group cursor-pointer w-full m-6 h-[20rem] bg-cover bg-center rounded-2xl" ref={refCardOne}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        KIT BIENVENIDA
                                    </p>
                                </button>
                            </div>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: {opacity: 0},
                            visible: {opacity: 1}
                        }}
                        initial="hidden"
                        animate={cardTwoControls}
                        
                        whileHover={{ scale: [null, 1.02, 1.02] }}
                        transition={{duration: 0.3, delay: 0.0}}

                        onClick={event => {setIsModal(true); setWhichCard(2)}}

                        style={{ backgroundImage: `url(${KitEventos})` }} className="relative group cursor-pointer w-full m-6 h-[20rem] bg-cover bg-center rounded-2xl" ref={refCardTwo}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        KIT EVENTOS
                                    </p>
                                </button>
                            </div>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: {opacity: 0},
                            visible: {opacity: 1}
                        }}
                        initial="hidden"
                        animate={cardThreeControls}
                        
                        whileHover={{ scale: [null, 1.02, 1.02] }}
                        transition={{duration: 0.3, delay: 0.0}}

                        onClick={event => {setIsModal(true); setWhichCard(3)}}
                        style={{ backgroundImage: `url(${KitProyectos})` }} className="relative group cursor-pointer w-full m-6 h-[20rem] bg-cover bg-center rounded-2xl" ref={refCardThree}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        KIT PROYECTOS
                                    </p>
                                </button>
                            </div>
                    </motion.div>
                    <motion.div

                        variants={{
                            hidden: {opacity: 0},
                            visible: {opacity: 1}
                        }}
                        initial="hidden"
                        animate={cardFourthControls}
                        
                        whileHover={{ scale: [null, 1.02, 1.02] }}
                        transition={{duration: 0.3, delay: 0.0}}

                        onClick={event => {setIsModal(true); setWhichCard(4)}}
                        style={{ backgroundImage: `url(${KitReconocimiento})` }} className="relative group cursor-pointer w-full m-6 h-[20rem] bg-cover bg-center rounded-2xl" ref={refCardFourth}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        KIT RECONOCIMIENTO
                                    </p>
                                </button>
                            </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default FourthSection
