import 'react-loading-skeleton/dist/skeleton.css';

import { initApp } from './app/initApp';
import './styles.css';
import './globals.css';

declare global {
  interface Window {
    gtag: any;
  }
}

initApp();
