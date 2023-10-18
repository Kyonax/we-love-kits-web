import {useEffect, useRef, useState} from "react"

import Agenda from '../../../../assets/Agenda.webp'
import Carnet from '../../../../assets/Carnet.webp'
import Camisa from '../../../../assets/Camisas.webp'
import Lamy from '../../../../assets/Lamy.webp'
import Mug from '../../../../assets/Mug-Peltre.webp'
import Pin from '../../../../assets/Pin.webp'
import Buttons from '../../../../assets/Button.webp'
import Caps from '../../../../assets/Cap.webp'
import Thermos from '../../../../assets/thermo.webp'

import {motion, useInView, useAnimation} from "framer-motion";

interface ThirdSectionProps {}

const ThirdSection: React.FC<ThirdSectionProps> = ({}) => {
    const refText = useRef(null);

    const refBlockFirst = useRef(null), refBlockSecond = useRef(null), refBlockThird = useRef(null),
          refBlockFourth = useRef(null), refBlockFifth = useRef(null), refBlockSixth = useRef(null),
          refBlockSeventh = useRef(null), refBlockEight = useRef(null), refBlockNineth = useRef(null);

    const isInViewBFirst = useInView(refBlockFirst), isInViewBSecond = useInView(refBlockSecond),
          isInViewBThird = useInView(refBlockThird), isInViewBFourth = useInView(refBlockFourth),
          isInViewBFifth = useInView(refBlockFifth), isInViewBSixth = useInView(refBlockSixth),
          isInViewBSeventh = useInView(refBlockSeventh), isInViewBEigth = useInView(refBlockEight),
          isInViewBNineth = useInView(refBlockNineth);

    const isInViewText = useInView(refText);

    const textControls = useAnimation(), rowOneControls = useAnimation(), rowTwoControls = useAnimation(),
          rowThirdControls = useAnimation();

    const blockFirstControls = useAnimation(), blockSecondControls = useAnimation(), blockThirdControls = useAnimation(),
          blockFourthControls = useAnimation(), blockFifthControls = useAnimation(), blockSixthControls = useAnimation(),
          blockSeventhControls = useAnimation(), blockEigthControls = useAnimation(), blockNinethControls = useAnimation();

    useEffect(() => {
        if (isInViewText) textControls.start("visible");
            else textControls.start("hidden");

        if (isInViewBFirst) blockFirstControls.start("visible");
            else blockFirstControls.start("hidden");

        if (isInViewBSecond) blockSecondControls.start("visible");
            else blockSecondControls.start("hidden");

        if (isInViewBThird) blockThirdControls.start("visible");
            else blockThirdControls.start("hidden");

        if (isInViewBFourth) blockFourthControls.start("visible");
            else blockFourthControls.start("hidden");

        if (isInViewBFifth) blockFifthControls.start("visible");
            else blockFifthControls.start("hidden");

        if (isInViewBSixth) blockSixthControls.start("visible");
            else blockSixthControls.start("hidden");

        if (isInViewBSeventh) blockSeventhControls.start("visible");
            else blockSeventhControls.start("hidden");

        if (isInViewBEigth) blockEigthControls.start("visible");
            else blockEigthControls.start("hidden");

        if (isInViewBNineth) blockNinethControls.start("visible");
            else blockNinethControls.start("hidden");

    }, [isInViewText, isInViewBFirst, isInViewBSecond, isInViewBThird,
        isInViewBFourth, isInViewBFifth, isInViewBSixth, isInViewBSeventh,
        isInViewBEigth, isInViewBNineth]);


    return (
        <div className='w-screen flex justify-center bg-white'>
            <div className='m-auto mt-[15rem] min-w-[1200px] max-w-[1200px]'>
                <motion.div

                   variants={{
                       hidden: {opacity: 0, x: 100},
                       visible: {opacity: 1, x: 0}
                   }}
                   initial="hidden"
                   animate={textControls}
                   transition={{duration: 0.75, delay: 0.25}}

                    className='block justify-right text-right text-black text-6xl font-light' ref={refText}>
                    <p className='font-bold'>DESDE EL PRIMER</p>
                    <p className='font-bold'>CONTACTO <a className="font-light">HASTA EL</a></p>
                    <p>ÚLTIMO DETALLE</p>
                </motion.div>

                <div className='w-full mt-16 font-bold'>
                    <motion.div className="flex h-[25rem] mb-4" >
                        <motion.div

                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={blockFirstControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            style={{ backgroundImage: `url(${Mug})` }} className="relative group cursor-pointer w-1/4 mr-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockFirst}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer' >
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        MUGS
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
                            animate={blockSecondControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            style={{ backgroundImage: `url(${Caps})` }} className="relative group cursor-pointer w-1/4 mx-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockSecond}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        GORRA
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
                            animate={blockThirdControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            style={{ backgroundImage: `url(${Camisa})` }} className="relative group cursor-pointer w-2/4 ml-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockThird}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        CAMISETA
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex h-[25rem] mb-4">
                        <motion.div
                            
                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={blockFourthControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            style={{ backgroundImage: `url(${Agenda})` }} className="relative group cursor-pointer w-2/4 mr-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockFourth}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        AGENDA
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
                            animate={blockFifthControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            style={{ backgroundImage: `url(${Lamy})` }} className="relative flex group cursor-pointer w-1/4 mx-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockFifth}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        LAMY
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
                            animate={blockSixthControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            style={{ backgroundImage: `url(${Thermos})` }} className="relative group cursor-pointer w-1/4 ml-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockSixth}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        TERMO
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex h-[25rem] mb-4">
                        <motion.div

                            variants={{

                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={blockSeventhControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            style={{ backgroundImage: `url(${Buttons})` }} className="relative group cursor-pointer w-1/4 mr-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockSeventh}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        BOTONES
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
                            animate={blockEigthControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            style={{ backgroundImage: `url(${Pin})` }} className="relative flex group cursor-pointer w-2/4 mx-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockEight}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        PIN
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
                            animate={blockNinethControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            style={{ backgroundImage: `url(${Carnet})` }} className="relative group cursor-pointer w-1/4 ml-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockNineth}>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        CARNETS
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default ThirdSection
