import React, { Component } from 'react'

import context from './Context'
let { Consumer } = context

class App32 extends Component {
  // 消费方式1
  render() {
    console.log(this.context)
    return (
      <div>
        子组件
        {/* <Consumer>{value => console.log(value)}</Consumer> */}
      </div>
    )
  }

  // 消费方式2
  static contextType = context
}

export default App32
