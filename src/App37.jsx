import React, { Component } from "react";

// 编程式导航
// 1. 通过this.props.history.push/go()跳转
//    push方法参数是一个对象，go方法参数是数字（可以为负数）
// 2. 该组件写的编程式导航会报错(当前组件作为根组件没有props)

import { Link, Route } from "react-router-dom";

import Home from "./Components/Home";
import News from "./Components/News";

export default class App37 extends Component {
  render() {
    return (
      <div>
        <h1>编程式导航</h1>
        <ul>
          <li>
            <Link to="/home?id=123">首页</Link>
          </li>
          <li>
            <Link to="/news">新闻页</Link>
          </li>
        </ul>
        {/* <Routes> */}
          <Route path="/home" component={Home}></Route>
          <Route path="/news/:id" component={News}></Route>
        {/* </Routes> */}
      </div>
    );
  }
  // goNews() {
  //   this.props.history.push({
  //     pathname: '/news',
  //   })
  // }
}
