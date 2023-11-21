import { Link } from "react-router-dom"

import LoadImage from '../../elements/image_load/component';
import { useResponsiveSize } from '../../elements/image_load/useResponsiveSize';

import FooterCharacter from '../../../assets/character_footer/image';

import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'

import './style.css'

export default function Footer () {
    const { sizeResponsive } = useResponsiveSize(300, 765, 480, false);

    return (
        <div className="m-auto block justify-center footer-bg">
            <div className="m-auto flex p-[3rem] px-0 pb-0 relative w-screen min-w-[1200px] max-w-[1200px]">
                <div className="w-1/3 p-10 mr-2 pl-0 block text-black">
                    <div><LoadImage alt="Footer Character Image" w={sizeResponsive.width} h={sizeResponsive.height} instantLoad={true}
                            image={FooterCharacter} /></div>
                </div>

                <div className="w-1/3 flex pl-4 text-black">
                    <div className="block m-auto space-y-2">
                        <p className="font-bold text-[20px]">MENU</p>
                        <div className="text-[16px] font-light space-y-2">
                            <p className="cursor-pointer">KITS</p>
                            <p className="cursor-pointer">CATEGORIAS</p>
                            <p className="cursor-pointer">CLIENTES</p>
                            <p className="cursor-pointer">CONTACTO</p>
                        </div>
                    </div>
                    <div className="block m-auto space-y-2">
                        <p className="font-bold text-[20px]">AYUDA</p>
                        <div className="text-[16px] font-light space-y-2">
                            <p className="cursor-pointer">TÉRMINOS Y CONDICIONES</p>
                            <p className="cursor-pointer">POLÍTICA DE PRIVACIDAD </p>
                            <p className="cursor-pointer">NOSOTROS</p>
                            <p className="cursor-pointer">CABEZAROTA.CO</p>
                        </div>
                    </div>
                </div>

                <div className="w-1/3 block flex">
                    <div className="m-auto mr-0 space-y-3">
                        <button type='button' className='relative icon-style bg-[#4DFF8F] hover:bg-[#FFF384] flex text-black
                                              hover:text-black py-4 px-16 pr-[2rem] rounded-full border-none font-bold transition duration-700'>
                            <div className="absolute left-5 top-0 bottom-0 m-auto py-1">
                                <SocialIcon network="whatsapp" bgColor="none"/>
                            </div>
                            <p className="ml-1 text-style">HABLEMOS</p>
                        </button>


                        <button type='button' className='relative icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-4 px-16 pr-[2rem] rounded-full border-none font-bold transition duration-700'>
                            <EnvelopeIcon className="icons absolute w-6 left-8 " />
                            <p className="ml-1 text-style ">HOLA@WELOVEKITS.COM</p>
                        </button>

                        <div className="flex space-x-[1.6rem]">

                        <button type='button' className='relative icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-0 px-4 rounded-full border-none font-bold transition duration-700'>
                            <div className="left-5 top-0 bottom-0 m-auto ">
                            <SocialIcon network="instagram" bgColor="none"/>
                            </div>
                        </button>


                        <button type='button' className='relative icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-0 px-4 rounded-full border-none font-bold transition duration-700'>
                            <div className="left-5 top-0 bottom-0 m-auto ">
                            <SocialIcon network="linkedin" bgColor="none"/>
                            </div>
                        </button>

                        <button type='button' className='relative icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-0 px-4 rounded-full border-none font-bold transition duration-700'>
                            <div className="left-5 top-0 bottom-0 m-auto ">
                            <SocialIcon network="tiktok" bgColor="none"/>
                            </div>
                        </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="m-auto block p-[3rem] px-0 pt-0 relative w-screen min-w-[1200px] max-w-[1200px]">
                <div className="p-10 pt-0 px-0 pb-0 block text-left text-black font-light">
                    <p> © WELOVEKITS. ALL RIGHTS</p>
                    <p>RESERVED 2023.</p>
                </div>
            </div>
        </div>
    )
}
