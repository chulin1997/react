import React, { Component } from 'react'

class App21 extends Component {
  state = {
    num: 0,
    name: 'zhangsan',
    age: 18,
  }
  render() {
    return <div>子组件</div>
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);   // props对象
    console.log(prevState);   // state对象
    if (nextProps.newNum === prevState.num) {
      return null
    } else {
      return {
        num: nextProps.newNum
      }
    }
  }

  componentDidMount() {
    console.log('组件挂载完毕')
  }
}

export default App21
