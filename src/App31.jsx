// 跨组件通信
import React, { Component } from 'react'

import Child from './App32'

// 导入context
import context from './Context'
// 产生提供者
let { Provider } = context

class App31 extends Component {
  state = {
    msg: '西藏冒险王疑似被害视频曝光',
  }
  render() {
    return (
      <div>
        父组件
        <Provider value={this.state}>
          <Child></Child>
        </Provider>
      </div>
    )
  }
}

export default App31
