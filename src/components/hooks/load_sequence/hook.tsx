import { useEffect, useState } from 'react';
import SequenceImage from '../../../assets/sequence_kit/index-sequence';
import { useWindowSize } from '../window_size/hook';

function canUseWebP (){
var elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }    // very old browser like IE 8, canvas not supported
    return false;
}

function canUseAvif (){
return new Promise(resolve => {
      var image = new Image();  
      image.onload = image.onerror = function() {
        resolve(image.width === 2);
      };  
      image.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
    });
}

function ChooseImageSize () {
    let { windowSize } = useWindowSize();

    switch (true) {
        case(windowSize.width >= 1200):
            return '1200';
        case(windowSize.width < 1200 && windowSize.width >= 1024):
            return '1024';
        case(windowSize.width < 1024 && windowSize.width >= 768):
            return '768';
        case(windowSize.width < 768):
            return '365';
        default:
            return '1200';
    }
}

export const useLoadSequence = async (i: number, array: any, size: number, setIsFetch: any) => {
    const imageSize = ChooseImageSize();
    let fetching_array = new Array();

    const fetchImages = ( async (type: string) => {
        if (i <= size) {
            const getImageIterator = await SequenceImage.getImage(i).then((image: any) => {
                const img = new Image();
                img.src = image.default[type][imageSize];
                img.onload = async () => {
                    fetching_array.push(img)

                    i += 1;
                    let callback = await fetchImages(type)
                }
            })
        } else { setIsFetch(true); array(fetching_array); }
    })

    useEffect(() => {
        canUseAvif().then((support_avif: any) => {
            if (support_avif) fetchImages('avif');
                else if (canUseWebP()) fetchImages('webp')
                    else fetchImages('default')
        })
    }, [])
}

export const RenderCanvas = () => {

    return {}
}
