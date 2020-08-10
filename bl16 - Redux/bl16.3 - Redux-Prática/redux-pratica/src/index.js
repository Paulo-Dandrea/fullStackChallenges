import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import { rootReducer } from './reducers/Index'
import App from './App'

const store = createStore(rootReducer, devToolsEnhancer(),)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)