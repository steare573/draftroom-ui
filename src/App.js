/**
 * Bootstrap for for rendering the entire app on the page.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */
import React from 'react';
import Main from './components/Main';
import ReactDom from 'react-dom';

ReactDom.render(<Main />, document.getElementById('app-container'));
