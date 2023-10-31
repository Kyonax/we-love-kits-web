import Default from './component';
import { useWindowSize } from '../../hooks/window_size/hook';

interface ComponentProps { innerPosition: number, sequenceAnimation: any }

const ComponentIndex: React.FC<ComponentProps> = ({ innerPosition, sequenceAnimation }) => {
    const { windowSize } = useWindowSize();

    const componentRender = () => {
        switch (true) {
                case (windowSize.width > 1200): return <Default innerPosition={innerPosition} sequenceAnimation={sequenceAnimation}/>
                case (windowSize.width <= 1200 && windowSize.width > 768): return <Default innerPosition={innerPosition} sequenceAnimation={sequenceAnimation}/>
                case (windowSize.width <= 768): return <Default innerPosition={innerPosition} sequenceAnimation={sequenceAnimation}/>
                default: return <Default innerPosition={innerPosition} sequenceAnimation={sequenceAnimation}/>
        }
    }

    return(<>{componentRender()}</>)
}

export default ComponentIndex
