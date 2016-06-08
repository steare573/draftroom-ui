import React from 'react';
import { connect } from 'react-redux';
import registerEvents from '../lib/registerEvents';

class SocketInitializer extends React.Component {

  constructor(props) {
    super(props);
    registerEvents(props, props.dispatch);
  }

  render() {
    return <div className="socket-initializer" style={{ display: 'none' }}></div>;
  }
}

SocketInitializer.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect(state => state)(SocketInitializer);
