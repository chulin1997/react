// - 借助react路由默认是**非严格匹配模式**的便利
//   - 例如。上述路由都有`/admin`开头，那么我们可以在路由定义时定义一个组件的路由规则“/admin”。如果这样做，则上述4个路由都会匹配上这个路由规则。匹配的这个组件我们称之为父组件
//   - 扩展：如果某个路由需要使用严格模式，请在这个路由上加上一个属性：exact
// - 再在父组件中写嵌套的子路由的匹配规则


import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import Admin from "./App38"

export default class App39 extends Component {
  render() {
    return (
      <div>
        {/* 匹配父路由 */}
        <Route path="/admin" component={Admin}></Route>
      </div>
    )
  }
}
