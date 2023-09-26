import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

import "./sections.css";
import { useEffect, useState, useRef } from "react";

interface FirstSectionProps {
    innerPosition: any;
}

const FirstSection: React.FC<FirstSectionProps> = ({ innerPosition }) => {
    const [numberSequence, setNumberSequence] = useState(100),
        frameCount = 198;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const videoPlay = useRef<HTMLVideoElement>(null);

    const [images, setImages] = useState<any[]>([]);
    const [isFetch, setIsFetch] = useState(false);
    const [isCrash, setIsCrash] = useState(false);
    const [frameIndex, setFrameIndex] = useState(0);
    const [alreadyPlayed, setAlreadyPlayed] = useState(false);
    const [bannerColor, setBannerColor] = useState("#AB94FF");
    const [contentText, setContentText] = useState("LOVE");

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
            return setIsFetch(true);
        }

        const img = new Image();
        const imgSrc = require(`../../../../assets/landing-kits-sequence/${i}.png`);
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

    const staticFrame = require(`../../../../assets/landing-kits-sequence/196.png`);
    const currentFrame = require(`../../../../assets/landing-kits-sequence/${numberSequence}.png`);

    const handleScroll = () => {
        const position = innerPosition,
            maxScroll = window.innerHeight;
        const scrollFraction = position / maxScroll;
        const frameInnerIndex = Math.min(
            frameCount,
            Math.floor(scrollFraction * frameCount)
        );


        if (position > 0) {
            setAlreadyPlayed(true)
        }

        /**
          console.log(
              `Position: ${position} | MaxScroll: ${maxScroll} | ScrollFraction: ${scrollFraction} | FrameIndex: ${frameIndex}`
          );
         */
    };

    const renderCanvas = () => {
        if (isFetch === false) return;
        const canvas = canvasRef.current;

        if (canvas) {
            canvas.height = 874;
            canvas.width = 1200;
            if (canvas != null) {
                const context = canvas.getContext("2d");
            }
        }
    };

    useEffect(() => {
        if (isFetch === true) {
            var rottenNumber = frameIndex;

            if (alreadyPlayed === true) {

                const interval = setInterval(() => {
                    rottenNumber = rottenNumber + 1;
                    if (rottenNumber >= images.length) rottenNumber = 196;
                    setFrameIndex(rottenNumber);
                }, 28.66);

                return () => clearInterval(interval);
            }
        }

    }, [frameIndex, isFetch, alreadyPlayed]);


    useEffect(() => {
        const theColors = ["#FFF384","#FFBCFD","#A0FFC3","#7DE2FF","#AB94FF"]
        const theWordsElement = ["ARTE","ÙNICO","DISEÑO","PERSONALIZADOS", "EXPERIENCIAS"]

        let i = 0;
        const interval = setInterval(() => {
            if (i >= theColors.length) i = 0;
            setBannerColor(theColors[i])
            setContentText(theWordsElement[i])
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
        let width = 725, height = 907;

        let canvaWidth = 236.5, canvaHeight = 149;

        if (context != null) {
            let requestId: any;
            const render = () => {

                if (images[theFrame] === undefined) {
                    context.clearRect(0, 0, width, height);
                    context.drawImage(images[images.length - 1], canvaWidth, canvaHeight, width, width);
                };
                if (images[theFrame] === undefined) return;
                context.clearRect(0, 0, width, height);
                context.drawImage(images[theFrame], canvaWidth, canvaHeight, width, width);
                console.log(`InnerWidth: ${width} - Inner Heigth: ${height} /n CanvaWidth: ${canvaWidth} Canva Heigth: ${canvaHeight} /n Width0.76: ${width *0.76} Width0.75: ${width * 0.75}`);
                requestId = requestAnimationFrame(render);
            };

            render();

            return () => cancelAnimationFrame(requestId);
        }
    }, [handleScroll, frameIndex, images]);

    return (
        <div style={{backgroundColor: bannerColor}} className="relative flex justify-center mt-0 transition-all easy-in delay-300">
            <div className="absolute text-center text-white flex w-full h-full">
                <div className="w-full h-full relative m-auto mt-[6rem]">
                    <div className="w-full h-full m-auto relative flex text-center min-w-[1250px] max-w-[1250px] transition easy-in-out duration-700">
                        <h1 className={contentText === "LOVE" ? 'opacity-100 text-base-love' : 'opacity-0 text-base-love'}>LOVE</h1>
                        <h1 className={contentText === "ARTE" ? 'opacity-100 text-base-arte' : 'opacity-0 text-base-arte'}>ARTE</h1>
                        <h1 className={contentText === "ÙNICO" ? 'opacity-100 text-base-unique' : 'opacity-0 text-base-unique'}>ÙNICO</h1>
                        <h1 className={contentText === "DISEÑO" ? 'opacity-100 text-base-design' : 'opacity-0 text-base-design'}>DISEÑO</h1>
                        <h1 className={contentText === "PERSONALIZADOS" ? 'opacity-100 text-base-custom' : 'opacity-0 text-base-custom'}>
                            PERSONA<p className="mt-[-11rem]">LIZADOS</p></h1>
                        <h1 className={contentText === "EXPERIENCIAS" ? 'opacity-100 text-base-xp' : 'opacity-0 text-base-xp'}>
                            EXPERI<p className="mt-[-15rem]">ENCIA</p></h1>
                    </div>
                </div>
            </div>

            <div className="m-auto max-w-[1200px] min-w-[1200px]">
                <div className="relative block w-full">
                    <div className="flex w-full">
                        <div className="w-full relative block">
                            <div className="relative w-full h-full">
                                <canvas className="absolute left-0 w-full" ref={canvasRef} />
                            </div>

                            <div className={isCrash ? 'invisible' : 'invisible'}>
                                <div className="w-[85%] ml-[-7.5%]">
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
