import {useEffect, useRef, useState} from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {motion, useInView, useAnimation, useIsPresent} from "framer-motion";

import './modal.css';

interface ModalSectionProps {
    number_of_card: number,
    is_showing: boolean,
    setIsShowing: any
}

const ModalSection: React.FC<ModalSectionProps> = ({number_of_card, is_showing, setIsShowing}) => {
    const [picture, setPicture] = useState([]), [bigPicture, setBigPicture] = useState(0),
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

    return (
        <div>
            <div onClick={event => {setIsShowing(false)}} className="back-modal"/>
            <div className="container-modal">
                <div onClick={event => { handlePlace(bigPicture, 0) }} className="big-picture"></div>
                <div className="column">
                    <div onClick={event => { handlePlace(smallPictureOne, 1) }} className="small-picture"></div>
                    <div onClick={event => { handlePlace(smallPictureTwo, 2) }} className="small-picture"></div>
                    <div onClick={event => { handlePlace(smallPictureThree, 3) }} className="small-picture"></div>
                </div>
            </div>
        </div>
    )
}

export default ModalSection
