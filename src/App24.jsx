import React, { Component } from 'react'

class App24 extends Component {
  state = {
    userInfo: {
      userName: '张三',
      userAge: 18,
      userPhone: 15912345678,
      gender: '男',
    },
  }
  render() {
    const { userName, userAge, userPhone, gender } = this.state.userInfo
    return (
      <div>
        <div>
          <input type="text" name="userName" value={userName} onChange={this.handler.bind(this, 'userName')} />
        </div>
        <div>
          <input type="text" name="userAge" value={userAge} onChange={this.handler.bind(this, 'userAge')} />
        </div>
        <div>
          <input type="text" name="userPhone" value={userPhone} onChange={this.handler.bind(this, 'userPhone')} />
        </div>
        <div>
          <input type="radio" value="男" checked={gender === '男' } onChange={this.handler.bind(this, 'gender')} name="gender" />男
          <input type="radio" value="女" checked={gender === '女' } onChange={this.handler.bind(this, 'gender')} name="gender" />女
        </div>
        <div>
          <button onClick={this.onSave.bind(this)}>保存</button>
        </div>
      </div>
    )
  }
  // handler1(e) {
  //   // console.log('修改用户名');
  //   console.log(e.target.value);
  //   let value = e.target.value
  //   this.setState(state => {
  //     state.userInfo.userName = value
  //     return state
  //   })
  // }
  // handler2(e) {
  //   // console.log('修改用户年龄');
  //   let value = e.target.value
  //   this.setState(state => {
  //     state.userInfo.userAge = value
  //     return state
  //   })
  // }
  // handler3() {
  //   console.log('修改用户手机号');
  // }
  // handler(key, e) {
  //   // console.log('修改用户名');
  //   console.log(e.target.value);
  //   let value = e.target.value
  //   this.setState(state => {
  //     state.userInfo[key] = value
  //     return state
  //   })
  // }
  handler(key, e) {
    // console.log('修改用户名');
    console.log(e.target.value);
    let name = e.target.name
    let value = e.target.value
    this.setState(state => {
      // state.userInfo[key] = value
      state.userInfo[name] = value
      return state
    })
  }
  onSave() {
    console.log(this.state.userInfo);
  }
}

export default App24
