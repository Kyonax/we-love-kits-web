import { useEffect, useState } from 'react';

function getCurrentDimension () {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(getCurrentDimension());

    useEffect(() => {
        const updateDimension = () => { setWindowSize(getCurrentDimension()); window.location.reload(); }

        window.addEventListener('resize', updateDimension);
        return (() => { window.removeEventListener('resize', updateDimension) })
    }, [windowSize])

    return { windowSize }
}
