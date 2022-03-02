/**
 * @module Main
 */

import React from 'react';
import ReactDOM from 'react-dom'

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import * as serviceWorker from './serviceWorker';

import App from './containers/App';
import theme from './theme';

export const muiCache = createCache({
  "key": "mui",
  "prepend": true
});

ReactDOM.render(
  <CacheProvider value={muiCache}>
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </ThemeProvider>
  </CacheProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/App');
}

serviceWorker.unregister();
