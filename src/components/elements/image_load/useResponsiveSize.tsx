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
