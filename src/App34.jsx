import React, { Component } from 'react';

import HOC from './hoc/coptright'

class App34 extends Component {
  render() {
    return (
      <div>
        待加工处理的原始组件
      </div>
    );
  }
}

export default HOC(App34);
