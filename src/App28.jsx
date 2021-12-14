import React, { Component } from 'react'

class App28 extends Component {
  state = {
    hobby: [
      { content: '吃饭', id: 1 },
      { content: '睡觉', id: 2 },
      { content: '打豆豆', id: 3 },
    ],
    check: [3, 1],
  }
  render() {
    return (
      <div>
        <span>爱好</span>
        {this.state.hobby.map((item, index) => {
          return (
            <label key={index}>
              <input
                type="checkbox"
                checked={this.state.check.includes(item.id)}
                onChange={this.handler.bind(this, item.id)}
              />
              {item.content}
            </label>
          )
        })}
      </div>
    )
  }
  handler(key, e) {
    console.log(key);
    if (this.state.check.includes(key)) {
      this.setState(state => {
        state.check.splice(state.check.indexOf(key), 1)
        return state
      })
    } else {
      this.setState(state => {
        state.check.push(key)
        return state
      })
    }
    this.setState()
  }
}

export default App28
