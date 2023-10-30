export default function useImageLoad( alt: string, load: boolean, src: string, type: string ) {

    const vw_sizes = { "sm": 365, "md": 768, "xl": 1024, "yl": 1200 };
    let src_name = src.replace(type, '');


    return (
        <>

            <picture>
              <source
                type="image/avif"
                srcSet={`${src_name}_${vw_sizes.sm}.avif ${vw_sizes.sm}w,
                ${src_name}_${vw_sizes.md}.avif ${vw_sizes.md}w,
                ${src_name}_${vw_sizes.xl}.avif ${vw_sizes.xl}w,
                ${src_name}_${vw_sizes.yl}.avif ${vw_sizes.yl}w`}
                />
              <source
                type="image/webp"
                srcSet={`${src_name}_${vw_sizes.sm}.webp ${vw_sizes.sm}w,
                ${src_name}_${vw_sizes.md}.webp ${vw_sizes.md}w,
                ${src_name}_${vw_sizes.xl}.webp ${vw_sizes.xl}w,
                ${src_name}_${vw_sizes.yl}.webp ${vw_sizes.yl}w`}
                />
              <img
                src={src}
                alt={alt}
                sizes={`(max-width: ${vw_sizes.sm}) ${vw_sizes.sm}px,
                (max-width: ${vw_sizes.md}) ${vw_sizes.md}px,
                (max-width: ${vw_sizes.xl}) ${vw_sizes.xl}px,
                ${vw_sizes.yl}px`}
                srcSet={`${src_name}_${vw_sizes.sm}${type} ${vw_sizes.sm}w,
                ${src_name}_${vw_sizes.md}${type} ${vw_sizes.md}w,
                ${src_name}_${vw_sizes.xl}${type} ${vw_sizes.xl}w,
                ${src_name}_${vw_sizes.yl}${type} ${vw_sizes.yl}w`}
                loading={load ? 'eager' : 'lazy'}
                decoding="async"
              />
            </picture>

        </>
    )
}
