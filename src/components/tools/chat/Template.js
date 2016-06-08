/**
 * Template for displaying our chat widget
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';
import { getTeamById } from '../../../util';

function ChatTemplate(props) {
  return (
    <div className="tool tool-chat">
      <div className="tool-title">
        Chat
      </div>
      <div className="tool-body">
        <div className="messages">
          {
            props.messages.map(
              (msgObj, index) => {
                const team = getTeamById(props.teams, msgObj.sender);
                return <div key={`message-id-${index}`}>{team.name} {msgObj.message}</div>;
              }
            )
          }
        </div>
        <div className="controls">
          <div>
            <textarea
              onChange={(e) => { props.updatePendingMessage(e.target.value); }}
              value={props.pendingMessage}
            />
          </div>
          <div>
            <button
              className="send-message"
              onClick={() => { props.sendMessage(props.pendingMessage); }}
            >
              Send
            </button>
            <button className="clear-message" onClick={() => { props.updatePendingMessage(''); }}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ChatTemplate.propTypes = {
  updatePendingMessage: React.PropTypes.func,
  chatSendMessage: React.PropTypes.func,
  messages: React.PropTypes.arrayOf(React.PropTypes.shape({
    message: React.PropTypes.string,
    sender: React.PropTypes.number,
  })),
  pendingMessage: React.PropTypes.string,
  user: React.PropTypes.shape({
    id: React.PropTypes.number,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
  }),
  teams: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  })),
};

export default ChatTemplate;
