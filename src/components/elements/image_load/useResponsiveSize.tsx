import { useEffect, useState } from 'react';

function getCurrentDimension(full: boolean) {
    let max_website_size = 1200, size = window.innerWidth;

    if (size >= max_website_size && full === false) return max_website_size;
        else return window.innerWidth
}

export const useResponsiveSize = (size: number, o_width: number, o_height: number, full: boolean) => {
    const [viewportSize, setViewportSize] = useState(getCurrentDimension(full));

    let sizeResponsive = {'width': o_width, 'height': o_height}, relative_size = (((size * 100)/1200)/100)*viewportSize , percentage = ((relative_size * 100)/o_width)/100, newWidth = percentage * o_width , newHeight = percentage * o_height;

    sizeResponsive = { 'width': newWidth, 'height': newHeight };

    useEffect(() => {
        const updateDimension = () => { setViewportSize(getCurrentDimension(full)) }

        window.addEventListener('resize', updateDimension);

        return(() => { window.removeEventListener('resize', updateDimension) })
    }, [viewportSize])

    return { sizeResponsive }
}

export const useGivenSize = (size: any, o_width: number, o_height: number, full: boolean) => {

    let sizeDimensions = size[0];

    const [viewportSize, setViewportSize] = useState(getCurrentDimension(full)); 

    switch(true) {
        case (viewportSize >= 1200):
            sizeDimensions = size[0];
            break;
        case (viewportSize < 1200 && viewportSize >= 1024):
            sizeDimensions = size[1];
            break;
        case (viewportSize < 1024 && viewportSize >= 768):
            sizeDimensions = size[2];
            break;
        case (viewportSize < 768):
            sizeDimensions = size[3];
            break;
        default:
            sizeDimensions = size[3];
    }
    
    let sizeResponsive = {'width': o_width, 'height': o_height}, percentage = (((sizeDimensions * 100)/o_width)/100), newWidth = sizeDimensions, newHeight = o_height * percentage;

    sizeResponsive = {'width': newWidth, 'height': newHeight};

    useEffect(() => {
        const updateDimension = () => { setViewportSize(getCurrentDimension(full)) }

        window.addEventListener('resize', updateDimension);

        return(() => { window.removeEventListener('resize', updateDimension) })
    }, [viewportSize])
    
    return { sizeResponsive }
}
