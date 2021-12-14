import React, { Component } from 'react'

// 路由组件的几种渲染方式
// 一共有三大类型：component渲染、render渲染、children渲染
//  - component渲染：共有两种方式：组件对象（常用）、函数
//    语法1：<Route path="/xxx" component={组件名}></Route>
//    语法2：<Route path="/xxx" component={(props) => <组件名 />}></Route>
//       或：<Route path="/xxx" component={(props) => {return <div>123</div>}}></Route>

//  - render渲染：只有函数形式的渲染方式
//    语法：<Route path="/xxx" render={(props) => <组件名 />}></Route>

//  - children渲染：共有两种形式：直接使用组件、函数（特定情况下使用）
//    语法1：<Route path="/xxx" children={<组件名 />}></Route>
//    语法2：<Route path="/xxx" children={(props) => {...}}></Route>

// 注意点：
// 1.函数式渲染方式，会使得渲染的组件丢失props
// 2.函数式渲染方式，支持参数传递，其有一个形参"props"
// 3.children的函数式渲染，其是不管它的path是否与地址栏的路径匹配，其函数始终会执行
//    children的组件直接使用形式不会这样
// 4.由于children具备3中的特效，所以children的函数式渲染方式很适合自定义路由导航组件
// 5.虽然children的函数式渲染方式无论地址是否与path匹配都会触发函数的执行，但是其props形参中有一个match属性，当path与地址栏中的地址匹配时match是一个对象，否则是null

import News from "./Components/News"
import About from "./Components/About"

import { Route, Link } from "react-router-dom"

export default class App42 extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/news" tag="div">新闻</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
        </ul>
        {/* 形式1：component的对象形式 */}
        <Route path="/news" component={News}></Route>

        {/* 形式2：component的函数形式 */}
        {/* <Route path="/about" component={() => <About />}></Route> */}
        
        {/* 形式3：render的函数形式 */}
        {/* <Route path="/about" render={() => <About />}></Route> */}

        {/* 形式4：children的组件使用形式 */}
        {/* <Route path="/about" children={<About />}></Route> */}
        
        {/* 形式5：children的函数形式 */}
        <Route path="/about" children={(props) => {
          console.log(props);
          if (props.match === null) {
            return null;
          } else {
            return <About />
          }
        }}></Route>
      </div>
    )
  }
}
