import { createEffect, createSignal } from 'solid-js';
import { Background } from './components/background';
import { Info } from './components/info';
import { CONFIG } from './config';
import './index.css';
import { type OfflineServer, type OnlineServer } from './types/MCSRVStat';

function App() {
  const [data, setData] = createSignal<OnlineServer | OfflineServer | null>(null);

  createEffect(async () => {
    const response = await fetch(`https://api.mcsrvstat.us/3/${CONFIG.ip}`);

    if (response.ok) {
      setData(await response.json());
    }
  });

  return (
    <div class='flex h-screen items-center justify-center'>
      {data() && <Info data={data()!} />}
      <Background />
    </div>
  );
}

export default App;
