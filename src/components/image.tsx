import { createSignal, type Component, type JSX } from 'solid-js';
import { Motion } from 'solid-motionone';

interface ImageProps extends JSX.ImgHTMLAttributes<HTMLImageElement> {}

export const Image: Component<ImageProps> = (props) => {
  const [isLoaded, setIsLoaded] = createSignal(false);
  const src = () => props.src;

  return (
    <Motion.img
      src={src()}
      fetchpriority='high'
      decoding='async'
      loading='lazy'
      onLoad={() => setIsLoaded(true)}
      alt={`${src()?.slice(0, 6)}... image`}
      initial={{ opacity: 0 }}
      animate={{ opacity: Number(isLoaded()) }}
      transition={{ duration: 1 }}
      {...props}
    />
  );
};
