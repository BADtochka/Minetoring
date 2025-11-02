import { cn } from '@/utils/cn';
import { type JSX, type ParentComponent } from 'solid-js';
import { Icon, type IconName } from './icon';

interface ChipProps extends JSX.HTMLAttributes<HTMLDivElement> {
  icon?: IconName;
  iconSize?: string;
}

export const Chip: ParentComponent<ChipProps> = (props) => {
  const children = () => props.children;
  const icon = () => props.icon;
  const iconSize = () => props.iconSize;
  const classNames = () => props.class;

  return (
    <div
      {...props}
      class={cn(
        'flex cursor-default items-center gap-1 rounded-lg bg-[#3a3d38] px-3.5 py-2',
        {
          'p-2': !children(),
        },
        classNames(),
      )}
    >
      {!!icon() && <Icon name={icon()!} style={{ width: iconSize() }} />}
      {children()}
    </div>
  );
};
