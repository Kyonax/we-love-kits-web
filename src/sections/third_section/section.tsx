import { useEffect, useRef, useState } from "react"
import { Images, useSizeImages } from './imports';
import { motion, useInView, useAnimation } from "framer-motion";

import LoadImage from "../../components/elements/image_load/component";
import disableScroll from 'disable-scroll';
import Modal from './modal';

import './style.css';

const ThirdSection = () => {
    const [isModal, setIsModal] = useState(false), [whichCard, setWhichCard] = useState(0);
    const { largeImageSize, mediumImageSize, smallImageSize,
    largeImageSizeWidth, mediumImageSizeWidth, smallImageSizeWidth } = useSizeImages();

    const refText = useRef(null);

    const refBlockFirst = useRef(null), refBlockSecond = useRef(null), refBlockThird = useRef(null),
          refBlockFourth = useRef(null), refBlockFifth = useRef(null), refBlockSixth = useRef(null),
          refBlockSeventh = useRef(null), refBlockEight = useRef(null), refBlockNineth = useRef(null);

    const isInViewBFirst = useInView(refBlockFirst), isInViewBSecond = useInView(refBlockSecond),
          isInViewBThird = useInView(refBlockThird), isInViewBFourth = useInView(refBlockFourth),
          isInViewBFifth = useInView(refBlockFifth), isInViewBSixth = useInView(refBlockSixth),
          isInViewBSeventh = useInView(refBlockSeventh), isInViewBEigth = useInView(refBlockEight),
          isInViewBNineth = useInView(refBlockNineth);

    const isInViewText = useInView(refText);

    const textControls = useAnimation(), rowOneControls = useAnimation(), rowTwoControls = useAnimation(),
          rowThirdControls = useAnimation(), modalControls = useAnimation();

    const blockFirstControls = useAnimation(), blockSecondControls = useAnimation(), blockThirdControls = useAnimation(),
          blockFourthControls = useAnimation(), blockFifthControls = useAnimation(), blockSixthControls = useAnimation(),
          blockSeventhControls = useAnimation(), blockEigthControls = useAnimation(), blockNinethControls = useAnimation();

    useEffect(() => {
        if (isInViewText) textControls.start("visible");
            else textControls.start("hidden");

        if (isInViewBFirst) blockFirstControls.start("visible");
            else blockFirstControls.start("hidden");

        if (isInViewBSecond) blockSecondControls.start("visible");
            else blockSecondControls.start("hidden");

        if (isInViewBThird) blockThirdControls.start("visible");
            else blockThirdControls.start("hidden");

        if (isInViewBFourth) blockFourthControls.start("visible");
            else blockFourthControls.start("hidden");

        if (isInViewBFifth) blockFifthControls.start("visible");
            else blockFifthControls.start("hidden");

        if (isInViewBSixth) blockSixthControls.start("visible");
            else blockSixthControls.start("hidden");

        if (isInViewBSeventh) blockSeventhControls.start("visible");
            else blockSeventhControls.start("hidden");

        if (isInViewBEigth) blockEigthControls.start("visible");
            else blockEigthControls.start("hidden");

        if (isInViewBNineth) blockNinethControls.start("visible");
            else blockNinethControls.start("hidden");

        if (isModal) modalControls.start("visible");
            else modalControls.start("hidden");

    }, [isInViewText, isInViewBFirst, isInViewBSecond, isInViewBThird,
        isInViewBFourth, isInViewBFifth, isInViewBSixth, isInViewBSeventh,
        isInViewBEigth, isInViewBNineth, isModal]);

    useEffect(() => {
        const BackElements = document.querySelectorAll('[id=to-blur]');

        BackElements.forEach(element => {
            if (isModal) {element?.classList.add('blur-class'); disableScroll.on()}
                else {element?.classList.remove('blur-class'); disableScroll.off()}
        } );

    }, [isModal]);

    
    return (
        <div className='w-screen flex justify-center bg-white'>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        transition: {duration: 0, delay: 0}
                    },
                    visible: {
                        opacity: 1,
                        transition: {duration: 0.75, delay: 0.25}
                    }
                }}
                initial="hidden"
                animate={modalControls}

                className={isModal ? 'flex z-30' : 'hidden z-30'}
            ><Modal number_of_card={whichCard} is_showing={isModal} setIsShowing={setIsModal}/></motion.div>
            <div id="to-blur" className='m-auto px-2 min-w-[1200px] max-w-[1200px] overflow-x-hidden'>
                <motion.div

                   variants={{
                       hidden: {opacity: 0, x: 100},
                       visible: {opacity: 1, x: 0}
                   }}
                   initial="hidden"
                   animate={textControls}
                   transition={{duration: 0.75, delay: 0.25}}

                    className='block justify-right text-right text-black text-6xl font-light' ref={refText}>
                    <p className='font-bold'>DESDE EL PRIMER</p>
                    <p className='font-bold'>CONTACTO <a className="font-light">HASTA EL</a></p>
                    <p>ÚLTIMO DETALLE</p>
                </motion.div>

                <div className='w-full mt-16 font-bold'>
                    <motion.div className="flex h-[25rem] mb-4" >
                        <motion.div

                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={blockFirstControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            onClick={event => {setIsModal(true); setWhichCard(1)}}
                            
                            className="relative container-card group cursor-pointer w-1/4 mr-2 rounded-2xl h-full" ref={refBlockFirst}>
                            <div className="background" style={{width: mediumImageSize.sizeResponsive.width, height: mediumImageSize.sizeResponsive.height}}>
                                <LoadImage alt="Mug Component Mockup" w={mediumImageSize.sizeResponsive.width}
                                           h={mediumImageSize.sizeResponsive.height} instantLoad={false} image={Images['mug_one']}/>
                            </div>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer' >
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        MUGS
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                        <motion.div

                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={blockSecondControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}


                            onClick={event => {setIsModal(true); setWhichCard(2)}}

                            className="relative container-card group cursor-pointer w-1/4 mx-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockSecond}>
                            <div className="background" style={{width: smallImageSize.sizeResponsive.width, height: smallImageSize.sizeResponsive.height}}>
                                <LoadImage alt="Cap Component Mockup" w={smallImageSize.sizeResponsive.width}
                                           h={smallImageSize.sizeResponsive.height} instantLoad={false} image={Images['cap_one']}/>
                            </div>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        GORRA
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                        <motion.div

                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={blockThirdControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            onClick={event => {setIsModal(true); setWhichCard(3)}}

                            className="relative container-card group cursor-pointer w-2/4 ml-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockThird}>
                            <div className="background" style={{width: mediumImageSizeWidth.sizeResponsive.width, height: mediumImageSizeWidth.sizeResponsive.height}}>
                                <LoadImage alt="Camiseta Component Mockup" w={mediumImageSizeWidth.sizeResponsive.width}
                                           h={mediumImageSizeWidth.sizeResponsive.height} instantLoad={false} image={Images['camisas_one']}/>
                            </div>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        CAMISETA
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex h-[25rem] mb-4">
                        <motion.div
                            
                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={blockFourthControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            onClick={event => {setIsModal(true); setWhichCard(4)}}

                            className="relative container-card group cursor-pointer w-2/4 mr-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockFourth}>
                            <div className="background" style={{width: mediumImageSizeWidth.sizeResponsive.width, height: mediumImageSizeWidth.sizeResponsive.height}}>
                                <LoadImage alt="Agenda Component Mockup" w={mediumImageSizeWidth.sizeResponsive.width}
                                           h={mediumImageSizeWidth.sizeResponsive.height} instantLoad={false} image={Images['agenda_one']}/>
                            </div>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        AGENDA
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                        <motion.div

                            variants={{

                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={blockFifthControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            onClick={event => {setIsModal(true); setWhichCard(5)}}

                            className="relative flex container-card group cursor-pointer w-1/4 mx-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockFifth}>
                            <div className="background" style={{width: largeImageSize.sizeResponsive.width, height: largeImageSize.sizeResponsive.height}}>
                                <LoadImage alt="Lamy Component Mockup" w={largeImageSize.sizeResponsive.width}
                                           h={largeImageSize.sizeResponsive.height} instantLoad={false} image={Images['lamy_one']}/>
                            </div>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        LAMY
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                        <motion.div

                            variants={{

                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={blockSixthControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            onClick={event => {setIsModal(true); setWhichCard(6)}}

                            className="relative container-card group cursor-pointer w-1/4 ml-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockSixth}>
                            <div className="background" style={{width: smallImageSize.sizeResponsive.width, height: smallImageSize.sizeResponsive.height}}>
                                <LoadImage alt="Thermo Component Mockup" w={smallImageSize.sizeResponsive.width}
                                           h={smallImageSize.sizeResponsive.height} instantLoad={false} image={Images['thermo_one']}/>
                            </div>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        TERMO
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex h-[25rem] mb-4">
                        <motion.div

                            variants={{

                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={blockSeventhControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            onClick={event => {setIsModal(true); setWhichCard(7)}}

                            className="relative container-card group cursor-pointer w-1/4 mr-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockSeventh}>
                            <div className="background" style={{width: smallImageSize.sizeResponsive.width, height: smallImageSize.sizeResponsive.height}}>
                                <LoadImage alt="Buttons Component Mockup" w={smallImageSize.sizeResponsive.width}
                                           h={smallImageSize.sizeResponsive.height} instantLoad={false} image={Images['button_one']}/>
                            </div>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        BOTONES
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                        <motion.div

                            variants={{

                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={blockEigthControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            onClick={event => {setIsModal(true); setWhichCard(8)}}

                            className="relative flex container-card group cursor-pointer w-2/4 mx-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockEight}>
                            <div className="background" style={{width: smallImageSizeWidth.sizeResponsive.width, height: smallImageSizeWidth.sizeResponsive.height}}>
                                <LoadImage alt="Pin Component Mockup" w={smallImageSizeWidth.sizeResponsive.width}
                                           h={smallImageSizeWidth.sizeResponsive.height} instantLoad={false} image={Images['pin_one']}/>
                            </div>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        PIN
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                        <motion.div

                            variants={{

                                hidden: {opacity: 0},
                                visible: {opacity: 1}
                            }}
                            initial="hidden"
                            animate={blockNinethControls}

                            whileHover={{ scale: [null, 1.02, 1.02] }}
                            transition={{duration: 0.3, delay: 0.0}}

                            onClick={event => {setIsModal(true); setWhichCard(9)}}

                            className="relative container-card group cursor-pointer w-1/4 ml-2 bg-cover bg-center rounded-2xl h-full" ref={refBlockNineth}>
                            <div className="background" style={{width: largeImageSize.sizeResponsive.width, height: largeImageSize.sizeResponsive.height}}>
                                <LoadImage alt="Carnet Component Mockup" w={largeImageSize.sizeResponsive.width}
                                           h={largeImageSize.sizeResponsive.height} instantLoad={false} image={Images['carnet_one']}/>
                            </div>
                            <div className='absolute flex w-full justify-center bottom-8 hover:cursor-pointer'>
                                <button className='py-2 px-10 bg-black border-none text-white hover:bg-black hover:text-white rounded-full'>
                                    <p className="group-hover:text-[#FFF384]
                                                  easy-in group-hover:easy-out duration-300 transition-opacity">
                                        CARNETS
                                    </p>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default ThirdSection;
