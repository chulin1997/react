// 用于显示计数器的案例

import React, { Component } from 'react';

import store from './store/index'

import * as actions from './store/Actions/counter'

import * as types from './store/Types/type'

class App35 extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(() => store.getState())
    })
  }
  render() {
    return (
      <div>
        <div>Redux中的数据是：{this.state.counter.count}</div>
        <div>
          <button onClick={this.handler.bind(this)}>点击+9</button>
        </div>
        <div>
          <button onClick={this.handler2.bind(this)}>点击-10</button>
        </div>
      </div>
    );
  }
  handler() {
    // const action = {
    //   type: 'add',
    //   payload: 9
    // }
    // store.dispatch(action)
    store.dispatch(actions.createAddAction(types.ADD, 9))
  }

  handler2() {
    // const action2 = {
    //   type: 'del',
    //   payload: 10
    // }
    // store.dispatch(action2)
    store.dispatch(actions.createDelAction(types.DEL, 10))
  }
}

export default App35;
