import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import User from './Components/Admin/User'
import Goods from './Components/Admin/Goods'

export default class App38 extends Component {
  render() {
    // 动态获取父路由
    let _prefix = this.props.match.path
    return (
      <div>
        <div>
          {/* 父组件 */}
          <h1>嵌套路由的父组件</h1>
          {/* 嵌套子路由的规则 */}
          <Route path={`${_prefix}/user`} component={User}></Route>
          <Route path={`${_prefix}/goods`} component={Goods}></Route>
          {/* ... */}
        </div>
      </div>
    )
  }
}
