import { useResponsiveSize, useGivenSize } from '../../components/elements/image_load/useResponsiveSize';

import LETTER_H from '../../assets/second_section/letter-h/image';
import LETTER_K from '../../assets/second_section/letter-k/image';
import LETTER_L from '../../assets/second_section/letter-l/image';
import LETTER_W from '../../assets/second_section/letter-w/image';

import PERSON_H from '../../assets/second_section/person-h/image';
import PERSON_K from '../../assets/second_section/person-k/image';
import PERSON_L from '../../assets/second_section/person-l/image';
import PERSON_W from '../../assets/second_section/person-w/image';

import WE_LOVE_KITS_ILLUSTRATION from '../../assets/second_section/we-love-kits-illustration/image';

export const Images = {
    'letter-h': LETTER_H, 'letter-k': LETTER_K, 'letter-l': LETTER_L, 'letter-w': LETTER_W,
    'person-h': PERSON_H, 'person-k': PERSON_K, 'person-l': PERSON_L, 'person-w': PERSON_W,
    'we-love-kits-illustration': WE_LOVE_KITS_ILLUSTRATION,
}

export const useSizeImages = () => {
    const illustrationSize = useResponsiveSize(1200, 1219, 692, false);

    const letterWSize = useGivenSize([340, 340, 250, 250], 814, 1028, false);
    const letterLSize = useGivenSize([183, 183, 135, 135], 438, 1028, false);
    const letterKSize = useGivenSize([247, 247, 182, 182], 590, 1028, false);
    const letterHSize = useGivenSize([247, 247, 182, 182], 590, 1028, false);

    const personWSize = useGivenSize([180, 180, 140, 200], 408, 492, false);
    const personLSize = useGivenSize([183, 183, 143, 200], 442, 656, false);
    const personKSize = useGivenSize([140, 140, 100, 200], 306, 566, false);
    const personHSize = useGivenSize([190, 190, 150, 200], 482, 404, false);

    return { illustrationSize, letterWSize, letterLSize, letterKSize, letterHSize,
    personWSize, personLSize, personKSize, personHSize}
}
