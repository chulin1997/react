import React, { Component } from 'react'

class App15 extends Component {
  render() {
    console.log(this.props.children)
    return (
      <div>
        子组件 <div>接受到的children属性是：{this.props.children}</div>
      </div>
    )
  }
}

export default App15
