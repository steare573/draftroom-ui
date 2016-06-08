/**
 * Chat Tool Container component connecting to redux & supplying dependencies to chat template.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';
import ChatTemplate from './Template';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chatSetPendingMessage as setPendingMessage } from '../../../redux/action/ui';
import { chatSendMessage } from '../../../redux/action/draft';
import { getTeamByUserId } from '../../../util';

function ChatContainer(props) {
  return (
    <ChatTemplate
      {...props}
      updatePendingMessage={props.setPendingMessage}
      sendMessage={(msg) => {
        const team = getTeamByUserId(props.teams, props.user.id);
        props.chatSendMessage(team.id, msg);
      }}
      messages={props.messages}
      teams={props.teams}
    />
  );
}

ChatContainer.propTypes = {
  setPendingMessage: React.PropTypes.func,
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

export default connect(
  state => (
    {
      pendingMessage: state.ui.chat.pendingMessage,
      messages: state.draft.chat,
      user: state.user,
      teams: state.league.teams,
    }
  ),
  dispatch => bindActionCreators({ setPendingMessage, chatSendMessage }, dispatch)
)(ChatContainer);
