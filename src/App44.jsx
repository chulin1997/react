import React, { Component } from 'react'

// 案例：自定义导航组件（声明式导航展示效果）

import { Route, Link } from 'react-router-dom'

import News from "./Components/News"
import About from "./Components/About"
import NowPlaying from "./Components/NowPlaying"

// 导入自定义导航组件
import MyLink from "./Components/MyLink"

export default class App44 extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/news">新闻</Link>
          </li>
          <li>
            {/* 父传子传值方式 */}
            <MyLink to="/about" tag="div">关于</MyLink>
          </li>
          <li>
            <MyLink to="/nowplaying" tag="p">正在热映</MyLink>
          </li>
        </ul>

        {/* 路由容器/规则 */}
        <Route path="/news" component={News}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/nowPlaying" component={NowPlaying}></Route>
      </div>
    )
  }
}
