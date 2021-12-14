import React, { Component } from 'react'

class App12 extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   msg:"hello world"
    // }
  }
  state = {
    msg: 'hello react',
  }
  render() {
    return (
      <div>
        类组件的状态操作
        <div>状态中msg的值是{this.state.msg}</div>
        <button onClick={this.clickHandler.bind(this)}>给state复制</button>
      </div>
    )
  }
  clickHandler() {
    this.state.msg = 'hello kitty'
  }
}

export default App12
