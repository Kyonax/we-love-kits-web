import { LazyLoadImage } from 'react-lazy-load-image-component';

import WeLoveKits from '../../../../assets/we-love-kits.webp';

interface SecondSectionProps {}

const SecondSection: React.FC<SecondSectionProps> = ({}) => {
    return (
        <div className='relative flex justify-center bg-white'>
            <div className='block mt-[5rem] w-screen min-w-[0px] max-w-[768px]'>
                <div className='flex'>
                    <div className="w-1/6" />
                    <div className="w-4/6 m-auto">
                        <p className='text-3xl sm:text-4xl block font-bold text-center text-black'><a>Creamos Kits</a><br/><a>personalizados</a></p>
                    </div>
                    <div className="w-1/6" />
                </div>

                <div className="flex justify-center w-full mt-[5rem] px-5">
                    <LazyLoadImage alt="We Love Kits - Illustration" src={WeLoveKits} />
                </div>
            </div>
        </div>
    )
}

export default SecondSection
