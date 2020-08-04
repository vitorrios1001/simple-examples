import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import PageTrelo from './pages/Trello'

import { ThemeProvider } from './contexts/themeContext';

import Layout from './Layout';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Layout>
        <PageTrelo />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
