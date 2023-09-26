import { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './elements-css/nav-bar.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'

import LogoWeLoveKits from '../assets/WeLoveKits_Logo.png';
import { Link } from 'react-router-dom';

import "./page-up-down.css"

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='relative flex justify-center'>
            <div className={`absolute flex w-screen min-w-[1200px] max-w-[1200px]`}>
                <div className={`p-1 pt-2 pb-2 md:p-12 md:pt-6 md:pb-2 flex justify-between items-center w-full z-10`}>
                    <div className='flex w-[10%] items-center'>
                        <Link className='absolute pt-8 top-0 w-[10%] md:w-[7rem] hover:cursor-pointer' to={'/'}>
                            <LazyLoadImage
                                alt={'Logo We Love Kits - Made by Cabezarota'}
                                src={LogoWeLoveKits}
                            />
                        </Link>
                    </div>

                    <div className='flex items-center'>
                        <ul className='hidden md:flex'>
                            <li className='hover-nice hover:cursor-pointer m-auto opacity-[70%] hover:opacity-[100%] font-bold easy-in hover:easy-out duration-300 transition-opacity '>KITS</li>
                            <li className='hover-nice hover:cursor-pointer m-auto opacity-[70%] hover:opacity-[100%] font-bold easy-in hover:easy-out duration-300 transition-opacity'>CATEGORIAS</li>
                            <li className='hover-nice hover:cursor-pointer m-auto opacity-[70%] hover:opacity-[100%] font-bold easy-in hover:easy-out duration-300 transition-opacity'>CLIENTES</li>
                            <li className='hover-nice hover:cursor-pointer m-auto opacity-[70%] hover:opacity-[100%] font-bold easy-in hover:easy-out duration-300 transition-opacity'>CONTACTO</li>
                            <li className='hover:cursor-pointer m-auto font-bold'>
                                <button type='button' className='relative icon-style bg-[#4DFF8F] hover:bg-[#4DFF8F] flex text-black
                                              hover:text-black py-4 px-16 pr-[2rem] rounded-full border-none'>

                                    <p className="absolute left-5 top-0 bottom-0 m-auto py-1">
                                        <SocialIcon network="whatsapp" bgColor="none"/></p>
                                        <p className="ml-1 text-style opacity-[70%]">HABLEMOS</p>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className='md:hidden' onClick={handleClick}>
                        {!nav ? <Bars3Icon className={`w-5 text-white`} /> : <XMarkIcon className={`w-5 text-white`} />}
                    </div>
                </div>

                <div className={!nav ? 'hidden' : 'absolute w-screen h-screen'}>
                    <ul className={!nav ? 'hidden' : 'absolute mt-[12%] h-[93%] bg-zinc-200 w-screen z-0'}>
                        <li className='border-b-2 border-zinc-300 w-full text-black'>Categorias</li>
                        <li className='border-b-2 border-zinc-300 w-full text-black'>Kits</li>
                        <li className='border-b-2 border-zinc-300 w-full text-black'>Clientes</li>
                        <li className='border-b-2 border-zinc-300 w-full text-black'>Contacto</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default NavBar
