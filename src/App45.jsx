import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'

// 导入css文件
// import "./assets/css/app.css"

// 导入animate.css
import "./assets/css/animate.min.css"

export default class App45 extends Component {
  state = {
    // 是否显示
    isShow: false
  }
  handlerToggle = () => {
    this.setState(state => {
      return {
        isShow: !state.isShow
      }
    })
  }
  render() {
    return (
      <Fragment>
        <CSSTransition
          // 这是初始化状态
          in={this.state.isShow}
          // 动画的持续时间（ms），合理设置
          timeout={300}
          classNames={{
            // 官方的动画组件样式
            // enter: 'my-node-enter',
            // enterActive: 'my-node-enter-active',
            // exit: 'my-node-exit',
            // exitActive: 'my-node-exit-active',

            // animate的CSS样式
            enter: 'animate__animated',
            enterActive: 'animate__animated animate__fadeInDown',
            exit: 'animate__animated',
            exitActive: 'animate__animated animate__fadeOutUp',
           }}
          // 退出显示的时候是否删除对应的DOM元素，（如果对应的元素后续还有显示的必要，建议通过exitDone属性控制其不显示，这样的渲染效率会更高）
          unmountOnExit
        >
          <div>玩转React Transition</div>
        </CSSTransition>
        <button onClick={this.handlerToggle.bind(this)}>触发动画</button>
      </Fragment>
    )
  }
}
