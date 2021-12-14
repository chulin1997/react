import React, { Component } from 'react';

class App30 extends Component {
  state = {
    message: '拜登公布战役'
  }
  render() {
    return (
      <div>
        子组件
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.fnGet());
    this.props.fnSet(this.state.message)
  }
}

export default App30;
