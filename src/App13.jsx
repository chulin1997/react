import React, { Component } from 'react'

class App13 extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <div>
        状态的修改
        <button onClick={this.clickHandler.bind(this)}>修改</button>
      </div>
    )
  }
  clickHandler(){
    // 对象形式
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })

    // 函数形式
    this.setState(state=>{
      return {
        count: state.count + 1
      }
    })
    this.setState(state=>{
      return {
        count: state.count + 1
      }
    })
    this.setState(state=>{
      return {
        count: state.count + 1
      }
    })
    this.setState(state=>{
      return {
        count: state.count + 1
      }
    })
    this.setState(state=>{
      return {
        count: state.count + 1
      }
    })
    this.setState(state=>{
      return {
        count: state.count + 1
      }
    })
  }
}
export default App13
