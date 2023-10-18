import {useEffect, useRef} from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {motion, useInView, useAnimation, useIsPresent} from "framer-motion";

import WeLoveKits from '../../../../assets/we-love-kits.webp';

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
            <div className='block mt-[10rem] w-screen min-w-[1200px] max-w-[1200px]'>
                <div className='flex'>
                    <div className="w-1/6" />
                    <motion.div ref={ref}

                        variants={{
                            hidden: {opacity: 0},
                            visible: {opacity: 1}
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.75, delay: 0.25}}

                        className="w-4/6 m-auto">
                        <p className='text-5xl block font-bold text-center text-black'><a>Creamos Kits</a><br/><a>personalizados</a></p>
                    </motion.div>
                    <div className="w-1/6" />
                </div>

                <motion.div ref={ref2}

                    variants={{
                        hidden: {opacity: 0},
                        visible: {opacity: 1}
                    }}
                    initial="hidden"
                    animate={mainControls2}
                    transition={{duration: 0.75, delay: 0.25}}

                    className="flex justify-center w-full mt-[15rem]">
                    <LazyLoadImage alt="We Love Kits - Illustration" src={WeLoveKits} />
                </motion.div>
            </div>
        </div>
    )
}

export default SecondSection
