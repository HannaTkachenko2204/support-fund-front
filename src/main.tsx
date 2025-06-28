import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App.js';
import 'normalize.css';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
