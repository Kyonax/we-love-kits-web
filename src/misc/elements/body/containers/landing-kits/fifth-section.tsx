import {useEffect, useRef, useState} from "react"

import { LazyLoadImage } from 'react-lazy-load-image-component';

import LogoBancolombia from '../../../../assets/bancolombia_logo.webp'
import LogoNutresa from '../../../../assets/nutresa_logo.svg'

import {motion, useInView, useAnimation} from "framer-motion";

interface FifthSectionProps {}

const FifthSection: React.FC<FifthSectionProps> = ({}) => {
    const refText = useRef(null), refLogoFirst = useRef(null), refLogoSecond = useRef(null), refLogoThird = useRef(null);

    const isInViewText = useInView(refText), isInViewLogoFirst = useInView(refLogoFirst), isInViewLogoSecond = useInView(refLogoSecond),
          isInViewLogoThird = useInView(refLogoThird);

    const textControls = useAnimation(), logoFirstControls = useAnimation(), logoSecondControls = useAnimation(), logoThirdControls = useAnimation();

    useEffect(() => {
        if (isInViewText) textControls.start("visible");
            else textControls.start("hidden");

        if (isInViewLogoFirst) logoFirstControls.start("visible");
            else logoFirstControls.start("hidden");

        if (isInViewLogoSecond) logoSecondControls.start("visible");
            else logoSecondControls.start("hidden");

        if (isInViewLogoThird) logoThirdControls.start("visible");
            else logoThirdControls.start("hidden");

    }, [isInViewText, isInViewLogoFirst, isInViewLogoSecond, isInViewLogoThird]);


    return (
        <div className='m-auto flex w-screen justify-center bg-white'>
            <div className='mt-[10rem] m-auto min-w-[1200px] max-w-[1200px]'>
                <div className='block'>
                    <div className="flex w-full">
                        <motion.div
                            variants={{
                                hidden: {opacity: 0, x: -75},
                                visible: {opacity: 1, x: 0}
                            }}
                            initial="hidden"
                            animate={textControls}
                            transition={{duration: 0.75, delay: 0.25}}

                            className="w-3/5 block text-6xl font-light text-black text-left" ref={refText}> 
                            <p className='font-bold'>EMPRESAS QUE</p>
                            <p className='font-bold'>HAN <a className='font-light'>CONFIADO</a></p>
                            <p>EN NOSOTROS</p>
                        </motion.div>
                        <div className="w-1/5"></div>
                    </div>
                    <div className='flex justify-left'>
                        <div className='w-11/12 flex'>
                            <motion.div
                                variants={{
                                    hidden: {opacity: 0, y: 75},
                                    visible: {opacity: 1, y: 0}
                                }}
                                initial="hidden"
                                animate={logoFirstControls}
                                transition={{duration: 0.75, delay: 0.25}}

                                className='w-1/3 m-auto p-[7rem] pt-16 pl-0 opacity-80' ref={refLogoFirst}>
                                <LazyLoadImage
                                    alt='Logo Bancolombia'
                                    src={LogoBancolombia}
                                />
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: {opacity: 0, y: 75},
                                    visible: {opacity: 1, y: 0}
                                }}
                                initial="hidden"
                                animate={logoSecondControls}
                                transition={{duration: 0.75, delay: 0.50}}

                                className='w-1/3 m-auto p-[7rem] pt-16 pl-0 opacity-80' ref={refLogoSecond}>
                                <LazyLoadImage
                                    alt='Logo Nutresa'
                                    src={LogoNutresa}
                                />
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: {opacity: 0, y: 75},
                                    visible: {opacity: 1, y: 0}
                                }}
                                initial="hidden"
                                animate={logoThirdControls}
                                transition={{duration: 0.75, delay: 0.75}}
                                className='w-1/3 m-auto p-[7rem] pt-16 pl-0 opacity-80' ref={refLogoThird}>
                                <LazyLoadImage
                                    alt='Logo Bancolombia'
                                    src={LogoBancolombia}
                                />
                            </motion.div>
                        </div>
                        <div className='w-1/12'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthSection
