import {useEffect, useRef, useState} from "react"
import { LazyLoadImage } from "react-lazy-load-image-component";

import Character from '../../../../assets/character-down.webp'

import '../landing-kits/sections.css';

import {motion, useInView, useAnimation} from "framer-motion";
interface SixthSectionProps {}

const SixthSection: React.FC<SixthSectionProps> = ({}) => {
    const refTitle = useRef(null), refParragraph = useRef(null), refLogo = useRef(null),
          refBlock = useRef(null), refContent = useRef(null);

    const isInViewTitle = useInView(refTitle), isInViewParragraph = useInView(refParragraph),
          isInViewLogo = useInView(refLogo), isInViewBlock = useInView(refBlock), isInViewContent = useInView(refContent);

    const titleControls = useAnimation(), parragraphControls = useAnimation(), logoControls = useAnimation(),
          blockControls = useAnimation(), contentControls = useAnimation();

    useEffect(() => {
        if (isInViewTitle) titleControls.start("visible");
            else titleControls.start("hidden");

        if (isInViewParragraph) parragraphControls.start("visible");
            else parragraphControls.start("hidden");

        if (isInViewLogo) logoControls.start("visible");
            else logoControls.start("hidden");

        if (isInViewBlock) blockControls.start("visible");
            else blockControls.start("hidden");

        if (isInViewContent) contentControls.start("visible");
            else contentControls.start("hidden");

    }, [isInViewTitle, isInViewParragraph, isInViewLogo, isInViewBlock, isInViewContent])
    return (
        <div className='w-screen pb-[5rem] block lg:flex justify-center bg-white'>

            <div className="flex relative lg:absolute w-full h-full">
                <div className="m-auto flex mt-[8rem] bg-[#7DE2FF] w-full h-[25rem]">
                    <div className="m-auto pl-5 flex w-screen min-w-[0px] max-w-[768px]">
                    <div className="w-full lg:w-5/12 ml-0 m-auto flex p-5 pt-0 pl-0">
                        <div className="z-10 block">
                            <motion.p

                                variants={{
                                    hidden: {opacity: 0, x: -75},
                                    visible: {opacity: 1, x: 0}
                                }}
                                initial="hidden"
                                animate={titleControls}
                                transition={{duration: 0.75, delay: 0.25}}
                                className="font-black text-4xl sm:text-5xl text-black" ref={refTitle}>HAGAMOS ALGO INCREIBLE JUNTOS</motion.p>
                            <motion.p

                                variants={{
                                    hidden: {opacity: 0, x: -75},
                                    visible: {opacity: 1, x: 0}
                                }}
                                initial="hidden"
                                animate={parragraphControls}
                                transition={{duration: 0.75, delay: 0.50}}
                                className="text-[#002538] font-light text-[1rem] sm:text-[1.1rem]" ref={refParragraph}>
                                Eleva tu marca a traves de kits que no solo entregan productos, sino que te sumergen en una experiencia.
                            </motion.p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <motion.div

                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate={blockControls}
                transition={{duration: 0.75, delay: 0.50}}
                className='mt-[-3rem] lg:mt-[10rem] px-5 lg:px-5 m-auto flex w-screen min-w-[0px] max-w-[768px]' ref={refBlock}>
                <motion.div

                    variants={{
                        hidden: {opacity: 0},
                        visible: {opacity: 1}
                    }}
                    initial="hidden"
                    animate={contentControls}
                    transition={{duration: 0.75, delay: 0.50}}

                    className="w-full flex" ref={refContent}>
                    <div className="hidden lg:flex w-6/12 h-[50rem] relative flex z-10">
                        <motion.div

                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={logoControls}
                            transition={{duration: 0.75, delay: 1}}

                            className='absolute ml-auto mr-auto px-16 bottom-0' ref={refLogo}>
                            <LazyLoadImage src={Character} />
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-6/12 bg-white flex rounded-xl border border-[#002538] p-5 py-10 text-[#002538] text-[1rem] sm:text-[1.1rem] z-10">
                        <div className='m-auto ml-0 mr-0 w-full'>
                        <p className="font-bold">¿EN QUE ESTAS INTERESADO?</p> <br />
                        <div className="contact-form flex text-[9px] sm:text-[13px] font-normal">
                            <button className="border border-[#002538] ml-0 m-1 px-7">KITS BIENVENIDA</button>
                            <button className="border border-[#002538] m-1 py-4 px-7">KITS EVENTOS</button>
                        </div>
                        <div className="contact-form flex text-[9px] sm:text-[13px] font-normal">
                            <button className="border border-[#002538] ml-0 m-1 px-6">KITS RECONOCIMIENTO</button>
                            <button className="border border-[#002538] m-1 py-4 px-5">KITS PROYECTOS</button>
                        </div> <br />

                        <form>
                            <div className="relative z-0 mb-3 w-full group">
                                <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-[11px] sm:text-[13px] text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-[#002538] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="absolute font-bold text-[10px] sm:text-[13px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NOMBRE COMPLETO</label>
                            </div> <br />

                            <div className="relative z-0 mb-12 w-full group">
                                <input type="text" name="floating_name" className="block py-2.5 px-0 w-full text-[11px] sm:text-[13px] text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-[#002538] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="absolute font-bold text-[10px] sm:text-[13px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">EMAIL</label>
                            </div> <br />

                            <div className="relative z-0 w-full group">
                                <textarea id="text" name="floating_message" rows={4} className="block p-2.5 pb-12 w-full text-[11px] sm:text-[13px] text-gray-900 bg-white rounded-xl border border-gray-300 bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="DANOS TU OPINION..."></textarea>
                                <label className="absolute font-bold text-[10px] sm:text-[13px] text-gray-500 dark:text-gray-400 duration-300 transform top-[-2rem] -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ">MENSAJE</label>
                            </div>
                        </form> <br />


                        <button type='button' className='group bg-gradient-to-r mt-5 bg-[#4DFF8F] hover:bg-[#FFF384]
                                          text-black hover:text-black font-bold py-3 px-10 rounded-full border-none transition duration-700'>
                            <p className='easy-in group-hover:easy-out text-[14px] sm:text-[16px]
                                          duration-700 transition-opacity'>ENVIAR</p>
                        </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default SixthSection
