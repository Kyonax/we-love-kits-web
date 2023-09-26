import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

import "./sections.css";
import { useEffect, useState, useRef } from "react";

interface FirstSectionProps {
    innerPosition: any;
}

const FirstSection: React.FC<FirstSectionProps> = ({ innerPosition }) => {
    const [numberSequence, setNumberSequence] = useState(20),
        frameCount = 260;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [images, setImages] = useState<any[]>([]);
    const [isFetch, setIsFetch] = useState(false);
    const [isCrash, setIsCrash] = useState(false);
    const [frameIndex, setFrameIndex] = useState(0);

    async function fetchingImages(i: any) {
        if (i === 241) {
            renderCanvas();
            return setIsFetch(true);
        }

        const img = new Image();
        const imgSrc = require(`../../../../assets/landing-kits-sequence/${i + 20}.webp`);
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
        let i = 0;
        const fetching = await fetchingImages(i);
    }

    const staticFrame = require(`../../../../assets/landing-kits-sequence/260.webp`);
    const currentFrame = require(`../../../../assets/landing-kits-sequence/${numberSequence}.webp`);

    const handleScroll = () => {
        const position = innerPosition,
            maxScroll = window.innerHeight;
        const scrollFraction = position / maxScroll;
        const frameInnerIndex = Math.min(
            frameCount,
            Math.floor(scrollFraction * frameCount)
        );

        /**
          console.log(
              `Position: ${position} | MaxScroll: ${maxScroll} | ScrollFraction: ${scrollFraction} | FrameIndex: ${frameIndex}`
          );
         */

        setFrameIndex(frameInnerIndex);
    };

    const renderCanvas = () => {
        if (isFetch === false) return;
        const canvas = canvasRef.current;

        if (canvas) {
            canvas.height = window.innerHeight * 2;
            canvas.width = window.innerWidth;
            if (canvas != null) {
                const context = canvas.getContext("2d");
            }
        }
    };

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
        let width = window.innerWidth, height = window.innerHeight;

        let canvaWidth = canvasRef.current.width * 0.1, canvaHeight = canvasRef.current.height * 0;

        if (context != null) {
            let requestId: any;
            const render = () => {

                if (images[theFrame] === undefined) {
                    context.clearRect(0, 0, width, height);
                    context.drawImage(images[images.length - 1], canvaWidth, canvaHeight, width * 0.8, width * 0.8);
                };
                if (images[theFrame] === undefined) return;
                context.clearRect(0, 0, width, height);
                context.drawImage(images[theFrame], canvaWidth, canvaHeight, width * 0.8, width * 0.8);
                requestId = requestAnimationFrame(render);
            };

            render();

            return () => cancelAnimationFrame(requestId);
        }
    }, [handleScroll, frameIndex, images]);

    return (
        <div className="m-auto max-w-[1600px]">
            <div className="block py-[7%] xl:py-[2%] text-[#CFF3DA] w-full">
                <div className="flex w-full m-auto text-center">
                    <div className="w-1/5"></div>
                    <div className="w-3/5">
                        <h1 className="text-6xl font-bold">No simplemente creamos kits</h1>{" "}
                        <br />
                        <p className="text-[1.3rem] font-thin">
                            Diseñamos experiencias que perduran en el tiempo. Para empresas
                            grandes que buscan destacar, nuestors kits personalizados son la
                            elección definitiva.
                        </p>
                    </div>
                    <div className="w-1/5"></div>
                </div>

                <div className="flex w-full">
                    <div className="w-1/6"></div>
                    <div className="w-4/6 relative block">
                        <canvas
                            ref={canvasRef}
                            className="img-center-test w-full absolute flex px-6"
                        />

                        <div className={isCrash ? 'invisible' : 'invisible'}>
                            <div className="w-[117%] ml-[-7.5%]">
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
                    <div className="w-1/6"></div>
                </div>
                <div className="w-1/12"></div>
            </div>
        </div >
    );
};

export default FirstSection;
