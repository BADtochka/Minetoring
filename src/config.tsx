import type { Config } from './types/Config';

export const CONFIG: Config = {
  ip: 'mine.server.com',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sequi.',
  onlineChip: 'Online',
  offlineChip: 'Offline',
  overrides: {
    ip: '127.0.0.1',
    name: 'Minecraft Server',
    online: 10,
    version: '1.21.X',
  },
  links: [
    {
      name: 'Github',
      url: 'https://github.com/BADtochka/minetoring',
    },
  ],
};
