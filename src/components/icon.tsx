import type { Component, JSX } from 'solid-js';

export type IconName = keyof typeof icons;
interface IconProps extends Omit<JSX.SvgSVGAttributes<SVGSVGElement>, 'src'> {
  name: IconName;
}

export const icons = {
  Users: (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
      <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
      <path d='M21 21v-2a4 4 0 0 0 -3 -3.85' />
    </svg>
  ),
  Version: (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2' />
      <path d='M12 12l0 4' />
    </svg>
  ),
  Plug: (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z' />
      <path d='M4 20l3.5 -3.5' />
      <path d='M15 4l-3.5 3.5' />
      <path d='M20 9l-3.5 3.5' />
    </svg>
  ),
  Circle: (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z' />
    </svg>
  ),
  Web: (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      {...props}
    >
      <circle cx='12' cy='12' r='10' />
      <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
      <path d='M2 12h20' />
    </svg>
  ),
};

export const Icon: Component<IconProps> = ({ name, ...props }) => {
  const IconElement = {
    render: icons[name],
  };

  return <IconElement.render {...props} />;
};
