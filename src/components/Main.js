/**
 * Entry point component for our app.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';
import HeaderBar from './headerbar/Container';
import Content from './content/Container';
import FooterBar from './footerbar/Container';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SocketInitializer from './SocketInitializer';

export default function Main() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <SocketInitializer />
        <HeaderBar />
        <Content />
        <FooterBar />
      </div>
    </Provider>
  );
}
