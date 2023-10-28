import { useEffect } from 'react';
import { useInView, useAnimation } from "framer-motion";

export const useViewAnimation = (ref: any, startState: string, endState: string) => {
    const isInView = useInView(ref), mainControls = useAnimation();

    useEffect(() => {
        if (isInView) mainControls.start(startState)
            else mainControls.start(endState)
    }, [isInView]);

    return {
        mainControls
    }
}
