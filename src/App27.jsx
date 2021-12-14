import React, { Component, createRef } from 'react'

class App27 extends Component {
  state = {
    message: '中方对蓬佩奥制裁',
  }
  render() {
    return <div>这是子组件
      message 中的值是： {this.state.message}
    </div>
  }

  getMsg(msg) {
    console.log(msg);
    this.setState(state => {
      return {
        message: msg 
      }
    })
  }
}

export default App27
