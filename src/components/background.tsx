import { Image } from './image';

export const Background = () => {
  return (
    <div class='-z-10 opacity-50'>
      <Image src='background.png' class='absolute top-0 left-0 h-full w-full object-cover' />
    </div>
  );
};
