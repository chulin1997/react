import React, { Component } from 'react'

class App6 extends Component {
  render() {
    return (
      <div>
        这是子组件
        <p>海纳百川有容乃大，{this.props.next}----{this.props.name}</p>
      </div>
    )
  }
}

export default App6
