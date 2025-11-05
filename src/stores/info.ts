import { makePersisted } from '@solid-primitives/storage';
import { createStore } from 'solid-js/store';

export const infoStore = makePersisted(
  createStore({
    size: {
      width: 0,
      height: 0,
    },
    icon: '',
  }),
  {
    name: 'infoData',
  },
);
