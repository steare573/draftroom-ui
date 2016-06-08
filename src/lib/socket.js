// todo...build offline event caching
import Primus from '../../vendor/primus';

class Socket {
  constructor() {
    this.socket = new Primus('http://localhost:4000');
  }

  on(event, handler) {
    this.socket.on(event, handler);
  }

  send(event, data, callback) {
    const cb = callback || function noop() {};
    this.socket.send(event, data, cb);
  }
}

export default new Socket();
