import { CONFIG } from '@/config';
import { cn } from '@/utils/cn';
import type { Component } from 'solid-js';
import type { JSX } from 'solid-js/h/jsx-runtime';
import { Chip } from './chip';

interface StatusProps extends JSX.HTMLAttributes<HTMLDivElement> {
  online: boolean;
}

export const Status: Component<StatusProps> = ({ online }) => {
  return (
    <Chip
      icon='Circle'
      iconSize='10px'
      class={cn('gap-2 px-4 text-sm', {
        'text-green-600': online,
        'text-red-600': !online,
      })}
    >
      {online ? CONFIG.onlineChip : CONFIG.offlineChip}
    </Chip>
  );
};
