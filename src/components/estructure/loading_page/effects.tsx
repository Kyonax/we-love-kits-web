import { useEffect } from 'react';
import disableScroll from 'disable-scroll';

const container = {
}

const item = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    show: {
        opacity: 1,
        scale: 1,
    },
    exit: {
        opacity: 0,
        scale: [ 1, 1.2, 0 ],
        transition: {
            ease: "easeInOut",
            duration: 1.2,
        }
    }
}


export const useAnimationLoad = (animationFinished: boolean) => {

const back = {
    hidden: {
        opacity: 1,
        y: 0
    },
    show: {
        opacity: 1,
        y: 0
    },
    exit: {
        y: -window.innerHeight * 1.5,
        transition: {
            ease: "easeInOut",
            delay: 0.3,
            duration: 0.3
        }
    }
}

    return { container, item, back }
}
