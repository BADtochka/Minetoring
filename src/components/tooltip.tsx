import { createEffect, createSignal, type ParentComponent } from 'solid-js';
import { Motion } from 'solid-motionone';

type TooltipProps = {
  text: string;
  show?: boolean;
};

export const Tooltip: ParentComponent<TooltipProps> = (props) => {
  const children = () => props.children;
  const text = () => props.text;
  const show = () => props.show;
  const [active, setActive] = createSignal(show());

  createEffect(() => setActive(show()));

  return (
    <>
      <div
        class='relative'
        onPointerEnter={() => typeof show() === 'undefined' && setActive(true)}
        onPointerLeave={() => typeof show() === 'undefined' && setActive(false)}
      >
        <Motion.div
          initial={false}
          animate={{
            opacity: active() ? 1 : 0,
          }}
          class='absolute -top-[calc(100%+8px)] left-1/2 -translate-x-1/2 rounded-lg bg-[#363935] px-3.5 py-2 whitespace-nowrap'
        >
          {text()}
        </Motion.div>
        {children()}
      </div>
    </>
  );
};
