import React, { Component } from 'react'

import Child from './App15'

class App14 extends Component {
  render() {
    return (
      <div>
        父组件
        <Child>
          <div>滥用欲望，必然损人贵气。</div>
          <div>它会摧毁一个人的精气神</div>
        </Child>
      </div>
    )
  }
}

export default App14
