import React from 'react';
import { ipcRenderer } from 'electron';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    ipcRenderer.on('SEND_COUNT', (_e, count) => {
      this.setState({ count });
    });
  }

  componentWillUnmount() {
    ipcRenderer.removeAllListener();
  }

  render() {
    return (
      <h1>Count: <span id="count">{this.state.count}</span></h1>
    );
  }
}
