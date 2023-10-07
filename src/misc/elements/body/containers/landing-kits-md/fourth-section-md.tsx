import KitBienvenida from '../../../../assets/Kit-bienvenida.webp'
import KitEventos from '../../../../assets/Kit-bienvenida.webp'
import KitProyectos from '../../../../assets/Kit-bienvenida.webp'
import KitReconocimiento from '../../../../assets/Kit-bienvenida.webp'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import HeartText from '../../../../assets/hearts-text.webp'
import HeartGirl from '../../../../assets/heart-girl.webp'

interface FourthSectionProps {}

const FourthSection: React.FC<FourthSectionProps> = ({}) => {
    return (
        <div className='m-auto w-screen flex justify-center bg-white'>
            <div className='m-auto px-5 mt-[10rem] block lg:flex w-screen min-w-[768px] max-w-[1200px]'>

                <div className="w-full lg:w-6/12 block py-10 px-0 text-6xl text-black font-light">
                    <p className="font-bold">CADA KIT</p>
                    <p className="font-bold flex">ES UNA <a className="ml-3 font-light"> OBRA</a></p>
                    <p>DE ARTE</p>
                    <p className="px-[30rem] lg:px-[20.5rem] lg:pl-0 mt-4 pl-0"><LazyLoadImage src={HeartText} /></p>
                    <p className="invisible hidden lg:visible lg:flex px-[20rem] mt-6 pl-0"><LazyLoadImage src={HeartGirl} /></p>
                </div>

                <div className="w-full lg:w-6/12 lg:pr-5 pl-0 font-bold">
                    <div style={{ backgroundImage: `url(${KitBienvenida})` }} className="group hover:cursor-pointer relative w-full lg:m-6 h-[25rem] lg:h-[20rem] bg-cover bg-center rounded-2xl">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        KIT BIENVENIDA
                                    </p>
                                </button>
                            </div>
                    </div>
                    <div style={{ backgroundImage: `url(${KitEventos})` }} className="group hover:cursor-pointer relative w-full my-6 lg:m-6 h-[25rem] lg:h-[20rem] bg-cover bg-center rounded-2xl">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        KIT EVENTOS
                                    </p>
                                </button>
                            </div>
                    </div>
                    <div style={{ backgroundImage: `url(${KitProyectos})` }} className="group hover:cursor-pointer relative w-full my-6 lg:m-6 h-[25rem] lg:h-[20rem] bg-cover bg-center rounded-2xl">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        KIT PROYECTOS
                                    </p>
                                </button>
                            </div>
                    </div>
                    <div style={{ backgroundImage: `url(${KitReconocimiento})` }} className="group hover:cursor-pointer relative w-full my-6 lg:m-6 h-[25rem] lg:h-[20rem] bg-cover bg-center rounded-2xl">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
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
