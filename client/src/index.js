import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import Bugsnag from '@bugsnag/js';
// import bugsnagReact from '@bugsnag/plugin-react'
import BugsnagPluginReact from '@bugsnag/plugin-react';
import BugsnagPerformance from '@bugsnag/browser-performance';

// api key is from bugsnag - settings cog, project settings, SDK API key - it goes below
Bugsnag.start({
  apiKey: 'd62ea4c7c3ce8b5c74423a9dd8bda4b6',
  plugins: [new BugsnagPluginReact()]
})
BugsnagPerformance.start({ apiKey: 'd62ea4c7c3ce8b5c74423a9dd8bda4b6' })

// then from the project:
// My account, Personal auth tokens, generate new token, name, generate, copy
// ClickUp, bugsnag, bs to cu, name account, paste api token, copy webhook url
// BugSnag, projets, click project, data forwarding, webhook, paste webhook url
// notify me when - every time an error occurs

// create a new project for setup instructions 

const ErrorBoundary = Bugsnag.getPlugin('react')
  .createErrorBoundary(React)

  Bugsnag.notify(new Error('Test error'))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
