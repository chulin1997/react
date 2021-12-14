import React, { Component } from 'react'

class App10 extends Component {
  render() {
    // 方式1：bind方法
    // return (
    //   <button onClick={this.clickHandler.bind(this, '张三', '李四', '王五')}>
    //     点我
    //   </button>
    // )

    return (
      <button onClick={(e) => this.clickHandler('张三', '李四', '王五', e)}>
        点我
      </button>
    )
  }

  clickHandler(a, b, c, d) {
    console.log(123)
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(this)
  }
}

export default App10
