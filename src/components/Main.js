/**
 * Entry point component for our app.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';
import HeaderBar from './headerbar/Container';
import Content from './content/Container';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default class Main extends React.Component {
  constructor() {
    super();
    // this is temporary so that we can structure out our data
    // initially.  Will be moved to redux
    this.state = {
      ui: {},
      players: [
        {
          id: '1',
          firstName: 'Adrian',
          lastName: 'Peterson',
          position: 'RB',
        },
        {
          id: '2',
          firstName: 'Aaron',
          lastName: 'Rodgers',
          position: 'QB',
        },
      ],
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div className="app-container">
          <HeaderBar />
          <Content />
        </div>
      </Provider>
    );
  }
}
