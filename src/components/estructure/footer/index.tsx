import Footer from './component';
import FooterMD from './component-md';
import FooterSM from './component-sm';

import { useWindowSize } from '../../hooks/window_size/hook';

export default function FooterIndex () {
    const { windowSize } = useWindowSize();

    const footerRender = () => {
        switch (true) {
                case (windowSize.width > 1200): return <Footer />
                case (windowSize.width <= 1200 && windowSize.width > 768): return <FooterMD />
                case (windowSize.width <= 768): return <FooterSM />
                default: return <Footer />
        }
    }

    return(<>{footerRender()}</>)
}
