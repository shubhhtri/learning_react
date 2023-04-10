import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteApp from './RouteApp';
import { Provider } from 'react-redux';
import store from './store/store';


function RouteMain() {
  return (
    <>
        <BrowserRouter>
        <Provider store={store}>
            <RouteApp />
        </Provider>
        </BrowserRouter>
    </>
  )
}

export default RouteMain