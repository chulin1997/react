import React, { Component } from "react";

// 声明式导航
// 1. 三个常用的路由组件：Router/Link/Route
// 2. 两种路由模式：hash(HashRouter)和history(BrowserRouter)
// 3. 使用<Link>组件得到声名式导航（相当于html中的a标签），链接使用to属性实现（类似于a标签中的href属性）
// 4. 使用<Route>组件展示路由对应的展示内容

import { Link, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import News from "./Components/News";

export default class App36 extends Component {
  render() {
    return (
      <div>
        <h1>声明式导航</h1>
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/news">新闻页</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/news" element={<News/>}></Route>
        </Routes>
      </div>
    );
  }
}
