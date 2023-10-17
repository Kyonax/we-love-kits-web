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
    const refText = useRef(null), refRow1 = useRef(null), refRow2 = useRef(null),
          refRow3 = useRef(null);

    const isInViewText = useInView(refText), isInViewRow1 = useInView(refRow1), isInViewRow2 = useInView(refRow2),
          isInViewRow3 = useInView(refRow3);

    const textControls = useAnimation(), rowOneControls = useAnimation(), rowTwoControls = useAnimation(),
          rowThirdControls = useAnimation();

    useEffect(() => {
        if (isInViewText) textControls.start("visible");
            else textControls.start("hidden");

        if (isInViewRow1) rowOneControls.start("visible");
            else rowOneControls.start("hidden");

        if (isInViewRow2) rowTwoControls.start("visible");
            else rowTwoControls.start("hidden");

        if (isInViewRow3) rowThirdControls.start("visible");
            else rowThirdControls.start("hidden");

    }, [isInViewText, isInViewRow1, isInViewRow2, isInViewRow3]);


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
                    <motion.div

                        variants={{
                            hidden: {opacity: 0},
                            visible: {opacity: 1}
                        }}
                        initial="hidden"
                        animate={rowOneControls}
                        transition={{duration: 0.75, delay: 0.25}}

                        className="flex h-[25rem] mb-4" ref={refRow1}>
                        <motion.div
                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            style={{ backgroundImage: `url(${Mug})` }} className="relative w-1/4 mr-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        MUGS
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                        <div style={{ backgroundImage: `url(${Caps})` }} className="relative w-1/4 mx-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        GORRA
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Camisa})` }} className="relative w-2/4 ml-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        CAMISETA
                                    </p>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div

                        variants={{
                            hidden: {opacity: 0},
                            visible: {opacity: 1}
                        }}
                        initial="hidden"
                        animate={rowTwoControls}
                        transition={{duration: 0.75, delay: 0.25}}

                        className="flex h-[25rem] mb-4" ref={refRow2}>
                        <div style={{ backgroundImage: `url(${Agenda})` }} className="relative w-2/4 mr-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        AGENDA
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Lamy})` }} className="relative flex w-1/4 mx-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        LAMY
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Thermos})` }} className="relative w-1/4 ml-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        TERMO
                                    </p>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div

                        variants={{
                            hidden: {opacity: 0},
                            visible: {opacity: 1}
                        }}
                        initial="hidden"
                        animate={rowThirdControls}
                        transition={{duration: 0.75, delay: 0.25}}

                        className="flex h-[25rem] mb-4" ref={refRow3}>
                        <div style={{ backgroundImage: `url(${Buttons})` }} className="relative w-1/4 mr-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        BOTONES
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Pin})` }} className="relative flex w-2/4 mx-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        PIN
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Carnet})` }} className="relative w-1/4 ml-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        CARNETS
                                    </p>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default ThirdSection
