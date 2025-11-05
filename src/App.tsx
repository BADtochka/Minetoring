import axios from 'axios';
import { createEffect, createSignal } from 'solid-js';
import { Presence } from 'solid-motionone';
import { Background } from './components/background';
import { Info } from './components/info';
import { Placeholder } from './components/placeholder';
import { CONFIG } from './config/config';
import './index.css';
import { infoStore } from './stores/info';
import { type OfflineServer, type OnlineServer } from './types/MCSRVStat';
import { tryCatch } from './utils/tryCatch';

function App() {
  const [data, setData] = createSignal<OnlineServer | OfflineServer | null>(null);
  const [loaded, setLoaded] = createSignal(false);
  const [error, setError] = createSignal(false);
  const [storeData] = infoStore;

  const fetchInfo = async () => {
    const { data } = await tryCatch(axios<OnlineServer>(`https://api.mcsrvstat.us/3/${CONFIG.ip}`));

    if (data) {
      setData(data.data);
      setLoaded(true);
      return;
    }

    setError(true);
  };

  createEffect(() => fetchInfo());

  return (
    <div class='flex h-screen items-center justify-center'>
      <Presence exitBeforeEnter>{data() ? <Info data={data()!} /> : <Placeholder error={error()} />}</Presence>
      <Background loaded={loaded()} />
    </div>
  );
}

export default App;
