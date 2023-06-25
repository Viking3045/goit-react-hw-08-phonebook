import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import 'modern-normalize';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
