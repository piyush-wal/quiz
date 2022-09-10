import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['quiz']
  }
const persistedReducer = persistReducer(persistConfig, reducers);

// export () => {
    const store = createStore(persistedReducer, devToolsEnhancer());
    // return 
// }

export default store;