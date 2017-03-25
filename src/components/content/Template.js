/**
 * Template for displaying our content...brings in all necessary tools and organizes them on page.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';
import Available from '../tools/available/Container';
import Board from '../tools/board/Container';
import Chat from '../tools/chat/Container';
import Queue from '../tools/queue/Container';
import Rosters from '../tools/rosters/Container';

export default function ContentTemplate() {
  return (
    <div className="content-container">
      <div className="middle-container">
        <div className="column-left">
          <Board />
        </div>
        <div className="column-right">
          <Chat />
        </div>
      </div>
      <div className="bottom-container">
        <div className="column-third">
          <Available />
        </div>
        <div className="column-third">
          <Queue />
        </div>
        <div className="column-third">
          <Rosters />
        </div>
      </div>
    </div>
  );
}
