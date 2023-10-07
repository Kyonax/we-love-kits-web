import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import LogoWeLoveKits from '../assets/WeLoveKits_Logo_Pink.webp';

import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'
import './page-up-down.css'

interface FooterInfoProps {}

const FooterInfo: React.FC<FooterInfoProps> = ({}) => {
    return (
        <div className="m-auto block justify-center footer-bg">
            <div className="m-auto px-14 lg:px-5 block lg:flex p-[3rem] px-0 pb-0 relative w-screen min-w-[768px] max-w-[1200px]">

                <div className="flex w-full lg:w-2/3">
                    <div className="w-1/2 m-auto p-[9rem] py-0 lg:p-10 mr-2 pl-0 block text-black">
                        <div><LazyLoadImage src={LogoWeLoveKits} /></div>
                    </div>
                    
                    <div className="flex w-1/2 pl-4 text-black">
                        <div className="block m-auto p-2 space-y-2">
                            <p className="font-bold text-[20px]">MENU</p>
                            <div className="text-[14px] font-light space-y-2">
                                <p className="cursor-pointer">KITS</p>
                                <p className="cursor-pointer">CATEGORIAS</p>
                                <p className="cursor-pointer">CLIENTES</p>
                                <p className="cursor-pointer">CONTACTO</p>
                            </div>
                        </div>
                        <div className="block m-auto p-2 space-y-2">
                            <p className="font-bold text-[20px]">AYUDA</p>
                            <div className="text-[14px] font-light space-y-2">
                                <p className="cursor-pointer">TÉRMINOS Y CONDICIONES</p>
                                <p className="cursor-pointer">POLÍTICA DE PRIVACIDAD </p>
                                <p className="cursor-pointer">NOSOTROS</p>
                                <p className="cursor-pointer">CABEZAROTA.CO</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/3 flex text-[11px] mt-10 lg:text-[15px] lg:ml-10">
                    <div className="m-auto mr-0 space-x-3 lg:space-x-0 lg:space-y-3 flex lg:block w-full justify-center">
                        <button type='button' className='relative icon-style bg-[#4DFF8F] hover:bg-[#FFF384] flex text-black
                                              hover:text-black py-[1.1rem] lg:py-4 px-11 lg:px-16 pr-[1.25rem] rounded-full border-none font-bold transition duration-700'>
                            <p className="absolute left-2 lg:left-5 top-0 bottom-0 m-auto lg:py-1">
                            <SocialIcon network="whatsapp" bgColor="none" style={{width: 40 }}/></p>
                            <p className="ml-1 text-style">HABLEMOS</p>
                        </button>


                        <button type='button' className='relative icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-[1.1rem] lg:py-4 px-12 lg:px-16 pr-[1.5rem] lg:pr-[2rem] rounded-full border-none font-bold transition duration-700'>
                            <EnvelopeIcon className="icons absolute w-[1.1rem] left-7 lg:w-6 lg:left-8 " />
                            <p className="ml-1 text-style ">HOLA@WELOVEKITS.COM</p>
                        </button>

                        <div className="flex space-x-3 lg:space-x-[1.6rem]">

                        <button type='button' className='relative icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-0 px-4 rounded-full border-none font-bold transition duration-700'>
                            <p className="left-5 top-0 bottom-0 m-auto ">
                            <SocialIcon network="instagram" bgColor="none" style={{ width: 40 }} /></p>
                        </button>


                        <button type='button' className='relative icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-0 px-4 rounded-full border-none font-bold transition duration-700'>
                            <p className="left-5 top-0 bottom-0 m-auto ">
                            <SocialIcon network="linkedin" bgColor="none" style={{  width: 40 }}/></p>
                        </button>

                        <button type='button' className='relative icon-style bg-[#D1C5FF] hover:bg-[#FF60E6] flex text-black
                                              hover:text-black py-0 px-4 rounded-full border-none font-bold transition duration-700'>
                            <p className="left-5 top-0 bottom-0 m-auto ">
                            <SocialIcon network="tiktok" bgColor="none" style={{  width: 40 }}/></p>
                        </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="m-auto block mt-10 lg:mt-auto px-5 p-[3rem] px-0 pt-0 relative w-screen min-w-[768px] max-w-[1200px]">
                <div className="p-10 pt-0 px-0 pb-0 block text-center lg:text-left text-black font-light text-[14px]">
                    <p> © WELOVEKITS. ALL RIGHTS</p>
                    <p>RESERVED 2023.</p>
                </div>
            </div>
        </div>
    )
}

export default FooterInfo
