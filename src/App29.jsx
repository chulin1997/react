import React, { Component } from 'react'

import Child from './App30'

class App29 extends Component {
  constructor(props) {
    super(props)
    this.getMsgFromParent = this.getMsgFromParent.bind(this)
    this.setMsgToParent = this.setMsgToParent.bind(this)
  }
  state = {
    msg: '黑龙江省新增45例 88例无症状'
  }
  render() {
    return (
      <div>
        父组件
        {/* 将父的方法以属性的形式传递给子组件 */}
        <Child fnGet={this.getMsgFromParent} fnSet={this.setMsgToParent}></Child>
      </div>
    )
  }

  // 获取当前父组件的数据
  getMsgFromParent() {
    return this.state.msg
  }

  // 设置当前父组件的数据
  setMsgToParent(msg) {
    this.setState(state => {
      return {
        msg: msg
      }
    })
  }
}

export default App29
