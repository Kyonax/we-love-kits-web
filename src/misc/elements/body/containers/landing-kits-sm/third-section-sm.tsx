import Agenda from '../../../../assets/Agenda.webp'
import Carnet from '../../../../assets/Carnet.webp'
import Camisa from '../../../../assets/Camisas.webp'
import Lamy from '../../../../assets/Lamy.webp'
import Mug from '../../../../assets/Mug-Peltre.webp'
import Pin from '../../../../assets/Pin.webp'
import Buttons from '../../../../assets/Button.webp'
import Caps from '../../../../assets/Cap.webp'
import Thermos from '../../../../assets/thermo.webp'

interface ThirdSectionProps {}

const ThirdSection: React.FC<ThirdSectionProps> = ({}) => {
    return (
        <div className='w-screen flex justify-center bg-white'>
            <div className='m-auto px-5 mt-[5rem] w-full min-w-[0px] max-w-[768px]'>
                <div className='block justify-right text-right text-black text-3xl sm:text-5xl font-light'>
                    <p className='font-bold'>DESDE EL PRIMER</p>
                    <p className='font-bold'>CONTACTO <a className="font-light">HASTA EL</a></p>
                    <p>ÚLTIMO DETALLE</p>
                </div>

                <div className='w-full mt-16 font-bold'>
                    <div className="blockjk lg:flex mb-4 text-[11px] sm:text-[14px]">

                        <div className="block sm:flex lg:w-2/4">
                            <div style={{ backgroundImage: `url(${Mug})` }}  className="group h-[20rem] hover:cursor-pointer relative w-full lg:w-1/2 bg-cover bg-center rounded-2xl">
                                <div className='absolute flex w-full justify-center bottom-8'>
                                    <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                        <p className="group-hover:text-[#FFF384]
                                                      easy-in group-hover:easy-out duration-300 transition-opacity">
                                            MUGS
                                        </p>
                                    </button>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${Caps})` }} className="group h-[20rem] hover:cursor-pointer relative w-full lg:w-1/2 mt-4 sm:mt-0 sm:ml-4 lg:mx-2 bg-cover bg-center rounded-2xl">
                                <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                    <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                        <p className="group-hover:text-[#FFF384]
                                                      easy-in group-hover:easy-out duration-300 transition-opacity">
                                            GORRA
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundImage: `url(${Camisa})` }} className="group hover:cursor-pointer relative w-full lg:w-2/4 mt-4 lg:ml-2 lg:mt-0 bg-cover bg-center rounded-2xl h-[20rem]">
                            <div className='absolute flex w-full justify-center bottom-8'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        CAMISETA
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="block lg:flex mb-4 text-[11px] sm:text-[14px]">
                        <div style={{ backgroundImage: `url(${Agenda})` }} className="group hover:cursor-pointer relative w-full lg:w-2/4 lg:mr-2 bg-cover bg-center rounded-2xl h-[20rem]">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        AGENDA
                                    </p>
                                </button>
                            </div>
                        </div>

                        <div className='block sm:flex lg:w-2/4 mt-4 lg:mt-0'>
                            <div style={{ backgroundImage: `url(${Lamy})` }} className="group hover:cursor-pointer relative flex w-full mr-2 lg:mx-2 bg-cover bg-center rounded-2xl h-[20rem]">
                                <div className='absolute flex w-full justify-center bottom-8'>
                                    <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                        <p className="group-hover:text-[#FFF384]
                                                      easy-in group-hover:easy-out duration-300 transition-opacity">
                                            LAMY
                                        </p>
                                    </button>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${Thermos})` }} className="group hover:cursor-pointer relative w-full mt-4 sm:mt-0 sm:ml-2 bg-cover bg-center rounded-2xl h-[20rem]">
                                <div className='absolute flex w-full justify-center bottom-8'>
                                    <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                        <p className="group-hover:text-[#FFF384]
                                                      easy-in group-hover:easy-out duration-300 transition-opacity">
                                            TERMO
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="block lg:flex mb-4 text-[11px] sm:text-[14px]">
                        <div style={{ backgroundImage: `url(${Buttons})` }} className="group hover:cursor-pointer relative w-full lg:w-1/4 lg:mr-2 mt-4 lg:mt-0 bg-cover bg-center rounded-2xl h-[20rem]">
                            <div className='absolute flex w-full justify-center bottom-8'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        BOTONES
                                    </p>
                                </button>
                            </div>
                        </div>

                        <div className="block sm:flex lg:w-3/4 mt-4 lg:mt-0">
                            <div style={{ backgroundImage: `url(${Pin})` }} className="group hover:cursor-pointer relative flex w-full lg:w-2/3 mr-2 lg:mx-2 bg-cover bg-center rounded-2xl h-[20rem]">
                                <div className='absolute flex w-full justify-center bottom-8'>
                                    <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                        <p className="group-hover:text-[#FFF384]
                                                      easy-in group-hover:easy-out duration-300 transition-opacity">
                                            PIN
                                        </p>
                                    </button>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${Carnet})` }} className="group hover:cursor-pointer relative w-full lg:w-1/3 mt-4 sm:mt-0 sm:ml-2 bg-cover bg-center rounded-2xl h-[20rem]">
                                <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                    <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                        <p className="group-hover:text-[#FFF384]
                                                      easy-in group-hover:easy-out duration-300 transition-opacity">
                                            CARNETS
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ThirdSection
