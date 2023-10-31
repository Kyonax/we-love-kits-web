import { useEffect, useState } from 'react';


export const useInnerPosition = () => {
    const [innerPosition, setInnerPosition] = useState(0);

    const handleInnerScroll = () => {
        const position = window.pageYOffset;
        setInnerPosition(position)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleInnerScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleInnerScroll)
        }
    }, [innerPosition]);

    return { innerPosition }
}
