import {useEffect, useRef, useState} from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {motion, useInView, useAnimation, useIsPresent} from "framer-motion";

import './modal-kits.css';

interface ModalSectionProps {
    number_of_card: number,
    is_showing: boolean,
    setIsShowing: any
}

const agendaPictures = [AgendaFirst, AgendaSecond, AgendaThird, AgendaFourth];
const mugPictures = [MugFirst, MugSecond, MugThird, MugFourth];
const buttonPictures = [ButtonFirst, ButtonSecond, ButtonThird, ButtonFourth];
const camisasPictures = [CamisasFirst, CamisasSecond, CamisasThird, CamisasFourth];
const capPictures = [CapFirst, CapSecond, CapThird, CapFourth];
const carnetPictures = [CarnetFirst, CarnetSecond, CarnetThird, CarnetFourth];
const lamyPictures = [LamyFirst, LamySecond, LamyThird, LamyFourth];
const pinPictures = [PinFirst, PinSecond, PinThird, PinFourth];
const thermoPictures = [ThermoFirst, ThermoSecond, ThermoThird, ThermoFourth];

const handleArrays = [mugPictures, capPictures, camisasPictures, agendaPictures,
                      lamyPictures, thermoPictures, buttonPictures, pinPictures, carnetPictures]

const ModalSection: React.FC<ModalSectionProps> = ({number_of_card, is_showing, setIsShowing}) => {

    const [picture, setPicture] = useState(handleArrays[number_of_card]), [bigPicture, setBigPicture] = useState(0),
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

        setPicture(handleArrays[arrayIndex])
    }, [number_of_card]);


    return (
        <div>
            <div onClick={event => {setIsShowing(false)}} className="back-modal"/>
            <div className="container-modal">
                <div style={{ backgroundImage: `url(${picture[bigPicture]})` }} onClick={event => { handlePlace(bigPicture, 0) }} className="big-picture"></div>
                <div className="column">
                    <div style={{ backgroundImage: `url(${picture[smallPictureOne]})` }} onClick={event => { handlePlace(smallPictureOne, 1) }} className="small-picture"></div>
                    <div style={{ backgroundImage: `url(${picture[smallPictureTwo]})` }} onClick={event => { handlePlace(smallPictureTwo, 2) }} className="small-picture"></div>
                    <div style={{ backgroundImage: `url(${picture[smallPictureThree]})` }} onClick={event => { handlePlace(smallPictureThree, 3) }} className="small-picture"></div>
                </div>
            </div>
        </div>
    )
}

export default ModalSection
