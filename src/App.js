import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import store from './store';
import './App.css';
import Header from './components/header';
import MainQuiz from './components/mainQuiz';

const persistor = persistStore(store)

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <div className="App">
      <Header />
      <MainQuiz />
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
