import { LazyLoadImage } from 'react-lazy-load-image-component';

import LogoBancolombia from '../../../../assets/bancolombia_logo.webp'
import LogoNutresa from '../../../../assets/nutresa_logo.svg'

interface FifthSectionProps {}

const FifthSection: React.FC<FifthSectionProps> = ({}) => {
    return (
        <div className='m-auto flex w-screen justify-center bg-white'>
            <div className='mt-[5rem] px-5 m-auto min-w-[0px] max-w-[768px]'>
                <div className='block'>
                    <div className="flex w-full">
                        <div className="w-full lg:w-3/5 block text-3xl font-light text-black text-left">
                            <p className='font-bold'>EMPRESAS QUE</p>
                            <p className='font-bold'>HAN <a className='font-light'>CONFIADO</a></p>
                            <p>EN NOSOTROS</p>
                        </div>
                        <div className="w-1/5"></div>
                    </div>
                    <div className='flex justify-left w-screen'>
                        <div className='w-full flex'>
                            <div className='w-1/3 m-auto p-[1rem] pt-5 lg:p-[6rem] lg:pt-16 pl-0 lg:pl-0 opacity-80'>
                                <LazyLoadImage
                                    alt='Logo Bancolombia'
                                    src={LogoBancolombia}
                                />
                            </div>
                            <div className='w-1/3 m-auto p-[1rem] pt-5 lg:p-[6rem] lg:pt-16 pl-0 lg:pl-0 opacity-80'>
                                <LazyLoadImage
                                    alt='Logo Nutresa'
                                    src={LogoNutresa}
                                />
                            </div>
                            <div className='w-1/3 m-auto p-[1rem] pt-5 lg:p-[6rem] lg:pt-16 pl-0 lg:pl-0 opacity-80'>
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
