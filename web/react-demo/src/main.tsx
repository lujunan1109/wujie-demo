import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


interface WindowWithWujie extends Window {
  __POWERED_BY_WUJIE__?: boolean;
  __WUJIE_MOUNT?: () => void;
  __WUJIE_UNMOUNT?: () => void;
  $wujie?: {
    bus: () => void;
  }
}

declare const window: WindowWithWujie;

// 生命周期改造
let root: ReactDOM.Root | null = null;
if (window.__POWERED_BY_WUJIE__) {
  window.__WUJIE_MOUNT = () => {
    root = ReactDOM.createRoot(document.getElementById('root')!);
     root.render(
      <React.StrictMode>
         <App />
      </React.StrictMode>,
     );
  };
  window.__WUJIE_UNMOUNT = () => {
    console.log('销毁reactDOM');
    root!.unmount()
  };
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
