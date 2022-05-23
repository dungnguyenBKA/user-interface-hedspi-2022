import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./store/store";
import {sleep} from "./utils/utils";
import Splash from "./pages/Splash/Splash";
import App from "./App";

// app font
import "./fonts/bold.ttf"
import "./fonts/semiBold.ttf"
import "./fonts/regular.ttf"
import "./fonts/medium.ttf"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        onBeforeLift={async () => {
          await sleep(2000)
        }}
        loading={<Splash/>}
        persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>

  </React.StrictMode>
);
