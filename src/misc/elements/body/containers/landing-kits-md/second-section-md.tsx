import { LazyLoadImage } from 'react-lazy-load-image-component';

import WeLoveKits from '../../../../assets/we-love-kits.webp';

interface SecondSectionProps {}

const SecondSection: React.FC<SecondSectionProps> = ({}) => {
    return (
        <div className='relative flex justify-center bg-white'>
            <div className='block mt-[10rem] w-screen min-w-[768px] max-w-[1200px]'>
                <div className='flex'>
                    <div className="w-1/6" />
                    <div className="w-4/6 m-auto">
                        <p className='text-5xl block font-bold text-center text-black'><a>Creamos Kits</a><br/><a>personalizados</a></p>
                    </div>
                    <div className="w-1/6" />
                </div>

                <div className="flex justify-center w-full mt-[15rem] px-5">
                    <LazyLoadImage alt="We Love Kits - Illustration" src={WeLoveKits} />
                </div>
            </div>
        </div>
    )
}

export default SecondSection
