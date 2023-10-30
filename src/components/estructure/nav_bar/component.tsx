import { useState, useEffect } from 'react'

import { Bars3Icon, XMarkIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom';

import LoadImage from '../../elements/image_load/component';
import { useResponsiveSize } from '../../elements/image_load/useResponsiveSize';
import { useWindowSize } from '../../hooks/window_size/hook';
import { motion, useAnimation } from "framer-motion";

import LogoWeLoveKits from '../../../assets/logo_pink/image';
import LogoWeLoveKitsGreen from '../../../assets/logo_green/image';
import disableScroll from 'disable-scroll';

import './style.css';

export default function NavBar () {
    const [nav, setNav] = useState(false);
    const mainControls = useAnimation();
    const handleClick = () => setNav(!nav);

    let viewportSize = useWindowSize(), navSize = 130;
    if (viewportSize.windowSize.width < 600) navSize = 180;

    const mainLogo = useResponsiveSize(100, 249, 236, false);
    const navLogo = useResponsiveSize(navSize, 249, 236, false);

    useEffect(() => {if(nav === true) {disableScroll.on()} else {disableScroll.off()}}, [nav])

    useEffect(() => {
        if(nav) mainControls.start("visible")
            else mainControls.start("hidden")
    }, [nav])
    return (
        <div className='relative flex justify-center z-50 bg-black w-full'>
            <div className={`container-navbar`}>
                <div className={nav ? 'hidden transition-opacity easy-in duration-800' :
                                `p-6 flex justify-between items-center w-full z-10
                                 pt-5 pb-2 md:pt-10 md:pb-2 lg:p-12 lg:pt-6 lg:pb-2 `}>

                    <div className='flex w-[10%] items-center'>
                        <Link className='absolute pt-6 lg:pt-8 top-0 lg:w-[7rem] hover:cursor-pointer' to={'/'}>
                            <LoadImage alt="We Love Kits Pink Logo" w={mainLogo.sizeResponsive.width} h={mainLogo.sizeResponsive.height}
                                instantLoad={true} image={LogoWeLoveKits} / >
                        </Link>
                    </div>

                    <div className='flex items-center'>
                        <ul className='hidden lg:flex'>
                            <li className='hover-nice hover:cursor-pointer m-auto hover:opacity-[100%] font-bold easy-in hover:easy-out duration-300 transition-opacity '>KITS</li>
                            <li className='hover-nice hover:cursor-pointer m-auto hover:opacity-[100%] font-bold easy-in hover:easy-out duration-300 transition-opacity'>CATEGORIAS</li>
                            <li className='hover-nice hover:cursor-pointer m-auto hover:opacity-[100%] font-bold easy-in hover:easy-out duration-300 transition-opacity'>CLIENTES</li>
                            <li className='hover-nice hover:cursor-pointer m-auto hover:opacity-[100%] font-bold easy-in hover:easy-out duration-300 transition-opacity'>CONTACTO</li>
                            <li className='hover:cursor-pointer m-auto font-bold'>
                                <button type='button' className='relative icon-style bg-[#4DFF8F] hover:bg-[#FFF384] flex text-black
                                              hover:text-black py-4 px-16 pr-[2rem] rounded-full border-none transition duration-700'>

                                    <p className="absolute left-5 top-0 bottom-0 m-auto py-1">
                                        <SocialIcon network="whatsapp" bgColor="none"/></p>
                                        <p className="ml-1 text-style opacity-[100%]">HABLEMOS</p>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className='lg:hidden' onClick={handleClick}>
                        {!nav ? <Bars3Icon className={`w-6 text-white`} /> : <XMarkIcon className={`w-6 text-white`} />}
                    </div>
                </div>

                <motion.div

                    variants={{
                        hidden: {y: -1000},
                        visible: {y: 0}
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration: 0.3, delay: 0.25}}

                    className={!nav ? 'hidden' : 'absolute w-screen h-screen'}>
                    <ul className={!nav ? 'hidden' : 'absolute h-[100%] px-10 space-y-[-2rem] pt-16 bg-[#AB94FF] w-screen z-10'}>
                        <li>

                            <motion.div
                                variants={{
                                    hidden: {opacity: 0},
                                    visible: {opacity: 1}
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{duration: 0.5, delay: 0.50}}>

                                    <LoadImage alt="We Love Kits Pink Logo" w={navLogo.sizeResponsive.width} h={navLogo.sizeResponsive.height}
                                               instantLoad={true} image={LogoWeLoveKitsGreen} / >
                            </motion.div>
                        </li>
                        <li></li>
                        <li></li>
                        <motion.li

                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{duration: 0.5, delay: 0.50}}
                            className='text-xl md:text-2xl font-bold w-full text-white cursor-pointer'>CATEGORÍAS</motion.li>
                        <motion.li

                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{duration: 0.5, delay: 0.75}}
                            className='text-xl md:text-2xl font-bold w-full text-white cursor-pointer'>KITS</motion.li>
                        <motion.li

                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{duration: 0.5, delay: 1}}
                            className='text-xl md:text-2xl font-bold w-full text-white cursor-pointer'>CLIENTES</motion.li>
                        <motion.li

                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{duration: 0.5, delay: 1.25}}
                            className='text-xl md:text-2xl font-bold w-full text-white cursor-pointer'>CONTACTO</motion.li>
                        <li></li>
                        <li>

                    <motion.div

                        variants={{
                            hidden: {opacity: 0},
                            visible: {opacity: 1}
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.5, delay: 1.50}}
                        className="m-auto mt-8 md:mt-16 mr-0 space-y-3 lg:space-x-0 lg:space-y-3 block lg:block w-full justify-center">

                            <button type='button' className='mx-auto text-[11px] md:text-[14px] w-full relative icon-style bg-[#4DFF8F] hover:bg-[#FFF384] flex text-black
                                          hover:text-black py-[1.1rem] lg:py-4 px-[70%] lg:px-16 pr-[1.25rem] rounded-full border-none font-bold transition duration-700'>
                                <p className="absolute left-0 right-0 ml-[-4.2rem] md:ml-[-6rem] lg:left-5 top-[-.01rem] md:top-1 bottom-0 m-auto lg:py-1">
                                    <SocialIcon network="whatsapp" bgColor="none" style={{width: 40 }}/>
                                </p>
                                    <p className="invisible text-style z-10">HABLEMOS</p>
                                    <p className="absolute mr-[-1.8rem] md:mr-[-2rem] left-0 right-0 mx-auto text-style z-10">HABLEMOS</p>
                            </button>

                        <button type='button' className='hidden md:flex mx-auto text-[11px] md:text-[14px] w-full relative icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-[1.1rem] lg:py-4 px-[70%] lg:px-16 pr-[1.5rem] lg:pr-[2rem] rounded-full border-none font-bold transition duration-700'>
                            <p className="absolute left-0 right-0 mx-auto mt-[-0.1rem] md:mt-[0.15rem] ml-[-8.5rem] md:ml-[-12.5rem]"> <EnvelopeIcon className="icons mx-auto w-[1.2rem] lg:w-6 lg:left-8 " /></p>

                            <p className="invisible text-style">HABLEMOS</p>
                            <p className="absolute left-0 right-0 mr-[-2.3rem] md:mr-[-3rem] text-style">HOLA@WELOVEKITS.COM</p>
                        </button>

                        <div className="flex">
                            <div className="mx-auto w-full flex space-x-1 lg:space-x-[1.6rem]">
                                <button type='button' className='relative w-1/3 icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-0 px-5 rounded-full border-none font-bold transition duration-700'>
                                    <p className="left-5 top-0 bottom-0 m-auto ">
                                        <SocialIcon network="instagram" bgColor="none" style={{ width: 30 }} /></p>
                                </button>


                                <button type='button' className='relative w-1/3 icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-0 px-5 rounded-full border-none font-bold transition duration-700'>
                                    <p className="left-5 top-0 bottom-0 m-auto ">
                                        <SocialIcon network="linkedin" bgColor="none" style={{  width: 30 }}/></p>
                                </button>

                                <button type='button' className='relative w-1/3 icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-0 px-5 rounded-full border-none font-bold transition duration-700'>
                                    <p className="left-5 top-0 bottom-0 m-auto ">
                                        <SocialIcon network="tiktok" bgColor="none" style={{  width: 30 }}/></p>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                        </li>
                    </ul>


                    <div className='lg:hidden hover:cursor-pointer absolute top-5 z-20 right-5' onClick={handleClick}>
                        {!nav ? <Bars3Icon className={`w-6 text-white`} /> : <XMarkIcon className={`w-6 text-white`} />}
                    </div>
                </motion.div>

            </div>
        </div>
    )
}
