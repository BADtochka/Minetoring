import type { Component } from 'solid-js';
import { Image } from './image';

type BackgroundProps = {
  loaded?: boolean;
};

export const Background: Component<BackgroundProps> = (props) => {
  const loaded = () => props.loaded;

  return (
    <div
      class='absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-center opacity-50 transition-all delay-300
        duration-700 ease-in-out'
      classList={{ 'blur-sm': loaded() }}
    >
      <Image src='background.png' class='size-full object-cover' />
    </div>
  );
};
