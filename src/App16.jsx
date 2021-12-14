import React, { Component } from 'react'

import Child from './App17'

class App16 extends Component {
  render() {
    return (
      <div>
        这是父组件
        <Child name="zhangsna"></Child>
      </div>
    )
  }
}

export default App16
