import { useWindowSize } from '../../components/hooks/window_size/hook';

import SecondSection from './section';

export default function SecondSectionIndex () {
    const { windowSize } = useWindowSize();

    const secondSectionRender = () => {
        switch (true) {
                case (windowSize.width > 1200): return <SecondSection />
                case (windowSize.width <= 1200 && windowSize.width > 768): return <SecondSection />
                case (windowSize.width <= 768): return <SecondSection />
                default: return <SecondSection />
        }
    }

    return(<>{ secondSectionRender() }</>)
}
