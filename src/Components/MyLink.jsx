import React, { Component, Fragment } from 'react'

// 自定义导航组件，实现支持tag属性

// 细节：
//  - tag 属性在vue中是可选的，有则用，默认为 "a"

import { Route, withRouter } from 'react-router-dom'

class MyLink extends Component {
  render() {
    // 接收父传子的数据
    const to = this.props.to
    const Tag = this.props.tag || 'a'
    const text = this.props.children
    return (
      <Fragment>
        <Route path={to} children={(props) => {
          if(props.match){
            // 当前地址与实际展示是匹配的
            return <Tag onClick={this.handler.bind(this, to)} style={{color: "red",background: "yellow"}}>{text}</Tag>
          }else{
            return <Tag onClick={this.handler.bind(this, to)}>{text}</Tag>
          }
        }}></Route>
      </Fragment>
    )
  }
  handler(to) {
    this.props.history.push(to)
  }
}

export default withRouter(MyLink)
