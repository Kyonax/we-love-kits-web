import {useEffect, useRef} from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import WeLoveKits from '../../../../assets/we-love-kits.webp';

import {motion, useInView, useAnimation, useIsPresent} from "framer-motion";
interface SecondSectionProps {}

const SecondSection: React.FC<SecondSectionProps> = ({}) => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const isInView = useInView(ref)
    const isInView2 = useInView(ref2)
    const mainControls = useAnimation();
    const mainControls2 = useAnimation()

    useEffect(() => {
        if (isInView){ mainControls.start("visible"); } else {
            mainControls.start("hidden")
        }

        if (isInView2){ mainControls2.start("visible"); } else {
            mainControls2.start("hidden")
        }
    }, [isInView, isInView2]);
    return (
        <div className='relative flex justify-center bg-white'>
            <div className='block mt-[5rem] w-screen min-w-[0px] max-w-[768px]'>
                <motion.div
                    variants={{
                        hidden: {opacity: 0},
                        visible: {opacity: 1}
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration: 0.75, delay: 0.25}}

                    className='flex' ref={ref}>
                    <div className="w-1/6" />
                    <div className="w-4/6 m-auto">
                        <p className='text-3xl sm:text-4xl block font-bold text-center text-black'><a>Creamos Kits</a><br/><a>personalizados</a></p>
                    </div>
                    <div className="w-1/6" />
                </motion.div>

                <motion.div
                    variants={{
                        hidden: {opacity: 0},
                        visible: {opacity: 1}
                    }}
                    initial="hidden"
                    animate={mainControls2}
                    transition={{duration: 0.75, delay: 0.25}}

                    className="flex justify-center w-full mt-[5rem] px-5" ref={ref2}>
                    <LazyLoadImage alt="We Love Kits - Illustration" src={WeLoveKits} />
                </motion.div>
            </div>
        </div>
    )
}

export default SecondSection
