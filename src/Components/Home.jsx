import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>首页</h3>
        <button onClick={this.goNews.bind(this)}>去新闻页</button>
      </div>
    );
  }
  goNews() {
    this.props.history.push({
      // /10086 是动态路由参数（非埋点情况下优先考虑）
      pathname: "/news/10086",
      // 编程式导航传查询字符串
      search: "id=100&flag=1",
      // 编程式导航的隐式传参
      // 一般用于埋点数据
      //  - 埋点是将部分标记隐藏起来，等待用户去触发
      //  - 因为这个事情不想让用户看到，需要做一些数据的收集，后续做分析
      //  - 因此会使用隐式传参的方式
      state: {
        user: "张三",
        age: 19
      }
    });
  }
}
