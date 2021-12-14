import React, { Component, PureComponent } from 'react'

class App21_child1 extends PureComponent {
  render() {
    console.log('走了child1的渲染生命周期')
    return (
      <div>
        父组件传递的值是{this.props.c1}
      </div>
    )
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextProps.c1 === this.props.c1) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }
}

export default App21_child1
