import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from 'redux/contacts/contacts-slice';
import filterReducer from 'redux/filter/filter-slice';
import authReducer from 'redux/auth/auth-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
