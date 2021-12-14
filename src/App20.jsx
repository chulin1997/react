import React, { Component } from 'react'

import Child from './App21'

class App20 extends Component {
  render() {
    return (
      <div>
        父组件
        <Child newNum={21}></Child>
      </div>
    )
  }
}

export default App20
