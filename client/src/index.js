import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'
import BugsnagPluginReact from '@bugsnag/plugin-react'

// Bugsnag.init('13e2a73539267efa439c55c579882e73')
// Bugsnag.use(bugsnagReact, React)
Bugsnag.start({
  apiKey: '13e2a73539267efa439c55c579882e73',
  plugins: [new BugsnagPluginReact()]
})


// const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary()

// const ErrorScreen = () =>
//   <div>
//     <h1><span role="img" aria-label="warning icon">⚠️</span> Error <span role="img" aria-label="warning icon">⚠️</span></h1>
//     <p><strong>Uh oh, there was an error in the component tree!</strong></p>
//     <p>This <code>FallbackComponent</code> prop can be used to show something useful to your users when such errors occur.</p>
//   </div>

// const onError = event => {
//   // You can also provide an onError callback to run just on errors caught by
//   // the error boundary. Maybe you want to attach some of the current state from
//   // whatever model/store you're using (e.g redux)
//   console.log('about to send this event', { event })
// }

const ErrorBoundary = Bugsnag.getPlugin('react')
  .createErrorBoundary(React)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorrBoundary>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ErrorrBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
