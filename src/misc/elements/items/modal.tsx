import {useEffect, useRef, useState} from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {motion, useInView, useAnimation, useIsPresent} from "framer-motion";

import './modal.css';

import AgendaFirst from '../../assets/modal-images/1_Agenda.webp';
import AgendaSecond from '../../assets/modal-images/2_Agenda.webp';
import AgendaThird from '../../assets/modal-images/3_Agenda.webp';

import MugFirst from '../../assets/modal-images/1_Mug.webp'
import MugSecond from '../../assets/modal-images/2_Mug.webp'
import MugThird from '../../assets/modal-images/3_Mug.webp'
import MugFourth from '../../assets/modal-images/4_Mug.webp'

import ButtonFirst from '../../assets/modal-images/1_Button.webp'
import ButtonSecond from '../../assets/modal-images/2_Button.webp'
import ButtonThird from '../../assets/modal-images/3_Button.webp'
import ButtonFourth from '../../assets/modal-images/4_Button.webp'

import CamisasFirst from '../../assets/modal-images/1_Camisas.webp'
import CamisasSecond from '../../assets/modal-images/2_Camisas.webp'
import CamisasThird from '../../assets/modal-images/3_Camisas.webp'

import CapFirst from '../../assets/modal-images/1_Cap.webp'
import CapSecond from '../../assets/modal-images/2_Cap.webp'
import CapThird from '../../assets/modal-images/3_Cap.webp'
import CapFourth from '../../assets/modal-images/4_Cap.webp'

import CarnetFirst from '../../assets/modal-images/1_Carnet.webp'
import CarnetSecond from '../../assets/modal-images/2_Carnet.webp'
import CarnetThird from '../../assets/modal-images/3_Carnet.webp'

import LamyFirst from '../../assets/modal-images/1_Lamy.webp'
import LamySecond from '../../assets/modal-images/2_Lamy.webp'
import LamyThird from '../../assets/modal-images/3_Lamy.webp'

import PinFirst from '../../assets/modal-images/1_Pin.webp'
import PinSecond from '../../assets/modal-images/2_Pin.webp'
import PinThird from '../../assets/modal-images/3_Pin.webp'

import ThermoFirst from '../../assets/modal-images/1_Thermo.webp'
import ThermoSecond from '../../assets/modal-images/2_Thermo.webp'
import ThermoThird from '../../assets/modal-images/3_Thermo.webp'
import ThermoFourth from '../../assets/modal-images/4_Thermo.webp'

interface ModalSectionProps {
    number_of_card: number,
    is_showing: boolean,
    setIsShowing: any
}

const agendaPictures = [AgendaFirst, AgendaSecond, AgendaThird];
const mugPictures = [MugFirst, MugSecond, MugThird, MugFourth];
const buttonPictures = [ButtonFirst, ButtonSecond, ButtonThird, ButtonFourth];
const camisasPictures = [CamisasFirst, CamisasSecond, CamisasThird];
const capPictures = [CapFirst, CapSecond, CapThird, CapFourth];
const carnetPictures = [CarnetFirst, CarnetSecond, CarnetThird];
const lamyPictures = [LamyFirst, LamySecond, LamyThird];
const pinPictures = [PinFirst, PinSecond, PinThird];
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
