import type { IconName } from '@/components/icon';

type ApiOverrides = {
  ip?: string;
  version?: string;
  online?: number;
  name?: string;
};

type Link = {
  name: string;
  url: string;
  icon: IconName;
};

export type Config = {
  ip: string;
  overrides?: ApiOverrides;
  description?: string;
  links?: Link[];
  onlineChip?: string;
  offlineChip?: string;
};
