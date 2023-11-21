import { useResponsiveSize, useGivenSize } from '../../components/elements/image_load/useResponsiveSize';

import AGENDA_ONE from '../../assets/third_section/1_Agenda/image';
import AGENDA_TWO from '../../assets/third_section/2_Agenda/image';
import AGENDA_THREE from '../../assets/third_section/3_Agenda/image';
import AGENDA_FOURTH from '../../assets/third_section/4_Agenda/image';

import BUTTON_ONE from '../../assets/third_section/1_Button/image';
import BUTTON_TWO from '../../assets/third_section/2_Button/image';
import BUTTON_THREE from '../../assets/third_section/3_Button/image';
import BUTTON_FOURTH from '../../assets/third_section/4_Button/image';

import CAMISAS_ONE from '../../assets/third_section/1_Camisas/image';
import CAMISAS_TWO from '../../assets/third_section/2_Camisas/image';
import CAMISAS_THREE from '../../assets/third_section/3_Camisas/image';
import CAMISAS_FOURTH from '../../assets/third_section/4_Camisas/image';

import CAP_ONE from '../../assets/third_section/1_Cap/image';
import CAP_TWO from '../../assets/third_section/2_Cap/image';
import CAP_THREE from '../../assets/third_section/3_Cap/image';
import CAP_FOURTH from '../../assets/third_section/4_Cap/image';

import CARNET_ONE from '../../assets/third_section/1_Carnet/image';
import CARNET_TWO from '../../assets/third_section/2_Carnet/image';
import CARNET_THREE from '../../assets/third_section/3_Carnet/image';
import CARNET_FOURTH from '../../assets/third_section/4_Carnet/image';

import LAMY_ONE from '../../assets/third_section/1_Lamy/image';
import LAMY_TWO from '../../assets/third_section/2_Lamy/image';
import LAMY_THREE from '../../assets/third_section/3_Lamy/image';
import LAMY_FOURTH from '../../assets/third_section/4_Lamy/image';

import MUG_ONE from '../../assets/third_section/1_Mug/image';
import MUG_TWO from '../../assets/third_section/2_Mug/image';
import MUG_THREE from '../../assets/third_section/3_Mug/image';
import MUG_FOURTH from '../../assets/third_section/4_Mug/image';

import PIN_ONE from '../../assets/third_section/1_Pin/image';
import PIN_TWO from '../../assets/third_section/2_Pin/image';
import PIN_THREE from '../../assets/third_section/3_Pin/image';
import PIN_FOURTH from '../../assets/third_section/4_Pin/image';

import THERMO_ONE from '../../assets/third_section/1_Thermo/image';
import THERMO_TWO from '../../assets/third_section/2_Thermo/image';
import THERMO_THREE from '../../assets/third_section/3_Thermo/image';
import THERMO_FOURTH from '../../assets/third_section/4_Thermo/image';

export const Agendas = [AGENDA_ONE, AGENDA_TWO, AGENDA_THREE, AGENDA_FOURTH];
export const Buttons = [BUTTON_ONE, BUTTON_TWO, BUTTON_THREE, BUTTON_FOURTH];
export const Camisas = [CAMISAS_ONE, CAMISAS_TWO, CAMISAS_THREE, CAMISAS_FOURTH];
export const Caps = [CAP_ONE, CAP_TWO, CAP_THREE, CAP_FOURTH];
export const Carnets = [CARNET_ONE, CARNET_TWO, CARNET_THREE, CARNET_FOURTH];
export const Lamies = [LAMY_ONE, LAMY_TWO, LAMY_THREE, LAMY_FOURTH];
export const Mugs = [MUG_ONE, MUG_TWO, MUG_THREE, MUG_FOURTH];
export const Pins = [PIN_ONE, PIN_TWO, PIN_THREE, PIN_FOURTH];
export const Thermos = [THERMO_ONE, THERMO_TWO, THERMO_THREE, THERMO_FOURTH];

export const HandleArray = [Mugs, Caps, Camisas, Agendas, Lamies, Thermos, Buttons, Pins, Carnets];

export const Images = { 'agenda_one': AGENDA_ONE, 'agenda_two': AGENDA_TWO,
                        'agenda_three': AGENDA_THREE, 'agenda_fourth': AGENDA_FOURTH,
                        'button_one': BUTTON_ONE, 'button_two': BUTTON_TWO,
                        'button_three': BUTTON_THREE, 'button_fourth': BUTTON_FOURTH,
                        'camisas_one': CAMISAS_ONE, 'camisas_two': CAMISAS_TWO,
                        'camisas_three': CAMISAS_THREE, 'camisas_fourth': CAMISAS_FOURTH,
                        'cap_one': CAP_ONE, 'cap_two': CAP_TWO, 'cap_three': CAP_THREE, 'cap_fourth': CAP_FOURTH,
                        'carnet_one': CARNET_ONE, 'carnet_two': CARNET_TWO,
                        'carnet_three': CARNET_THREE, 'carnet_fourth': CARNET_FOURTH,
                        'lamy_one': LAMY_ONE, 'lamy_two': LAMY_TWO, 'lamy_three': LAMY_THREE, 'lamy_fourth': LAMY_FOURTH,
                        'mug_one': MUG_ONE, 'mug_two': MUG_TWO, 'mug_three': MUG_THREE, 'mug_fourth': MUG_FOURTH,
                        'pin_one': PIN_ONE, 'pin_two': PIN_TWO, 'pin_three': PIN_THREE, 'pin_fourth': PIN_FOURTH,
                        'thermo_one': THERMO_ONE, 'thermo_two': THERMO_TWO,
                        'thermo_three': THERMO_THREE, 'thermo_fourth': THERMO_FOURTH}

export const useSizeImages = () => {
    const largeImageSize = useGivenSize([450, 450, 530, 650], 2640, 2640, false);
    const mediumImageSize = useGivenSize([450, 450, 530, 650], 1980, 1980, false);
    const smallImageSize = useGivenSize([450, 450, 530, 650], 1320, 1320, false);

    const largeImageSizeWidth = useGivenSize([630, 630, 1050, 850], 2640, 2640, false);
    const mediumImageSizeWidth = useGivenSize([630, 630, 1050, 850], 1980, 1980, false);
    const smallImageSizeWidth = useGivenSize([630, 630, 1050, 850], 1320, 1320, false);

    const imageSizeBigModal = useGivenSize([1000, 1000, 1000, 1000], 1320, 1320, false);
    const imageSizeSmallModal = useGivenSize([400, 400, 400, 400], 1320, 1320, false);

    return { largeImageSize, mediumImageSize, smallImageSize, largeImageSizeWidth, mediumImageSizeWidth, smallImageSizeWidth,
    imageSizeBigModal, imageSizeSmallModal }
}
