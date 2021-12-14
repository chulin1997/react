import React, { Component, createRef } from 'react'

import Child from './App27'

class App26 extends Component {
  constructor(props) {
    super(props)
    this.child = createRef()
  }
  state = {
    msg: '31省确诊100例',
  }
  render() {
    return (
      <div>
        这是父组件
        <Child ref={this.child}></Child>
        <button onClick={this.clickHandler.bind(this)}>点我</button>
      </div>
    )
  }
  clickHandler() {
    console.log(this.child);  // 子组件的实例对象
    console.log(this.child.current.state.message);
    this.child.current.getMsg(this.state.msg)
  }
}

export default App26
