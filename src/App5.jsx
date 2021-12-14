import React, { Component } from 'react'

import Child from './App6'

class App5 extends Component {
  render() {
    return (
      <div>
        这是父组件
        <Child next="壁立千仞无欲则刚" name="林则徐"></Child>
      </div>
    )
  }
}

export default App5
