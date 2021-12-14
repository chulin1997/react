import React, { Component } from 'react'

class App23 extends Component {
  state = {
    msg: 'hello world',
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.msg} readOnly />
      </div>
    )
  }
}

export default App23
