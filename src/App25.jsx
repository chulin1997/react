import React, { Component, createRef } from 'react'

class App25 extends Component {
  constructor(props) {
    super(props)
    // 1.创建需要使用的ref对象，需要使用 createRef()
    this.userName = createRef()
  }
  state = {
    userName: '李四',
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            defaultValue={this.state.userName}
            ref={this.userName}
          />
        </div>
        <div>
          <button onClick={this.onSave.bind(this)}>提交</button>
        </div>
      </div>
    )
  }
  onSave() {
    console.log(this.userName.current.value)
    this.setState(state => {
      return {
        userName: this.userName.current.value
      }
    })
  }
}

export default App25
