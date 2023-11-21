import { useWindowSize } from '../../components/hooks/window_size/hook';

import ThirdSection from './section';
import ThirdSectionMD from './section-md';
import ThirdSectionSM from './section-sm';

export default function ThirdSectionIndex () {
    const { windowSize } = useWindowSize();

    const thirdSectionRender = () => {
        switch (true) {
                case (windowSize.width > 1200): return <ThirdSection />
                case (windowSize.width <= 1200 && windowSize.width > 768): return <ThirdSectionMD />
                case (windowSize.width <= 768): return <ThirdSectionSM />
                default: return <ThirdSection />
        }
    }

    return(<>{ thirdSectionRender() }</>)
}
