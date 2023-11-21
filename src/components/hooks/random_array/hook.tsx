import { useEffect } from 'react';

export const useRandomUpdate = (array: any, iterator: number, time: number, setState: any) => {
    useEffect(() => {
        let i = iterator, random_result = Math.floor(Math.random() * array.length);
        const interval = setInterval(() => {
            if (i >= array.length) i = 0;
            setState(array[random_result]);
            random_result = Math.floor(Math.random() * array.length);
            i++;
        }, time)

        return () => clearInterval(interval);
    }, [])
}
