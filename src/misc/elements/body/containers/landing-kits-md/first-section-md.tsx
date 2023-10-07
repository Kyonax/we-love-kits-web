import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

import ARTE_LETTER from '../../../../assets/banner-letters/ARTE_LETTER.webp';
import ARTE_LETTER_LINE from '../../../../assets/banner-letters/ARTE_LETTER_LINE.webp';
import AMOR_LETTER from '../../../../assets/banner-letters/AMOR_LETTER.webp';
import AMOR_LETTER_LINE from '../../../../assets/banner-letters/AMOR_LETTER_LINE.webp';
import DESIGN_LETTER from '../../../../assets/banner-letters/DESIGN_LETTER.webp';
import DESIGN_LETTER_LINE from '../../../../assets/banner-letters/DESIGN_LETTER_LINE.webp';
import KITS_LETTER from '../../../../assets/banner-letters/KITS_LETTER.webp';
import KITS_LETTER_LINE from '../../../../assets/banner-letters/KITS_LETTER_LINE.webp';
import USABLES_LETTER from '../../../../assets/banner-letters/USABLES_LETTER.webp';
import USABLES_LETTER_LINE from '../../../../assets/banner-letters/USABLES_LETTER_LINE.webp';
import XP_LETTER from '../../../../assets/banner-letters/XP_LETTER.webp';
import XP_LETTER_LINE from '../../../../assets/banner-letters/XP_LETTER_LINE.webp';

import "../landing-kits/sections.css";
import { useEffect, useState, useRef } from "react";

interface FirstSectionProps {
    innerPosition: any;
    windowSize: any
}

const FirstSection: React.FC<FirstSectionProps> = ({ innerPosition, windowSize }) => {
    const [numberSequence, setNumberSequence] = useState(100),
        frameCount = 198;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const videoPlay = useRef<HTMLVideoElement>(null);

    const [images, setImages] = useState<any[]>([]);
    const [isFetch, setIsFetch] = useState(false);
    const [isCrash, setIsCrash] = useState(false);
    const [frameIndex, setFrameIndex] = useState(0);
    const [alreadyPlayed, setAlreadyPlayed] = useState(false);
    const [toAnimation, setToAnimation] = useState(false);
    const [inAnimation, setInAnimation] = useState(false);
    const [bannerColor, setBannerColor] = useState("#AB94FF");
    const [contentText, setContentText] = useState("ARTE");

    const attempPlay = () => {
        videoPlay &&
            videoPlay.current &&
            videoPlay.current.play().catch(error => {
                console.error("Error attemping to play", error)
            })
    }


    async function fetchingImages(i: any) {
        console.log(`Iterator: ${i}`);
        if (i === 197) {
            renderCanvas();
            setAlreadyPlayed(true)
            return setIsFetch(true);
        }

        const img = new Image();
        const imgSrc = require(`../../../../assets/landing-kits-sequence/${i}.webp`);
        console.log(imgSrc);
        img.src = imgSrc;
        img.onload = async () => {
            setImages((prevImages) => [...prevImages, img]);

            i++
            if (i < frameCount) {
                fetchingImages(i);
            }
        };

    }

    async function preloadImages() {
        let i = 100;
        const fetching = await fetchingImages(i);
    }

    const staticFrame = require(`../../../../assets/landing-kits-sequence/196.webp`);
    const currentFrame = require(`../../../../assets/landing-kits-sequence/${numberSequence}.webp`);

    const handleScroll = () => {
        const position = innerPosition,
            maxScroll = window.innerHeight;
        const scrollFraction = position / maxScroll;
        const frameInnerIndex = Math.min(
            frameCount,
            Math.floor(scrollFraction * frameCount)
        );

          console.log(
              `Position: ${position} | MaxScroll: ${maxScroll} | ScrollFraction: ${scrollFraction} | FrameIndex: ${frameIndex}`
          );
    };

    const renderCanvas = () => {
        if (isFetch === false) return;
        const canvas = canvasRef.current;

        if (canvas) {
            /**
            * 1200 800
              1027
             */
            canvas.height = 1027;
            canvas.width = 1200;
            if (canvas != null) {
                const context = canvas.getContext("2d");
            }
        }
    };

    useEffect(() => {
         if (inAnimation === false){
            if (innerPosition > 120 && innerPosition <= 132) {
                if (frameIndex === 196) {
                    setFrameIndex(96);
                    setToAnimation(true);
                    console.log(toAnimation);
                } else if (frameIndex === 0) {
                    setToAnimation(false);
                    console.log(toAnimation);
                }
            }
         }
    }, [innerPosition]);


    useEffect(() => {
        if (isFetch === true) {
            var rottenNumber = frameIndex;

            if (alreadyPlayed === true) {

                const interval = setInterval(() => {

                if (toAnimation === false){

                    rottenNumber = rottenNumber + 1;
                    if (rottenNumber >= images.length) {rottenNumber = 196; setInAnimation(false)} else {setInAnimation(true)}
                    setFrameIndex(rottenNumber);
                } else if (toAnimation === true) {
                    rottenNumber = rottenNumber - 1;
                    if (rottenNumber <= 0) {rottenNumber = 0; setInAnimation(false)} else {setInAnimation(true)}
                    setFrameIndex(rottenNumber);
                }

                }, 28.66);

                return () => clearInterval(interval);
            }
        }

    }, [frameIndex, isFetch, alreadyPlayed, toAnimation]);


    useEffect(() => {
        const theColors = ["#AB94FF","#FFE661","#FFBCFD","#FF8787","#7DE2FF","#7EEDAA"]
        const theWordsElement = ["ARTE","AMOR","KITS","DISEÑO", "USABLES", "EXPERIENCIAS"]

        let i = 0, random_color = Math.floor(Math.random() * 5);
        const interval = setInterval(() => {
            if (i >= theColors.length) i = 0;
            setBannerColor(theColors[random_color])
            setContentText(theWordsElement[i])
            random_color = Math.floor(Math.random() * 5);
            i++
        }, 5000);

        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
        preloadImages();
    }, []);

    useEffect(() => {
        handleScroll();
        renderCanvas();
    }, [handleScroll]);

    useEffect(() => {
        if (isFetch === false) return;
        if (!canvasRef.current || images.length < 1) return;
        if (images === undefined) return;

        const context = canvasRef.current.getContext("2d");
        let theFrame = frameIndex;

        let width = 800, height = 690.66;
        let canvaWidth = 200, canvaHeight = 305;

        if (context != null) {
            let requestId: any;
            const render = () => {

                if (images[theFrame] === undefined) {
                    context.clearRect(0, 0, width, height);
                    context.drawImage(images[images.length - 1], canvaWidth, canvaHeight, width, height);
                };
                if (images[theFrame] === undefined) return;
                context.clearRect(0, 0, width, height);
                context.drawImage(images[theFrame], canvaWidth, canvaHeight, width, height);
                requestId = requestAnimationFrame(render);
            };

            render();

            return () => cancelAnimationFrame(requestId);
        }
    }, [handleScroll, frameIndex, images]);

    return (
        <div style={{backgroundColor: bannerColor}} className="relative flex justify-center mt-0 transition-all easy-in delay-300">
            <div className="absolute text-center text-white flex w-full h-full">
                <div className="w-full h-full relative m-auto mt-[6rem] flex">
                    <div className="w-full h-full mx-auto content text-center min-w-[768px] max-w-[1250px] transition easy-in-out duration-700 px-10">

                        <h1 className={contentText === "ARTE" ? 'opacity-100 transition-every' : 'opacity-0 transition-every'}>
                            <LazyLoadImage src={ARTE_LETTER} />
                        </h1>

                        <h1 className={contentText === "ARTE" ? 'opacity-100 text-stroke transition-every' : 'opacity-0 text-stroke transition-every'}>
                            <LazyLoadImage src={ARTE_LETTER_LINE} />
                        </h1>


                        <h1 className={contentText === "AMOR" ? 'opacity-100 transition-every' : 'opacity-0 transition-every'}>
                            <LazyLoadImage src={AMOR_LETTER} />
                        </h1>

                        <h1 className={contentText === "AMOR" ? 'opacity-100 transition-every text-stroke' : 'opacity-0 transition-every text-stroke'}>
                            <LazyLoadImage src={AMOR_LETTER_LINE} />
                        </h1>

                        <h1 className={contentText === "KITS" ? 'opacity-100 transition-every px-[10rem]' : 'opacity-0 transition-every px-[10rem]'}>
                            <LazyLoadImage src={KITS_LETTER} />
                        </h1>

                        <h1 className={contentText === "KITS" ? 'opacity-100 transition-every text-stroke px-[10rem]' : 'opacity-0 transition-every text-stroke px-[10rem]'}>
                            <LazyLoadImage src={KITS_LETTER_LINE} />
                        </h1>

                        <h1 className={contentText === "DISEÑO" ? 'opacity-100 transition-every' : 'opacity-0 transition-every'}>
                            <LazyLoadImage src={DESIGN_LETTER} />
                        </h1>
                        <h1 className={contentText === "DISEÑO" ? 'opacity-100 transition-every text-stroke' : 'opacity-0 transition-every text-stroke'}>
                            <LazyLoadImage src={DESIGN_LETTER_LINE} />
                        </h1>

                        <h1 className={contentText === "USABLES" ? 'opacity-100 transition-every px-[10rem]' : 'opacity-0 transition-every px-[10rem]'}>
                            <LazyLoadImage src={USABLES_LETTER} />
                        </h1>
                        <h1 className={contentText === "USABLES" ? 'opacity-100 transition-every text-stroke px-[10rem]' : 'opacity-0 transition-every text-stroke px-[10rem]'}>
                            <LazyLoadImage src={USABLES_LETTER_LINE} />
                        </h1>

                        <h1 className={contentText === "EXPERIENCIAS" ? 'opacity-100 transition-every' : 'opacity-0 transition-every'}>
                            <LazyLoadImage src={XP_LETTER} />
                        </h1>
                        <h1 className={contentText === "EXPERIENCIAS" ? 'opacity-100 transition-every text-stroke' : 'opacity-0 transition-every text-stroke'}>
                            <LazyLoadImage src={XP_LETTER_LINE} />
                        </h1>
                    </div>
                </div>
            </div>

            <div className="m-auto max-w-[1200px] min-w-[768px]">
                <div className="relative block w-full">
                    <div className="flex w-full">
                        <div className="w-full relative block">
                            <div className="absolute w-full h-full">
                                <canvas className="absolute left-0 w-full" ref={canvasRef} />
                            </div>

                            <div className={isCrash ? 'invisible' : 'invisible'}>
                                <div className="px-5 w-full bg-black">
                                    <LazyLoadImage
                                        alt="Kit prueba Image"
                                        src={staticFrame}
                                        threshold={100}
                                        visibleByDefault={true}
                                        effect="blur"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/12"></div>
                </div>

            </div>
        </div >
    );
};

export default FirstSection;
