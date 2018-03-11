import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import calcReducer from './reducers/calcReducer'
import Calc from './containers/Calc'

const store = createStore(calcReducer);

render(
    <Provider store={store}>
      <Calc />
    </Provider>, 
    document.getElementById('root')
)
