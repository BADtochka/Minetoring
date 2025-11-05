import { CONFIG } from '@/config/config';
import { infoStore } from '@/stores/info';
import type { OfflineServer, OnlineServer } from '@/types/MCSRVStat';
import { createEffect, createSignal, onCleanup, Show, type Component } from 'solid-js';
import { Motion } from 'solid-motionone';
import { Chip } from './chip';
import { Image } from './image';
import { Status } from './status';
import { Tooltip } from './tooltip';

type InfoProps = {
  data: OnlineServer | OfflineServer;
};

export const Info: Component<InfoProps> = (props) => {
  let infoRef!: HTMLDivElement;
  const [copied, setCopied] = createSignal(false);
  const [animationEnded, setAnimationEnded] = createSignal(false);
  const data = () => props.data as OnlineServer;
  const [storeData, setData] = infoStore;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONFIG.overrides?.ip ?? data().hostname);
    setCopied(true);
  };

  createEffect(() => {
    document.head.querySelector('link[rel="icon"]')?.setAttribute('href', storeData.icon);
  });

  createEffect(() => {
    if (!copied()) return;
    const timeoutId = setTimeout(() => {
      setCopied(false);
    }, 2000);

    onCleanup(() => clearTimeout(timeoutId));
  });

  createEffect(() => {
    if (!animationEnded()) return;
    setData({ size: { width: infoRef.clientWidth, height: infoRef.clientHeight } });
  });

  createEffect(() => {
    if (!data()) return;
    const timeoutId = setTimeout(() => {
      setAnimationEnded(true);
      setData({ icon: data().icon ?? 'server.svg' });
    }, 2100);
    onCleanup(() => clearTimeout(timeoutId));
  });

  if (!data()) return null;

  return (
    <Motion.div
      ref={infoRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      class='mx-10 flex w-[70%] max-w-[800px] flex-col gap-12 rounded-2xl bg-[#191A18]/80 p-6'
    >
      <div class='flex gap-4'>
        <Image src={data().icon ?? 'server.svg'} class='size-16 rounded-lg' />
        <div class='flex flex-col gap-2'>
          <div class='flex items-center gap-4'>
            <h1 class='text-2xl font-bold'>{CONFIG.overrides?.name ?? data().motd.clean}</h1>
            <Show when={CONFIG.onlineChip || CONFIG.offlineChip}>
              <Status online={data().online} />
            </Show>
          </div>
          <Show when={!!CONFIG.description}>
            <p class='max-w-[800px] text-lg'>{CONFIG.description}</p>
          </Show>
        </div>
      </div>
      <div class='flex flex-wrap items-center justify-between gap-4 max-md:justify-center'>
        <div class='flex gap-2'>
          <Show when={data() && data().online}>
            <Chip icon='Users'>{`${CONFIG.overrides?.online ?? data().players.online} / ${data().players.max}`}</Chip>
          </Show>
          <Chip icon='Version'>{CONFIG.overrides?.version ?? data().protocol.name}</Chip>
          <Tooltip text='Скопировано' show={copied()}>
            <Chip icon='Plug' class='cursor-copy' onClick={copyToClipboard}>
              {CONFIG.overrides?.ip ?? data().hostname}
            </Chip>
          </Tooltip>
        </div>
        <div class='flex gap-2'>
          {CONFIG.links?.map((link) => (
            <a href={link.url} target='_blank'>
              <Chip icon={link.icon} class='cursor-pointer'>
                {link.name}
              </Chip>
            </a>
          ))}
        </div>
      </div>
    </Motion.div>
  );
};
