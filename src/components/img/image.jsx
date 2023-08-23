export const Image = ({ src, height, width, alt, className }) => {
    return (
        <img className={className} src={src} height={height} width={width} alt={alt} />
    )
}