import { Link } from "react-router-dom"

import LoadImage from '../../elements/image_load/component';
import { useResponsiveSize } from '../../elements/image_load/useResponsiveSize';

import FooterCharacter from '../../../assets/character_footer/image';

import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'

import './style.css'

export default function Footer () {
    const { sizeResponsive } = useResponsiveSize(765, 765, 480, false);

    console.log(FooterCharacter)

    return (
        <div className="m-auto block justify-center footer-bg">
            <div className="m-auto px-5 lg:px-5 block lg:flex p-[3rem] px-0 pb-0 relative w-screen min-w-[0px] max-w-[768px]">

                <div className="flex w-full lg:w-2/3">
                    <div className="m-auto hidden pl-16 px-16 lg:p-10 text-black">
                        <div className="mx-auto"><LoadImage alt="Footer Character Image" w={sizeResponsive.width} h={sizeResponsive.height} instantLoad={true}
                                        image={FooterCharacter} /></div>
                    </div>

                    <div className="hidden w-1/2 pl-4 text-black">
                        <div className="block m-auto p-2 space-y-2">
                            <p className="font-bold text-[14px]">MENU</p>
                            <div className="text-[12px] font-light space-y-2">
                                <p className="cursor-pointer">KITS</p>
                                <p className="cursor-pointer">CATEGORIAS</p>
                                <p className="cursor-pointer">CLIENTES</p>
                                <p className="cursor-pointer">CONTACTO</p>
                            </div>
                        </div>
                        <div className="block m-auto p-2 space-y-2">
                            <p className="font-bold text-[14px]">AYUDA</p>
                            <div className="text-[12px] font-light space-y-2">
                                <p className="cursor-pointer">TÉRMINOS Y CONDICIONES</p>
                                <p className="cursor-pointer">POLÍTICA DE PRIVACIDAD </p>
                                <p className="cursor-pointer">NOSOTROS</p>
                                <p className="cursor-pointer">CABEZAROTA.CO</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/3 flex text-[11px] mt-5 lg:text-[15px] lg:ml-10">
                    <div className="m-auto mr-0 space-y-3 lg:space-x-0 lg:space-y-3 block lg:block w-full justify-center">

                            <button type='button' className='mx-auto w-[82%] relative icon-style bg-[#4DFF8F] hover:bg-[#FFF384] flex text-black
                                          hover:text-black py-[1.1rem] lg:py-4 px-[70%] lg:px-16 pr-[1.25rem] rounded-full border-none font-bold transition duration-700'>
                                <p className="absolute left-0 right-0 ml-[-5rem] lg:left-5 top-[0.2rem] bottom-0 m-auto lg:py-1">
                                    <SocialIcon network="whatsapp" bgColor="none" style={{width: 40 }}/>
                                </p>
                                    <p className="invisible text-style z-10">HABLEMOS</p>
                                    <p className="absolute mr-[-2rem] left-0 right-0 mx-auto text-style text-[0.9rem] z-10">HABLEMOS</p>
                            </button>

                        <button type='button' className='mx-auto w-[82%] relative icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-[1.1rem] lg:py-4 px-[70%] lg:px-16 pr-[1.5rem] lg:pr-[2rem] rounded-full border-none font-bold transition duration-700'>
                            <p className="absolute left-0 right-0 mx-auto ml-[-8.2rem]"> <EnvelopeIcon className="icons mx-auto w-[1.2rem] lg:w-6 lg:left-8 " /></p>

                            <p className="invisible text-style">HABLEMOS</p>
                            <p className="absolute left-0 right-0 mr-[-3rem] text-style">HOLA@WELOVEKITS.COM</p>
                        </button>

                        <div className="flex">
                            <div className="mx-auto flex w-[82%] space-x-1 lg:space-x-[1.6rem]">
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
                    </div>

                </div>


                    <div className="m-auto mt-10 pl-16 flex px-16 lg:p-10 text-black">
                        <div className="mx-auto"><LoadImage alt="Footer Character Image" w={sizeResponsive.width} h={sizeResponsive.height} instantLoad={true}
                                        image={FooterCharacter} /></div>
                    </div>
            </div>
            <div className="m-auto block mt-4 lg:mt-auto px-5 p-[3rem] px-0 pt-0 relative w-screen min-w-[0px] max-w-[768px]">
                <div className="p-10 pt-0 px-0 pb-0 block text-center lg:text-left text-black font-light text-[14px]">
                    <p> © WELOVEKITS. ALL RIGHTS</p>
                    <p>RESERVED 2023.</p>
                </div>
            </div>
        </div>
    )
}
