import { makePersisted } from '@solid-primitives/storage';
import { createStore } from 'solid-js/store';

export const infoStore = makePersisted(
  createStore({
    size: {
      width: 800,
      height: 200,
    },
    icon: '',
  }),
  {
    name: 'infoData',
  },
);
