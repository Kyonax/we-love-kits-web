import ARTE_LETTER from '../../assets/banner_letters/arte_letter/image';
import ARTE_LETTER_LINE from '../../assets/banner_letters/arte_letter/line/image';
import AMOR_LETTER from '../../assets/banner_letters/amor_letter/image';
import AMOR_LETTER_LINE from '../../assets/banner_letters/amor_letter/line/image';
import DESIGN_LETTER from '../../assets/banner_letters/design_letter/image';
import DESIGN_LETTER_LINE from '../../assets/banner_letters/design_letter/line/image';
import KITS_LETTER from '../../assets/banner_letters/kits_letter/image';
import KITS_LETTER_LINE from '../../assets/banner_letters/kits_letter/line/image';
import USABLES_LETTER from '../../assets/banner_letters/usables_letter/image';
import USABLES_LETTER_LINE from '../../assets/banner_letters/usables_letter/line/image';
import XP_LETTER from '../../assets/banner_letters/xp_letter/image';
import XP_LETTER_LINE from '../../assets/banner_letters/xp_letter/line/image';

import FRAME_STATIC from '../../assets/sequence_kit/image_0/image';

export const Images = {
    'arte_letter': ARTE_LETTER ,
    'arte_letter_line': ARTE_LETTER_LINE ,
    'amor_letter': AMOR_LETTER ,
    'amor_letter_line': AMOR_LETTER_LINE ,
    'design_letter': DESIGN_LETTER ,
    'design_letter_line': DESIGN_LETTER_LINE ,
    'kits_letter': KITS_LETTER_LINE ,
    'kits_letter_line': DESIGN_LETTER_LINE ,
    'usables_letter': USABLES_LETTER ,
    'usables_letter_line': USABLES_LETTER_LINE ,
    'xp_letter': XP_LETTER ,
    'xp_letter_line': XP_LETTER_LINE ,
    'frame_statico': FRAME_STATIC
}

export const useSizeImages = (useResponsiveSize: any) => {
    const sequenceSize = useResponsiveSize(1082, 1082, 932, false);
    const amorSize = useResponsiveSize(1200, 5245, 2173, false);
    const arteSize = useResponsiveSize(1200, 5293, 2594, false);
    const designSize = useResponsiveSize(1200, 5305, 2138, false);
    const kitsSize = useResponsiveSize(1200, 3788, 2881, false);
    const usablesSize = useResponsiveSize(800, 3586, 3325, false);
    const xpSize = useResponsiveSize(1200, 5279, 2042, false);
    const staticSize = useResponsiveSize(900, 1443, 1242, false);

    return { sequenceSize, amorSize, arteSize, designSize, kitsSize, usablesSize, xpSize, staticSize}
}
