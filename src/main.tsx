import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './App.tsx';
import { persistor, store } from './store';
import '@vkontakte/vkui/dist/vkui.css';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider>
          <AdaptivityProvider>
            <App />
          </AdaptivityProvider>
        </ConfigProvider>
        ,
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
