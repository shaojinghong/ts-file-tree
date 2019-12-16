import { hot } from 'react-hot-loader/root';
import React from 'react';
import 'antd/dist/antd.css';

import Hello from "./modules/Hello";
import './scss/main.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Hello />
    );
  }
}

export default hot(App);
