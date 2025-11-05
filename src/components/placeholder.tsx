import { cn } from '@/utils/cn';
import { parseJson } from '@/utils/parseJson';
import { type Component } from 'solid-js';
import { Motion } from 'solid-motionone';

type PlaceholderProps = {
  size: string | null;
  error?: boolean;
};

export const Placeholder: Component<PlaceholderProps> = (props) => {
  const size = () => parseJson<{ width: number; height: number }>(props.size);
  const error = () => props.error;

  return (
    <Motion.div
      style={{
        width: `${size().width}px`,
        height: `${size().height}px`,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      class={cn(
        `mx-10 flex h-36 w-[70%] max-w-[800px] flex-col items-center justify-center gap-12 rounded-2xl border border-transparent
        bg-[#191A18]/80 p-6 text-white/50`,
        {
          'border-red-600 text-red-700': error(),
        },
      )}
    >
      {error() ? 'Error' : 'Loading'}
    </Motion.div>
  );
};
