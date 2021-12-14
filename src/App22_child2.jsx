import React, { Component, PureComponent } from 'react'

class App21_child2 extends PureComponent {
  render() {
    console.log('走了child2的渲染生命周期')
    return <div>父组件传递的值是{this.props.c2}</div>
  }

  // 决定是否渲染
  // true - 渲染， false - 不渲染
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(nextProps);
  //   // console.log(nextState);
  //   if (nextProps.c2 === this.props.c2) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }
}

export default App21_child2
