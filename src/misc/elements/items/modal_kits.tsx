import {useEffect, useRef, useState} from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {motion, useInView, useAnimation, useIsPresent} from "framer-motion";

import './modal-kits.css';

import AgendaFirst from '../../assets/modal-images/kit-bienvenida-one.png';
import AgendaSecond from '../../assets/modal-images/kit-bienvenida-two.png';
import AgendaThird from '../../assets/modal-images/kit-bienvenida-three.png';
import AgendaFourth from '../../assets/modal-images/kit-bienvenida-fourth.png';

import CapFirst from '../../assets/modal-images/kit-eventos-one.png'
import CapSecond from '../../assets/modal-images/kit-eventos-two.png'
import CapThird from '../../assets/modal-images/kit-eventos-three.png'
import CapFourth from '../../assets/modal-images/kit-eventos-fourth.png'

import ButtonFirst from '../../assets/modal-images/kit-proyectos-one.png'
import ButtonSecond from '../../assets/modal-images/kit-proyectos-two.png'
import ButtonThird from '../../assets/modal-images/kit-proyectos-three.png'
import ButtonFourth from '../../assets/modal-images/kit-proyectos-fourth.png'

import CamisasFirst from '../../assets/modal-images/kit-reconocimiento-one.png'
import CamisasSecond from '../../assets/modal-images/kit-reconocimiento-two.png'
import CamisasThird from '../../assets/modal-images/kit-reconocimiento-three.png'
import CamisasFourth from '../../assets/modal-images/kit-reconocimiento-fourth.png'

import CarnetFirst from '../../assets/modal-images/1_Carnet.webp'
import CarnetSecond from '../../assets/modal-images/2_Carnet.webp'
import CarnetThird from '../../assets/modal-images/3_Carnet.webp'
import CarnetFourth from '../../assets/modal-images/4_Carnet.webp'

import LamyFirst from '../../assets/modal-images/1_Lamy.webp'
import LamySecond from '../../assets/modal-images/2_Lamy.webp'
import LamyThird from '../../assets/modal-images/3_Lamy.webp'
import LamyFourth from '../../assets/modal-images/4_Lamy.webp'

import PinFirst from '../../assets/modal-images/1_Pin.webp'
import PinSecond from '../../assets/modal-images/2_Pin.webp'
import PinThird from '../../assets/modal-images/3_Pin.webp'
import PinFourth from '../../assets/modal-images/4_Pin.webp'

import ThermoFirst from '../../assets/modal-images/1_Thermo.webp'
import ThermoSecond from '../../assets/modal-images/2_Thermo.webp'
import ThermoThird from '../../assets/modal-images/3_Thermo.webp'
import ThermoFourth from '../../assets/modal-images/4_Thermo.webp'

const kitBienvenidaText = {'title_1': 'KIT DE', 'title_2': 'BIENVENIDA', 'parragraph': 'En We Love Kits, te ofrecemos una experiencia de bienvenida única. Nuestros Kits de Bienvenida personalizados son la clave para recibir a nuevos miembros de tu equipo o colaboradores con comodidad, estilo y un toque personal. Desde herramientas esenciales hasta regalos personalizados, nuestros Kits de Bienvenida te ayudan a crear una primera impresión impactante.'}
const kitEventosText = {'title_1': 'KIT DE', 'title_2': 'EVENTOS', 'parragraph': 'We Love Kits es tu aliado en eventos corporativos. Nuestros Kits personalizados están diseñados para hacer que tus reuniones, conferencias y eventos empresariales sean un rotundo éxito. Desde elementos esenciales para eventos hasta soluciones de branding, simplificamos la planificación y potenciamos la imagen de tu empresa con elegancia y profesionalismo.'}
const kitProyectosText = {'title_1': 'KIT DE', 'title_2': 'PROYECTOS', 'parragraph': 'En We Love Kits, nos enfocamos en el éxito de tus proyectos desde el inicio. Nuestra gama de Kits para Proyectos ofrece soluciones personalizadas para abordar necesidades específicas en diseño, tecnología y otros proyectos. Desde herramientas especializadas hasta asesoramiento experto, nuestros Kits para Proyectos simplifican la gestión y ejecución, maximizando los resultados de tus proyectos.'}
const kitReconocimientoText = {'title_1': 'KIT DE', 'title_2': 'RECONOCIMIENTO', 'parragraph': 'En We Love Kits, celebramos logros y esfuerzos con nuestros Kits de Reconocimiento personalizados. Nuestra selección de kits está diseñada para honrar a empleados destacados, socios valiosos o miembros de equipo sobresalientes en tu organización. Con regalos únicos y personalizados, nuestros Kits de Reconocimiento hacen que el acto de reconocer sea memorable y emocionante.'}

interface ModalSectionProps {
    number_of_card: number,
    is_showing: boolean,
    setIsShowing: any
}

const agendaPictures = [AgendaFirst, AgendaSecond, AgendaThird, AgendaFourth];
const capPictures = [CapFirst, CapSecond, CapThird, CapFourth];
const buttonPictures = [ButtonFirst, ButtonSecond, ButtonThird, ButtonFourth];
const camisasPictures = [CamisasFirst, CamisasSecond, CamisasThird, CamisasFourth];

const handleArrays = [agendaPictures, capPictures, buttonPictures, camisasPictures]

const handleText = [kitBienvenidaText, kitEventosText, kitProyectosText, kitReconocimientoText];

const ModalSection: React.FC<ModalSectionProps> = ({number_of_card, is_showing, setIsShowing}) => {

    const [picture, setPicture] = useState(handleArrays[number_of_card]), [bigPicture, setBigPicture] = useState(0),
          [smallPictureOne, setSmallPictureOne] = useState(1), [smallPictureTwo, setSmallPictureTwo] = useState(2),
          [smallPictureThree, setSmallPictureThree] = useState(3), [textHandle, setTextHandle] = useState(handleText[number_of_card]);

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
        setTextHandle(handleText[arrayIndex])
    }, [number_of_card]);

    return (
        <div>
            <div onClick={event => {setIsShowing(false)}} className="back-modal-kits"/>
            <div className="container-modal-kits">
                <div className="text-container">
                    <div className="title-kits">
                        <p>{ textHandle.title_1 }</p>
                        <p>{ textHandle.title_2 }</p>
                    </div>
                    <div className="parragraph-kits"><p>{ textHandle.parragraph }</p></div>
                </div>
                <div style={{ backgroundImage: `url(${picture[bigPicture]})` }} onClick={event => { handlePlace(bigPicture, 0) }} className="big-picture-kits"></div>
                <div className="column-kits">
                    <div style={{ backgroundImage: `url(${picture[smallPictureOne]})` }} onClick={event => { handlePlace(smallPictureOne, 1) }} className="small-picture-kits"></div>
                    <div style={{ backgroundImage: `url(${picture[smallPictureTwo]})` }} onClick={event => { handlePlace(smallPictureTwo, 2) }} className="small-picture-kits"></div>
                    <div style={{ backgroundImage: `url(${picture[smallPictureThree]})` }} onClick={event => { handlePlace(smallPictureThree, 3) }} className="small-picture-kits"></div>
                </div>
            </div>
        </div>
    )
}

export default ModalSection
