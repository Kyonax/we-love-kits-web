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
            <div className='m-auto mt-[15rem] min-w-[1200px] max-w-[1200px]'>
                <div className='block justify-right text-right text-black text-6xl font-light'>
                    <p className='font-bold'>DESDE EL PRIMER</p>
                    <p className='font-bold'>CONTACTO <a className="font-light">HASTA EL</a></p>
                    <p>ÚLTIMO DETALLE</p>
                </div>

                <div className='w-full mt-16 font-bold'>
                    <div className="flex h-[25rem] mb-4">
                        <div style={{ backgroundImage: `url(${Mug})` }} className="relative w-1/4 mr-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        MUGS
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Caps})` }} className="relative w-1/4 mx-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        GORRA
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Camisa})` }} className="relative w-2/4 ml-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        CAMISETA
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-[25rem] mb-4">
                        <div style={{ backgroundImage: `url(${Agenda})` }} className="relative w-2/4 mr-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        AGENDA
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Lamy})` }} className="relative flex w-1/4 mx-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        LAMY
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Thermos})` }} className="relative w-1/4 ml-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        TERMO
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-[25rem] mb-4">
                        <div style={{ backgroundImage: `url(${Buttons})` }} className="relative w-1/4 mr-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        BOTONES
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Pin})` }} className="relative flex w-2/4 mx-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        PIN
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Carnet})` }} className="relative w-1/4 ml-2 bg-cover bg-center rounded-2xl h-full">
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='group py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
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
    )
}

export default ThirdSection
