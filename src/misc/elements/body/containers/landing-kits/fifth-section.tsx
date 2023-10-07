import { LazyLoadImage } from 'react-lazy-load-image-component';

import LogoBancolombia from '../../../../assets/bancolombia_logo.webp'
import LogoNutresa from '../../../../assets/nutresa_logo.svg'

interface FifthSectionProps {}

const FifthSection: React.FC<FifthSectionProps> = ({}) => {
    return (
        <div className='m-auto flex w-screen justify-center bg-white'>
            <div className='mt-[10rem] m-auto min-w-[1200px] max-w-[1200px]'>
                <div className='block'>
                    <div className="flex w-full">
                        <div className="w-3/5 block text-6xl font-light text-black text-left">
                            <p className='font-bold'>EMPRESAS QUE</p>
                            <p className='font-bold'>HAN <a className='font-light'>CONFIADO</a></p>
                            <p>EN NOSOTROS</p>
                        </div>
                        <div className="w-1/5"></div>
                    </div>
                    <div className='flex justify-left'>
                        <div className='w-11/12 flex'>
                            <div className='w-1/3 m-auto p-[7rem] pt-16 pl-0 opacity-80'>
                                <LazyLoadImage
                                    alt='Logo Bancolombia'
                                    src={LogoBancolombia}
                                />
                            </div>
                            <div className='w-1/3 m-auto p-[7rem] pt-16 pl-0 opacity-80'>
                                <LazyLoadImage
                                    alt='Logo Nutresa'
                                    src={LogoNutresa}
                                />
                            </div>
                            <div className='w-1/3 m-auto p-[7rem] pt-16 pl-0 opacity-80'>
                                <LazyLoadImage
                                    alt='Logo Bancolombia'
                                    src={LogoBancolombia}
                                />
                            </div>
                        </div>
                        <div className='w-1/12'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthSection
