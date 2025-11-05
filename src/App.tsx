import axios from 'axios';
import { createEffect, createSignal } from 'solid-js';
import { Background } from './components/background';
import { Info } from './components/info';
import { Placeholder } from './components/placeholder';
import { CONFIG } from './config/config';
import './index.css';
import { type OfflineServer, type OnlineServer } from './types/MCSRVStat';
import { tryCatch } from './utils/tryCatch';

function App() {
  let infoRef!: HTMLDivElement;
  const [data, setData] = createSignal<OnlineServer | OfflineServer | null>(null);
  const [error, setError] = createSignal(false);

  const fetchInfo = async () => {
    const { data } = await tryCatch(axios<OnlineServer>(`https://api.mcsrvstat.us/3/${CONFIG.ip}`));

    if (data) {
      setData(data.data);
      return;
    }

    setError(true);
  };

  createEffect(() => fetchInfo());

  createEffect(() => {
    if (!data()) return;
    localStorage.setItem('size', JSON.stringify({ width: infoRef.clientWidth, height: infoRef.clientHeight }));
  });

  return (
    <div class='flex h-screen items-center justify-center'>
      {data() ? (
        <Info ref={infoRef} data={data()!} />
      ) : (
        <Placeholder error={error()} size={localStorage.getItem('size')} />
      )}
      <Background />
    </div>
  );
}

export default App;
