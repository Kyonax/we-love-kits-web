import { useResponsiveSize } from '../../elements/image_load/useResponsiveSize';
import { motion } from 'framer-motion';
import { useAnimationLoad } from './effects';

import LoadImage from '../../elements/image_load/component-webp';

import Logo from '../../../assets/logo_preload/image';

import './style.css'; 

interface LoadingPageProps { animationFinished: boolean, setAnimationFinished: any }

const LoadingPage: React.FC<LoadingPageProps> = ({ animationFinished, setAnimationFinished }) => {
    const { sizeResponsive } = useResponsiveSize(60, 125, 120, false);
    const { container, item, back } = useAnimationLoad(animationFinished);

    return(
        <motion.div className="container-preload" variants={container} initial="hidden" animate="show" exit="exit"
         onAnimationComplete={() => setAnimationFinished(true)}>
            <motion.div className="back-container" variants={back}>
            <motion.div variants={item} className="item_to_load loading"
                        style={{ width: `${sizeResponsive.width}px`, height: `${sizeResponsive.height}px` }}>
                <LoadImage alt="Logo We Love Kits - Preload" w={sizeResponsive.width} h={sizeResponsive.height} instantLoad={true}
                image={Logo} />
            </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default LoadingPage
