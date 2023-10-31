import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { Images, useSizeImages } from './imports';
import { renderCanvas, sequencePlay } from './canvas';
import {  useResponsiveSize } from '../../components/elements/image_load/useResponsiveSize';
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

import LoadImage from '../../components/elements/image_load/component';

import { drawInCanvas } from "./canvas";
import './letters.css'; import './style.css';

interface FirstSectionProps { innerPosition: any, sequenceAnimation: any }

const FirstSection: React.FC<FirstSectionProps> = ({ innerPosition, sequenceAnimation }) => {
    const [inAnimation, setInAnimation] = useState(false), [toAnimation, setToAnimation] = useState(true),
          [timeLineOrder, setTimeLineOrder] = useState(true);

    console.log(Object.keys({Image}));
    
    const [frameIndex, setFrameIndex] = useState(0), [context, setContext] = useState(null);

    const { staticSize, amorSize, arteSize, designSize, kitsSize, usablesSize, xpSize } = useSizeImages(useResponsiveSize);
    
    const canvas_ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {const context_render = renderCanvas(canvas_ref, staticSize); setContext(context_render)}, [])

    useEffect(() => { if(innerPosition <= 464 && innerPosition > 0) return setToAnimation(true) }, [innerPosition])

    useEffect(() => {
        let init = frameIndex, sequenceSize = 96;

        const interval = setInterval( async () => {
            if (!toAnimation) return;
            if (inAnimation) return;
            if (timeLineOrder) {
                if (init >= sequenceSize) {setTimeLineOrder(false); setToAnimation(false); }
                if (init >= sequenceSize) return setInAnimation(false);    
                const playAnimation = await sequencePlay(context, init, sequenceAnimation, sequenceSize, staticSize, setInAnimation);
                init += 1
                setFrameIndex(init)
            } else {
                if (init <= 0) { setTimeLineOrder(true); setToAnimation(false); }
                if (init <= 0) return setInAnimation(false);
                const reverseAnimation = await sequencePlay(context, init, sequenceAnimation, sequenceSize, staticSize, setInAnimation);
                init -= 1
                setFrameIndex(init)
            }
            
        }, 32.6)

        return () => clearInterval(interval);
    }, [timeLineOrder, context, toAnimation])
    
    return (
        <div className="container-section">
            <div className="first-section">
                <div className="letter-section">
                    <div className="letter">
                            
                        <div className="line-letter">
                            <LoadImage alt="Static Frame Lastest" w={usablesSize.sizeResponsive.width} h={usablesSize.sizeResponsive.height}
                                       instantLoad={true} image={Images.usables_letter_line} />
                        </div>
                        <div className="default-letter">
                            <LoadImage alt="Static Frame Lastest" w={usablesSize.sizeResponsive.width} h={usablesSize.sizeResponsive.height}
                                       instantLoad={true} image={Images.usables_letter} />
                        </div>
                    </div>
                </div>

                <div className="canvas-container">
                    <canvas style={{width: `${staticSize.sizeResponsive.width}px`, height: `${staticSize.sizeResponsive.heigh}`}} className="canvas" ref={canvas_ref}/>
                    <div className="static-frame">
                        <LoadImage alt="Static Frame Lastest" w={staticSize.sizeResponsive.width} h={staticSize.sizeResponsive.height}
                                   instantLoad={true} image={Images.frame_statico} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
                                                                                                                                                                                                                                                                                                                                           
