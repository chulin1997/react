import React, { Component, createRef } from "react";

// import store from "./store/index";
import { connect } from 'react-redux'

import axios from "axios";

import * as actions from "./store/Actions/global";

import * as types from "./store/Types/type";

class Login extends Component {
  constructor(props) {
    super(props);
    this.mobile = createRef();
    this.password = createRef();
    // this.state = store.getState();
    // store.subscribe(() => {
    //   this.setState(() => store.getState());
    // });
  }
  render() {
    return (
      <div>
        <div>jwt的数据是：{this.props.global._token}</div>
        <div>
          手机号：
          <input type="text" defaultValue={""} ref={this.mobile} />
        </div>
        <div>
          密码：
          <input type="password" defaultValue={""} ref={this.password} />
        </div>
        <div>
          <button onClick={this.btnSubmit.bind(this)}>登录</button>
        </div>
      </div>
    );
  }
  btnSubmit() {
    const mobile = this.mobile.current.value;
    const password = this.password.current.value;
    console.log(mobile);
    console.log(password);
    axios
      .post("https://api.i-lynn.cn/ip", { mobile, password })
      .then((res) => {
        // console.log(res.data.message);
        // const action = {
        //   type: 'set_token',
        //   payload: res.data.message
        // }
        // store.dispatch(action)

        // store.dispatch(actions.createSetJwt(types.SET_TOKEN, res.data.message));

        this.props.saveToken(types.SET_TOKEN, res.data.area)
      });
  }
}

// 将数据源中的数据映射成当前组件自身的props属性
function mapStateToProps(state) {
  // 返回props对象
  return state
}

// 将派发方法映射成自身的属性
function mapDispatchToProps(dispatch) {
  return {
    saveToken(type, payload) {
      dispatch(actions.createSetJwt(type, payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
