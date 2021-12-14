import React, { Component } from 'react'

import Child1 from './App22_child1'
import Child2 from './App22_child2'

class App22 extends Component {
  state = {
    c1: 0,
    c2: 0,
  }
  render() {
    return (
      <div>
        <Child1 c1={this.state.c1}></Child1>
        <button onClick={this.handler1.bind(this)}>给c1+1</button>
        <hr />
        <Child2 c2={this.state.c2}></Child2>
        <button onClick={this.handler2.bind(this)}>给c2+1</button>
      </div>
    )
  }
  handler1() {
    this.setState(state => {
      return {
        c1: state.c1 + 1
      }
    })
  }
  handler2() {
    this.setState(state => {
      return {
        c2: state.c2 + 1
      }
    })
  }
}

export default App22
