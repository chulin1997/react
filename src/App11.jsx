import React, { Component } from 'react'

class App11 extends Component {
  constructor(props) {
    super(props)
    // 方法1写法2
    this.clickHandler2 = this.clickHandler2.bind(this)
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler1.bind(this)}>方式1写法1</button>
        <button onClick={this.clickHandler2}>方式1写法2</button>
        <button onClick={() => this.clickHandler3()}>方式2写法1</button>
        <button onClick={this.clickHandler4}>方式2写法1</button>
      </div>
    )
  }
  clickHandler1() {
    console.log(this)
  }
  clickHandler2() {
    console.log(this)
  }
  clickHandler3() {
    console.log(this)
  }
  clickHandler4 = () => {
    console.log(this)
  }
}

export default App11
