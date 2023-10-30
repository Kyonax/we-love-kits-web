import { useLoadImage } from'./effects';
import './component.css';

interface LoadImageProps { alt: string, w: number, h: number, instantLoad: boolean, image: any }

const LoadImage: React.FC<LoadImageProps> = ({ alt, w, h, instantLoad, image }) => {
    const vw_sizes = { "sm": 365, "md": 768, "xl": 1024, "yl": 1200 };
    const load_image_listener = useLoadImage();

    return (
        <div className={instantLoad ? `` : `blur-load`} style={instantLoad ? { width: `${w}px`, height: `${h}px` } : { backgroundImage: `url(${image.webp.lower}), url(${image.default.lower})`, width: `${w}px`, height: `${h}px`, backgroundSize: `${w}px ${h}px`}}>

            <picture>
              <source
                type="image/avif"
                srcSet={`${image.avif[vw_sizes.sm]} ${vw_sizes.sm}w,
                ${image.avif[vw_sizes.md]} ${vw_sizes.md}w,
                ${image.avif[vw_sizes.xl]} ${vw_sizes.xl}w,
                ${image.avif[vw_sizes.yl]} ${vw_sizes.yl}w`}
                />
              <source
                type="image/webp"
                srcSet={`${image.webp[vw_sizes.sm]} ${vw_sizes.sm}w,
                ${image.webp[vw_sizes.md]} ${vw_sizes.md}w,
                ${image.webp[vw_sizes.xl]} ${vw_sizes.xl}w,
                ${image.webp[vw_sizes.yl]} ${vw_sizes.yl}w`}
                />
              <img
                src={image.default.image}
                alt={alt}
                width={w}
                height={h}
                sizes={`(max-width: ${vw_sizes.sm}) ${vw_sizes.sm}px,
                (max-width: ${vw_sizes.md}) ${vw_sizes.md}px,
                (max-width: ${vw_sizes.xl}) ${vw_sizes.xl}px,
                ${vw_sizes.yl}px`}
                srcSet={`${image.default[vw_sizes.sm]} ${vw_sizes.sm}w,
                ${image.default[vw_sizes.md]} ${vw_sizes.md}w,
                ${image.default[vw_sizes.xl]} ${vw_sizes.xl}w,
                ${image.default[vw_sizes.yl]} ${vw_sizes.yl}w`}
                loading={instantLoad ? 'eager' : 'lazy'}
                decoding="async"
              />
            </picture>

        </div>
    )
}

export default LoadImage
