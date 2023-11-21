import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { Images, useSizeImages } from './imports';
import { useRandomUpdate } from '../../components/hooks/random_array/hook';
import { renderCanvas, sequencePlay } from './canvas';
import {  useResponsiveSize } from '../../components/elements/image_load/useResponsiveSize';
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

import LoadImage from '../../components/elements/image_load/component';

import { drawInCanvas } from "./canvas";
import './style.css';

interface FirstSectionProps { innerPosition: any, sequenceAnimation: any }

const FirstSection: React.FC<FirstSectionProps> = ({ innerPosition, sequenceAnimation }) => {
    const [inAnimation, setInAnimation] = useState(false), [toAnimation, setToAnimation] = useState(true),
          [timeLineOrder, setTimeLineOrder] = useState(true), [contextKey, setContextKey] = useState('DESIGN'),
          [colorKey, setColorKey] = useState('#AB94FF');

    const theColors = ["#AB94FF","#FFE661","#FFBCFD","#FF8787","#7DE2FF","#7EEDAA"];
    const theWordsElement = ["ARTE","AMOR","KITS","DESIGN", "USABLES", "XP"];

    const updateContextKey = useRandomUpdate(theWordsElement, 0, 5000, setContextKey);
    const updateColorKey = useRandomUpdate(theColors, 0, 5000, setColorKey);
    
    const [frameIndex, setFrameIndex] = useState(0), [context, setContext] = useState(null);

    const { arteSize, amorSize, designSize, kitsSize, usablesSize, xpSize, sequenceSize, staticSize } = useSizeImages(useResponsiveSize);
    const arrayLetters = [{'key': 'ARTE', 'size': arteSize, 'img': Images.arte_letter, 'line': Images.arte_letter_line },
                          {'key': 'AMOR', 'size': amorSize, 'img': Images.amor_letter, 'line': Images.amor_letter_line },
                          {'key': 'DESIGN', 'size': designSize, 'img': Images.design_letter, 'line': Images.design_letter_line },
                          {'key': 'KITS', 'size': kitsSize, 'img': Images.kits_letter, 'line': Images.kits_letter_line },
                          {'key': 'USABLES', 'size': usablesSize, 'img': Images.usables_letter, 'line': Images.usables_letter_line },
                          {'key': 'XP', 'size': xpSize, 'img': Images.xp_letter, 'line': Images.xp_letter_line }];
    
    const canvas_ref = useRef<HTMLCanvasElement>(null);
    
    let lettersBanner = arrayLetters.map((item, i) => {
        return(
            <div key={i}>
                <div style={{width: `${arrayLetters[i].size.sizeResponsive.width}px`, height: `${arrayLetters[i].size.sizeResponsive.height}px`}}
                        className={contextKey === arrayLetters[i].key ? 'opacity-100 transition-every line-letter' : 'opacity-0 transition-every line-letter'}>
                    <LoadImage alt="Static Frame Lastest" w={arrayLetters[i].size.sizeResponsive.width} h={arrayLetters[i].size.sizeResponsive.height}
                               instantLoad={true} image={arrayLetters[i].line} />
                </div>
                <div style={{width: `${arrayLetters[i].size.sizeResponsive.width}px`, height: `${arrayLetters[i].size.sizeResponsive.height}px`}}
                     className={contextKey === arrayLetters[i].key ? 'opacity-100 transition-every default-letter' : 'opacity-0 transition-every default-letter'}>
                    <LoadImage alt="Static Frame Lastest" w={arrayLetters[i].size.sizeResponsive.width} h={arrayLetters[i].size.sizeResponsive.height}
                               instantLoad={true} image={arrayLetters[i].img} />
                </div>
            </div>
        )
    })

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
        <div className="container-section transition-every" style={{backgroundColor: colorKey}}>
            <div className="first-section">
                <div className="letter-section">
                    <div className="letter">
                        { lettersBanner }
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
                                                                                                                                                                                                                                                                                                                                           
