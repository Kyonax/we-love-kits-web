import {useEffect, useRef, useState} from "react"

import { HandleArray, useSizeImages } from './imports';
import {motion, useInView, useAnimation, useIsPresent} from "framer-motion";

import LoadImage from "../../components/elements/image_load/component";
import './modal.css';

interface ModalSectionProps {
    number_of_card: number,
    is_showing: boolean,
    setIsShowing: any
}

const ModalSection: React.FC<ModalSectionProps> = ({number_of_card, is_showing, setIsShowing}) => {

    const { imageSizeBigModal, imageSizeSmallModal } = useSizeImages();

    const [picture, setPicture] = useState(HandleArray[number_of_card]), [bigPicture, setBigPicture] = useState(0),
          [smallPictureOne, setSmallPictureOne] = useState(1), [smallPictureTwo, setSmallPictureTwo] = useState(2),
          [smallPictureThree, setSmallPictureThree] = useState(3);

    const handlePlace = function (clickedPosition: any, relativePosition: any) {
        let actualBigPosition = bigPicture;

        setBigPicture(clickedPosition);

        switch (relativePosition) {
            case 0:
                setBigPicture(actualBigPosition)
                break;

            case 1:
                setSmallPictureOne(actualBigPosition)
                break;

            case 2:
                setSmallPictureTwo(actualBigPosition)
                break;

            case 3:
                setSmallPictureThree(actualBigPosition)
                break;
        }

    }

    useEffect(() => {
        let arrayIndex = number_of_card - 1;
        if (arrayIndex < 0) arrayIndex = 0

        setPicture(HandleArray[arrayIndex])
    }, [number_of_card]);


    return (
        <div>
            <div onClick={event => {setIsShowing(false)}} className="back-modal"/>
            <div className="container-modal">
                <div onClick={event => { handlePlace(bigPicture, 0) }} className="big-picture bg-container">
                    <div className="background" style={{width: imageSizeBigModal.sizeResponsive.width, height: imageSizeBigModal.sizeResponsive.height}}>
                        <LoadImage alt="Image Component Mockup" w={imageSizeBigModal.sizeResponsive.width}
                                   h={imageSizeBigModal.sizeResponsive.height} instantLoad={false} image={picture[bigPicture]}/>
                    </div>
                </div>
                <div className="column">
                    <div style={{ backgroundImage: `url(${picture[smallPictureOne]})` }} onClick={event => { handlePlace(smallPictureOne, 1) }} className="small-picture bg-container">
                        <div className="background" style={{width: imageSizeSmallModal.sizeResponsive.width, height: imageSizeSmallModal.sizeResponsive.height}}>
                            <LoadImage alt="Image Component Mockup" w={imageSizeSmallModal.sizeResponsive.width}
                                       h={imageSizeSmallModal.sizeResponsive.height} instantLoad={false} image={picture[smallPictureOne]}/>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${picture[smallPictureTwo]})` }} onClick={event => { handlePlace(smallPictureTwo, 2) }} className="small-picture bg-container">
                        <div className="background" style={{width: imageSizeSmallModal.sizeResponsive.width, height: imageSizeSmallModal.sizeResponsive.height}}>
                            <LoadImage alt="Image Component Mockup" w={imageSizeSmallModal.sizeResponsive.width}
                                       h={imageSizeSmallModal.sizeResponsive.height} instantLoad={false} image={picture[smallPictureTwo]}/>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${picture[smallPictureThree]})` }} onClick={event => { handlePlace(smallPictureThree, 3) }} className="small-picture bg-container">
                        <div className="background" style={{width: imageSizeSmallModal.sizeResponsive.width, height: imageSizeSmallModal.sizeResponsive.height}}>
                            <LoadImage alt="Image Component Mockup" w={imageSizeSmallModal.sizeResponsive.width}
                                       h={imageSizeSmallModal.sizeResponsive.height} instantLoad={false} image={picture[smallPictureThree]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSection
