import KitBienvenida from '../../../../assets/Kit-bienvenida.jpg'
import KitEventos from '../../../../assets/Kit-bienvenida.jpg'
import KitProyectos from '../../../../assets/Kit-bienvenida.jpg'
import KitReconocimiento from '../../../../assets/Kit-bienvenida.jpg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import HeartText from '../../../../assets/hearts-text.png'
import HeartGirl from '../../../../assets/heart-girl.png'

interface FourthSectionProps {}

const FourthSection: React.FC<FourthSectionProps> = ({}) => {
    return (
        <div className='m-auto w-screen flex justify-center bg-white'>
            <div className='m-auto mt-[10rem] flex w-screen min-w-[1200px] max-w-[1200px]'>
                <div className="w-4/12 block py-10 px-0 text-6xl text-black font-light">
                    <p className="font-bold">CADA KIT</p>
                    <p className="font-bold flex">ES UNA <a className="ml-3 font-light"> OBRA</a></p>
                    <p>DE ARTE</p>
                    <p className="px-[10rem] mt-4 pl-0"><LazyLoadImage src={HeartText} /></p>
                    <p className="px-[10rem] mt-6 pl-0"><LazyLoadImage src={HeartGirl} /></p>
                </div>
                <div className='w-2/12'></div>
                <div className="w-6/12 px-6 pl-0 font-bold">
                    <div style={{ backgroundImage: `url(${KitBienvenida})` }} className="relative w-full m-6 h-[20rem] bg-cover bg-center rounded-2xl">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="opacity-[70%] group-hover:opacity-[100%]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        KIT BIENVENIDA
                                    </p>
                                </button>
                            </div>
                    </div>
                    <div style={{ backgroundImage: `url(${KitEventos})` }} className="relative w-full m-6 h-[20rem] bg-cover bg-center rounded-2xl">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="opacity-[70%] group-hover:opacity-[100%]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        KIT EVENTOS
                                    </p>
                                </button>
                            </div>
                    </div>
                    <div style={{ backgroundImage: `url(${KitProyectos})` }} className="relative w-full m-6 h-[20rem] bg-cover bg-center rounded-2xl">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="opacity-[70%] group-hover:opacity-[100%]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        KIT PROYECTOS
                                    </p>
                                </button>
                            </div>
                    </div>
                    <div style={{ backgroundImage: `url(${KitReconocimiento})` }} className="relative w-full m-6 h-[20rem] bg-cover bg-center rounded-2xl">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="opacity-[70%] group-hover:opacity-[100%]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        KIT RECONOCIMIENTO
                                    </p>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthSection
