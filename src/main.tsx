import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import { App } from './App.tsx';
import { store } from './store';
import '@vkontakte/vkui/dist/vkui.css';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        <AdaptivityProvider>
          <App />
        </AdaptivityProvider>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
);
